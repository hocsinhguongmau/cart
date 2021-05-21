import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useContext } from "react"

import { ProductContext, CartContext } from "../../context/context"
import { CartProductType, ProductType } from "../../types"

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
