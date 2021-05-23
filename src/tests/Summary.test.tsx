import React from "react"
import { render, screen, within } from "@testing-library/react"
import { carts } from "../mockData"

import Summary from "../components/summary/Summary"

const cartProduct = carts[0].products

describe("<Summary />", () => {
	it("should display table header", () => {
		render(<Summary cartProduct={cartProduct} />)
		const table = screen.getByTestId("summary-table")
		const [columnNames, ...rows] = within(table).getAllByRole("rowgroup")
		within(columnNames).getByText("Image")
		within(columnNames).getByText("Name")
		within(columnNames).getByText("Price")
		within(columnNames).getByText("Quantity")
		within(columnNames).getByText("Total")
	})
})
