import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import axios from "axios"
import CartItem from "../../components/cartItem/CartItem"

import ProductContext from "../../context/context"

import { CartType, ProductType } from "../../types"

import "./cart.scss"
const api = "https://fakestoreapi.com"
const numberOfCarts: number = 5

const Cart: React.FC = () => {
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [cartError, setCartError] = useState<string | null>(null)
	const [productError, setProductError] = useState<string | null>(null)
	const [carts, setCarts] = useState<CartType[] | undefined>()
	const [products, setProducts] = useState<ProductType[] | undefined>()

	useEffect(() => {
		//Fetch 5 carts from API
		const fetchCarts = async () => {
			await axios
				.get(`${api}/carts?limit=${numberOfCarts}`)
				.then(function (response: any) {
					setCarts(response.data)
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
					setCartError(error)
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
