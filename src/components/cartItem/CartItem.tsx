import React, { useContext } from "react"

import "./cartItem.scss"

import ProductContext from "../../context/context"

const CartItem: React.FC<any> = ({ props }): JSX.Element => {
	const products = useContext(ProductContext)
	return (
		<div className='cartItem'>
			<p>Order number: {props.id}</p>
			<p>By child {props.id}</p>
			{props.products.map((product: any) => (
				<p>{product.productId}</p>
			))}
		</div>
	)
}

export default CartItem
