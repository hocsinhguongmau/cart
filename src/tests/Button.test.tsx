import { fireEvent, render, screen } from "@testing-library/react"
import Button from "../components/button/Button"

const handleClick = jest.fn()
describe("<Button />", () => {
	it("should render its children", () => {
		const { getByText } = render(
			<Button onClickHandler={handleClick}>Button</Button>,
		)
		expect(getByText(/Button/i)).toBeInTheDocument()
	})

	it("calls onClick prop when clicked", () => {
		render(<Button onClickHandler={handleClick}>Button</Button>)
		fireEvent.click(screen.getByText(/button/i))
		expect(handleClick).toHaveBeenCalledTimes(1)
	})
})
