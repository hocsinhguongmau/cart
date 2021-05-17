import React from "react"
import ReactDOM from "react-dom"
import { render, screen } from "@testing-library/react"
import App from "./App"

describe("App", () => {
	it("renders without crashing", () => {
		const div = document.createElement("div")
		ReactDOM.render(<App />, div)
		ReactDOM.unmountComponentAtNode(div)
	})

	test("renders Cart component", () => {
		const { getByTestId } = render(<App />)
		expect(getByTestId(/cart/i)).toBeInTheDocument()
	})
})
