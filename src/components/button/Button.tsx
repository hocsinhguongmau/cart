import React from "react"

import "./button.scss"

type Props = {
	children: any
	onClickHandler: () => void
}

const Button: Function = ({ children, onClickHandler }: Props) => {
	return (
		<button onClick={onClickHandler} className='button'>
			{children}
		</button>
	)
}

export default Button
