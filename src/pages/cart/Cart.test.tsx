import React from "react"
import ReactDOM from "react-dom"
import { render, screen } from "@testing-library/react"
import Cart from "./Cart"

test("Cart should render its title", () => {
	const { getByText } = render(<Cart />)
	expect(getByText(/Your cart/i)).toBeInTheDocument()
})
