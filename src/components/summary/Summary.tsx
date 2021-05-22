import React, { useContext, useState, useEffect } from "react"

import { CartProductType } from "../../types"
import ProductSummary from "../productSummary/ProductSummary"
import { ProductContext } from "../../context/context"

import "./summary.scss"

type Props = {
	cartProduct: CartProductType[]
}

const Summary: Function = ({ cartProduct }: Props) => {
	const products = useContext(ProductContext)
	const [finalPrice, setFinalPrice] = useState<number>(0)
	const totalSummary = () => {
		let total: number = 0
		cartProduct.forEach((cart, index) => {
			let price: number = Number(
				products
					?.filter((product) => product.id === cart.productId)
					.map((product) => product.price),
			)
			if (cart.quantity === 2) {
				price = price - price * 0.2
			} else if (cart.quantity === 3) {
				price = price - price * 0.3
			} else if (cart.quantity >= 4) {
				price = price - price * 0.4
			}
			total += cart.quantity * price
		})
		setFinalPrice(Number(total.toFixed(2)))
	}

	useEffect(() => {
		totalSummary()
	}, [])

	return (
		<div className='summaryItem' data-testid='summary-item'>
			<table cellPadding={0} cellSpacing={0} data-testid='summary-table'>
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
					<tr className='total-price'>
						<td colSpan={4}>Total</td>
						<td colSpan={1}>${finalPrice}</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default Summary
