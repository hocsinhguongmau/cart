import React, { useContext } from "react"

import "./cartItem.scss"
import Product from "../product/Product"

import { CartProductType } from "../../types"

const CartItem: React.FC<any> = ({ cart }): JSX.Element => {
	return (
		<div className='cartItem'>
			<p>Order number: {cart.id}</p>
			{cart.products.map((cartProduct: CartProductType) => (
				<Product cartProduct={cartProduct} />
			))}
		</div>
	)
}

export default CartItem
