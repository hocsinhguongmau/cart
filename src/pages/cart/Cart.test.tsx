import { render, screen } from "@testing-library/react"
import Cart from "./Cart"
import { carts } from "../../mockData"
import fetch from "jest-fetch-mock"

describe("Cart", () => {
	it("Cart should render its title", () => {
		const { getByText } = render(<Cart />)
		expect(getByText(/Your cart/i)).toBeInTheDocument()
	})
	beforeEach(() => {
		fetch.resetMocks()
	})

	it("finds exchange", async () => {})
})
