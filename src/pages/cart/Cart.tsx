import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"

import CartItem from "../../components/cartItem/CartItem"

import ProductContext from "../../context/context"

import { CartProductType, CartType, ProductType } from "../../types"

const Cart: React.FC = () => {
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [cartError, setCartError] = useState<string | null>(null)
	const [productError, setProductError] = useState<string | null>(null)
	const [carts, setCarts] = useState<CartType | undefined>()
	const [products, setProducts] = useState<ProductType | undefined>()
	const api = "https://fakestoreapi.com"
	const numberOfCarts: number = 5

	//Fetch 5 carts from API
	async function fetchCarts() {
		try {
			await fetch(`${api}/carts?limit=${numberOfCarts}`)
				.then((res) => res.json())
				.then((json) => {
					setCarts(json)
				})
		} catch (e) {
			setCartError(e)
		}
	}

	//Fetch all products from API
	async function fetchProducts() {
		try {
			setIsLoading(true)
			await fetch(`${api}/products`)
				.then((res) => res.json())
				.then((json) => {
					setProducts(json)
				})
		} catch (e) {
			setProductError(e)
		} finally {
			setIsLoading(false)
		}
	}

	useEffect(() => {
		fetchProducts()
		fetchCarts()
	}, [])

	return (
		<div className='cart'>
			{cartError ? "Failed to load cart" : null}
			{productError ? "Failed to load products" : null}
			{isLoading ? (
				<p>
					<FontAwesomeIcon className='fa-spin' icon={faSpinner} />
				</p>
			) : carts !== undefined ? (
				carts.map((cart) => (
					<div key={`cart_${cart.id}`}>
						<div className='cartItem'>
							<p>Order number: {cart.id}</p>
							{cart.products.map((cartProduct: CartProductType) =>
								products !== undefined
									? products.map((product) => {
											if (
												product.id ===
												cartProduct.productId
											) {
												return (
													<div
														key={`product_${product.id}`}>
														<p>
															<img
																alt={
																	product.title
																}
																width={200}
																src={
																	product.image
																}
															/>
														</p>
														<p>{product.title}</p>
														<p>{`Price: ${product.price} - ${cartProduct.quantity} pcs`}</p>
													</div>
												)
											}
									  })
									: null,
							)}
							<hr />
						</div>
					</div>
				))
			) : null}
		</div>
	)
}

export default Cart
