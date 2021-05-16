import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"

import CartItem from "../../components/cartItem/CartItem"

import ProductContext from "../../context/context"

import { CartType, ProductType } from "../../types"

import "./cart.scss"

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
			<h1 className='cart__title'>Your cart</h1>
			<ProductContext.Provider value={products}>
				{cartError ? "Failed to load cart" : null}
				{productError ? "Failed to load products" : null}
				{isLoading ? (
					<p className='loading'>
						<FontAwesomeIcon className='fa-spin' icon={faSpinner} />
					</p>
				) : carts !== undefined ? (
					carts.map((cart) => (
						<CartItem key={`cart_${cart.id}`} cart={cart} />
					))
				) : null}
			</ProductContext.Provider>
		</div>
	)
}

export default Cart
