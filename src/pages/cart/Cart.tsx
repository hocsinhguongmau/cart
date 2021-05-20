import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import axios from "axios"

import CartItem from "../../components/cartItem/CartItem"

import { ProductContext, CartContext } from "../../context/context"

import { CartType, ProductType } from "../../types"

import "./cart.scss"
const api = "https://fakestoreapi.com"
const numberOfCarts: number = 5

const Cart: React.FC = () => {
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [cartError, setCartError] = useState<string | null>(null)
	const [productError, setProductError] = useState<string | null>(null)
	const [carts, setCarts] = useState<CartType[]>([])
	const [products, setProducts] = useState<ProductType[]>([])
	const [originalCarts, setOriginalCarts] = useState<CartType[]>([])
	const [difCarts, setDifCarts] = useState<CartType[]>([])

	const handleRemoveCart = (cartId: number) => {
		const clonedCarts = carts.filter((cart) => cart.id !== cartId)
		setCarts(clonedCarts)
	}

	const handleSubtractQuantity = (cartIndex: number, id: number) => {
		const clonedCarts = [...carts]
		const modifiedCarts = clonedCarts[cartIndex].products.map((product) => {
			if (product.productId === id) {
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
		if (products.length > 1) {
			const filteredCart = products.filter(
				(product) => product.productId !== id,
			)
			clonedCarts[cartIndex].products = filteredCart
			setCarts(clonedCarts)
		} else {
			const hmm = clonedCarts.filter((cart, index) => index !== cartIndex)
			setCarts(hmm)
		}
	}
	const handleDifference = () => {
		console.log(difCarts)
	}
	useEffect(() => {
		//Fetch 5 carts from API
		const fetchCarts = async () => {
			await axios
				.get(`${api}/carts?limit=${numberOfCarts}`)
				.then(function (response: any) {
					setCarts(response.data)
					setOriginalCarts(response.data)
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
				<CartContext.Provider
					value={{
						carts,
						handleSubtractQuantity,
						handleAddQuantity,
						handleRemoveProduct,
						handleRemoveCart,
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
							/>
						))
					) : null}
				</CartContext.Provider>
			</ProductContext.Provider>
			<button>Checkout</button>
		</div>
	)
}

export default Cart
