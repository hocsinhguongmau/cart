import React from "react"

import { CartProductType } from "../../types"
import ProductSummary from "../productSummary/ProductSummary"

import "./summary.scss"

type Props = {
	cartProduct: CartProductType[]
}

const Summary: Function = ({ cartProduct }: Props) => {
	return (
		<div className='cartItem' data-testid='cart-item'>
			<table cellPadding={0} cellSpacing={0} data-testid='cart-table'>
				<thead>
					<tr>
						<th>Image</th>
						<th>Name</th>
						<th>Price</th>
						<th>Quantity</th>
						<th>Total</th>
					</tr>
				</thead>
				<tbody>
					{cartProduct.map((cart: CartProductType) => (
						<ProductSummary
							key={`product_${cart.productId}`}
							cartProduct={cart}
						/>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default Summary
