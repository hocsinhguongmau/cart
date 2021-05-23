import React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import moxios from "moxios"
import Cart from "../pages/cart/Cart"
import { carts, products } from "../mockData"
import axios from "axios"

describe("<Cart />", () => {
	it("Cart should render its title", async () => {
		const { getByText } = render(<Cart />)
		expect(getByText(/Your cart/i)).toBeInTheDocument()
	})
	beforeEach(function () {
		moxios.install()
	})

	afterEach(function () {
		moxios.uninstall()
	})

	it("should fetch carts from api", async () => {
		moxios.wait(() => {
			moxios.requests
				.get("get", "https://fakestoreapi.com/carts?limit=5")
				.respondWith({
					status: 200,
					response: carts,
				})
		})
	})
	it("should fetch all products from api", async () => {
		moxios.wait(() => {
			moxios.requests
				.get("get", "https://fakestoreapi.com/products")
				.respondWith({
					status: 200,
					response: products,
				})
		})
	})
	it("renders 5 carts", async () => {
		const component = render(<Cart />)
		await waitFor(() => {
			const items = component.getAllByTestId("cart-item")
			expect(items).toHaveLength(5)
		})
	})
})
