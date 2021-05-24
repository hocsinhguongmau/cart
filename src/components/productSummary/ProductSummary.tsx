import React, { useContext } from "react"

import { ProductContext } from "../../context/context"
import { CartProductType, ProductType } from "../../types"

import "./productSummary.scss"

type Props = {
	cartProduct: CartProductType
	cartIndex: number
}

const ProductSummary: Function = ({ cartProduct, cartIndex }: Props) => {
	const products = useContext(ProductContext)!
	const total = (price: number, quantity: number) => {
		let discount: number = 0
		if (quantity > 1) {
			if (quantity === 2) {
				discount = 0.2
			} else if (quantity === 3) {
				discount = 0.3
			} else if (quantity >= 4) {
				discount = 0.4
			}

			return (
				<>
					<del>${(price * quantity).toFixed(2)}</del>
					<br />-{discount * 100}%
					<br />
					<span className='price'>
						$
						{(
							price * quantity -
							price * quantity * discount
						).toFixed(2)}
					</span>
				</>
			)
		} else {
			return `$${(price * quantity).toFixed(2)}`
		}
	}

	return products !== undefined
		? products.map((product: ProductType) => {
				if (product.id === cartProduct.productId) {
					return (
						<tr className='product' key={`product_${product.id}`}>
							<td className='product__img'>
								<img alt={product.title} src={product.image} />
							</td>
							<td className='product__title'>{product.title}</td>
							<td className='product__price'>{product.price} </td>
							<td className='product__quantity'>
								{cartProduct.quantity}
							</td>
							<td>
								{total(product.price, cartProduct.quantity)}
							</td>
						</tr>
					)
				}
				return null
		  })
		: null
}

export default ProductSummary
