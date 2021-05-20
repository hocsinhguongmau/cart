import React from "react"

import "./cartItem.scss"
import Product from "../product/Product"

import { CartProductType, CartType } from "../../types"

type Props = {
	cart: CartType
	cartIndex: number
}
const CartItem: Function = ({ cart, cartIndex }: Props): JSX.Element => {
	return (
		<div className='cartItem' data-testid='cart-item'>
			<p>{cartIndex}</p>
			<p className='cartItem__title'>Order number: {cart.id}</p>
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
					{cart.products.map(
						(
							cartProduct: CartProductType,
							productIndex: number,
						) => (
							<Product
								cartId={cart.id}
								productIndex={productIndex}
								cartIndex={cartIndex}
								key={`product_${cartProduct.productId}`}
								cartProduct={cartProduct}
							/>
						),
					)}
				</tbody>
			</table>
		</div>
	)
}

export default CartItem
