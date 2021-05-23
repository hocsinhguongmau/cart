import React, { useContext } from "react"

import "./cartItem.scss"
import Product from "../product/Product"

import { CartProductType, CartType } from "../../types"

import { CartContext } from "../../context/context"
import Button from "../button/Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faTrashAlt } from "@fortawesome/free-solid-svg-icons"

type Props = {
	cart: CartType
	cartIndex: number
	withButtons: boolean
}
const CartItem: Function = ({
	cart,
	cartIndex,
	withButtons,
}: Props): JSX.Element => {
	const carts = useContext(CartContext)
	return (
		<div className='cartItem' data-testid='cart-item'>
			<p className='cartItem__title'>
				Order number: {cart.id}
				{withButtons ? (
					<>
						<Button
							onClickHandler={() =>
								carts.handleRemoveCart(cart.id)
							}>
							<FontAwesomeIcon icon={faTrashAlt} />
						</Button>
						<Button
							onClickHandler={() =>
								carts.handleApprovedCart(cart.id)
							}>
							<FontAwesomeIcon icon={faCheck} />
						</Button>
					</>
				) : null}
			</p>
			<table cellPadding={0} cellSpacing={0} data-testid='cart-table'>
				<thead>
					<tr>
						<th>Image</th>
						<th>Name</th>
						<th>Price</th>
						<th>Quantity</th>
						{withButtons ? <th>Remove</th> : null}
					</tr>
				</thead>
				<tbody>
					{cart.products.map((cartProduct: CartProductType) => (
						<Product
							cartId={cart.id}
							cartIndex={cartIndex}
							key={`product_${cartProduct.productId}`}
							cartProduct={cartProduct}
							withButtons={withButtons}
						/>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default CartItem
