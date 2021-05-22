import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import axios from "axios"

import CartItem from "../../components/cartItem/CartItem"
import Summary from "../../components/summary/Summary"

import { ProductContext, CartContext } from "../../context/context"

import { CartProductType, CartType, ProductType } from "../../types"

import "./cart.scss"
import Discards from "../../components/discards/Discards"
import Approved from "../../components/approved/Approved"
const api = "https://fakestoreapi.com"
const numberOfCarts: number = 5

const Cart: React.FC = () => {
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [cartError, setCartError] = useState<string | null>(null)
	const [productError, setProductError] = useState<string | null>(null)
	const [carts, setCarts] = useState<CartType[]>([])
	const [products, setProducts] = useState<ProductType[]>([])
	const [discards, setDiscards] = useState<CartType[]>([])
	const [approved, setApproved] = useState<CartType[]>([])
	const [showSummary, setShowSummary] = useState<boolean>(false)
	const [summaryCarts, setSummaryCarts] = useState<CartProductType[]>([])
	const [cartLength, setCartLength] = useState<number>(0)

	const handleRemoveCart = (cartId: number) => {
		const clonedCarts = carts.filter((cart) => cart.id !== cartId)
		const removeCarts = [...discards]
		const approvedCarts = [...approved]
		carts.forEach((cart) => {
			if (cart.id === cartId) {
				removeCarts.push(cart)
			}
		})
		setCarts(clonedCarts)
		setDiscards(removeCarts)
		//Send delete cart request
		fetch(`${api}/carts/${cartId}`, {
			method: "DELETE",
		})
			.then((res) => res.json())
			.then((json) => console.log(json))
		if (clonedCarts.length < 1) {
			handleCheckout(approvedCarts)
		}
	}

	const handleApprovedCart = (cartId: number) => {
		const clonedCarts = carts.filter((cart) => cart.id !== cartId)
		const approvedCarts = [...approved]
		carts.forEach((cart) => {
			if (cart.id === cartId) {
				approvedCarts.push(cart)
				//Send request for approved cart
				fetch(`${api}/carts`, {
					method: "POST",
					body: JSON.stringify(cart),
				})
					.then((res) => res.json())
					.then((json) => console.log(json))
			}
		})
		setCarts(clonedCarts)
		setApproved(approvedCarts)
		setCartLength(cartLength - 1)

		if (clonedCarts.length < 1) {
			handleCheckout(approvedCarts)
		}
	}

	const handleSubtractQuantity = (cartIndex: number, id: number) => {
		const clonedCarts = [...carts]
		const modifiedCarts = clonedCarts[cartIndex].products.map((product) => {
			if (product.productId === id) {
				if (product.quantity < 1) {
					return product
				}
				return {
					productId: product.productId,
					quantity: product.quantity - 1,
				}
			} else {
				return product
			}
		})
		clonedCarts[cartIndex].products = modifiedCarts
		setCarts(clonedCarts)
	}
	const handleAddQuantity = (cartIndex: number, id: number) => {
		const clonedCarts = [...carts]
		const modifiedCarts = clonedCarts[cartIndex].products.map((product) => {
			if (product.productId === id) {
				return {
					productId: product.productId,
					quantity: product.quantity + 1,
				}
			} else {
				return product
			}
		})
		clonedCarts[cartIndex].products = modifiedCarts

		setCarts(clonedCarts)
	}
	const handleRemoveProduct = (cartIndex: number, id: number) => {
		const clonedCarts = [...carts]
		const products = clonedCarts[cartIndex].products
		const filteredProduct = products.filter(
			(product) => product.productId === id,
		)
		const removedCarts = [...discards]

		if (
			removedCarts.find(
				(cart) => cart.id === clonedCarts[cartIndex].id,
			) === undefined
		) {
			const { products, ...cart } = clonedCarts[cartIndex]
			const newCart = { ...cart, products: filteredProduct }
			removedCarts.push(newCart)
		} else {
			removedCarts.forEach((cart) => {
				if (cart.id === clonedCarts[cartIndex].id) {
					cart.products.push(filteredProduct[0])
				}
			})
		}
		if (products.length > 1) {
			const filteredCart = products.filter(
				(product) => product.productId !== id,
			)

			clonedCarts[cartIndex].products = filteredCart
			setCarts(clonedCarts)
		} else {
			const filteredCarts = clonedCarts.filter(
				(cart, index) => index !== cartIndex,
			)

			setCarts(filteredCarts)
		}

		setDiscards(removedCarts)
		fetch(`${api}/products/${id}`, {
			method: "DELETE",
		})
			.then((res) => res.json())
			.then((json) => console.log(json))
	}
	const handleCheckout = (approved: CartType[]) => {
		const summaryProducts: any = []

		approved.forEach((cart) =>
			cart.products.forEach((product) => {
				summaryProducts.push(product)
			}),
		)

		const result = summaryProducts.reduce(
			(r: any, { productId, quantity }: any) => {
				r[productId] = r[productId] || {
					productId,
					quantity: 0,
				}
				r[productId].quantity += quantity
				return r
			},
			{},
		)

		setSummaryCarts(Object.values(result))
		setShowSummary(true)
	}
	useEffect(() => {
		//Fetch 5 carts from API
		const fetchCarts = async () => {
			await axios
				.get(`${api}/carts?limit=${numberOfCarts}`)
				.then(function (response: any) {
					setCarts(response.data)
					setCartLength(response.data.length)
				})
				.catch(function (error: string) {
					setCartError(error)
				})
		}

		//Fetch all products from API
		const fetchProducts = async () => {
			setIsLoading(true)
			await axios
				.get(`${api}/products`)
				.then(function (response: any) {
					setProducts(response.data)
				})
				.catch(function (error: string) {
					setProductError(error)
				})
				.then(() => setIsLoading(false))
		}
		fetchProducts()
		fetchCarts()
	}, [])

	return (
		<div className='cart' data-testid='cart'>
			<h1 className='cart__title'>Your cart</h1>
			<ProductContext.Provider value={products}>
				{!showSummary && (
					<>
						<CartContext.Provider
							value={{
								carts,
								handleSubtractQuantity,
								handleAddQuantity,
								handleRemoveProduct,
								handleRemoveCart,
								handleApprovedCart,
							}}>
							{cartError ? "Failed to load cart" : null}
							{productError ? "Failed to load products" : null}
							{isLoading ? (
								<p className='loading'>
									<FontAwesomeIcon
										className='fa-spin'
										icon={faSpinner}
									/>
								</p>
							) : carts !== undefined ? (
								carts.map((cart, cartIndex) => (
									<CartItem
										key={`cart_${cart.id}`}
										cart={cart}
										cartIndex={cartIndex}
										withButtons={true}
									/>
								))
							) : null}
						</CartContext.Provider>
					</>
				)}
				{showSummary && (
					<>
						<Summary cartProduct={summaryCarts} />
						<div className='choice-lists'>
							<Approved approved={approved} withButtons={false} />
							{discards.length ? (
								<Discards
									discards={discards}
									withButtons={false}
								/>
							) : (
								<div className='discards'>
									<h2 className='discards__title'>
										You have no discard item
									</h2>
								</div>
							)}
						</div>
					</>
				)}
			</ProductContext.Provider>
		</div>
	)
}

export default Cart
