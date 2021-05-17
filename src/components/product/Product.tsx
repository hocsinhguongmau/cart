import React, { useContext } from "react"

import ProductContext from "../../context/context"
import { ProductType } from "../../types"

import "./product.scss"

const Product: React.FC<any> = ({ cartProduct }): JSX.Element => {
	const products = useContext(ProductContext)
	return products !== undefined
		? products
				.filter(
					(product: ProductType) =>
						product.id === cartProduct.productId,
				)
				.map((product: ProductType) => (
					<tr className='product' key={`product_${product.id}`}>
						<td className='product__img'>
							<img alt={product.title} src={product.image} />
						</td>
						<td className='product__title'>{product.title}</td>
						<td className='product__price'>{product.price} </td>
						<td className='product__price'>
							{cartProduct.quantity}
						</td>
						<td>x</td>
					</tr>
				))
		: null
}

export default Product
