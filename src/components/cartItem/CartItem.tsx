import React, { useContext } from "react"

import "./cartItem.scss"
import Product from "../product/Product"

import { CartProductType, CartType } from "../../types"

import { CartContext } from "../../context/context"
import Button from "../button/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"

type Props = {
	cart: CartType
	cartIndex: number
}
const CartItem: Function = ({ cart, cartIndex }: Props): JSX.Element => {
	const carts = useContext(CartContext)
	return (
		<div className='cartItem' data-testid='cart-item'>
			<p className='cartItem__title'>
				Order number: {cart.id}
				<Button onClickHandler={() => carts.handleRemoveCart(cart.id)}>
					<FontAwesomeIcon icon={faTrashAlt} />
				</Button>
			</p>
			<table cellPadding={0} cellSpacing={0} data-testid='cart-table'>
				<thead>
					<tr>
						<th>Image</th>
						<th>Name</th>
						<th>Price</th>
						<th>Quantity</th>
						<th>Remove</th>
					</tr>
				</thead>
				<tbody>
					{cart.products.map((cartProduct: CartProductType) => (
						<Product
							cartId={cart.id}
							cartIndex={cartIndex}
							key={`product_${cartProduct.productId}`}
							cartProduct={cartProduct}
						/>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default CartItem
