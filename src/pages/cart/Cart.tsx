import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"

import CartItem from "../../components/cartItem/CartItem"

import ProductContext from "../../context/context"

const Cart: React.FC = () => {
	const [isLoading, setIsLoading] = useState(true)
	const [cartError, setCartError] = useState(null)
	const [productError, setProductError] = useState(null)
	const [carts, setCarts] = useState<any>([])
	const [products, setProducts] = useState<any>([])
	const api = "https://fakestoreapi.com"
	const numberOfCarts = 5

	//Fetch 5 carts from API
	async function fetchCarts() {
		try {
			setIsLoading(true)
			await fetch(`${api}/carts?limit=${numberOfCarts}`)
				.then((res) => res.json())
				.then((json) => {
					setCarts(json)
					console.log(json)
				})
		} catch (e) {
			setCartError(e)
		} finally {
			setIsLoading(false)
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
					console.log(json)
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
			) : (
				carts.map((cart: any) => (
					<div key={`cart_${cart.id}`}>
						<div className='cartItem'>
							<p>Order number: {cart.id}</p>
							{cart.products.map((cartProduct: any) => {
								return (
									<p>
										{products[cartProduct.productId].title}
									</p>
								)
							})}
							<hr />
						</div>
					</div>
				))
			)}
		</div>
	)
}

export default Cart
