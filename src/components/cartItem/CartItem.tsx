import React, { useContext } from "react"

import "./cartItem.scss"
import Product from "../product/Product"

import { CartProductType } from "../../types"

const CartItem: React.FC<any> = ({ cart }): JSX.Element => {
	return (
		<div className='cartItem' data-testid='cart-item'>
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
					{cart.products.map((cartProduct: CartProductType) => (
						<Product
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
