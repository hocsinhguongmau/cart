import React, { useContext } from "react"

import ProductContext from "../../context/context"
import { CartProductType, ProductType } from "../../types"

import "./product.scss"

type Props = {
	cartProduct: CartProductType
}

const Product: Function = ({ cartProduct }: Props): JSX.Element[] => {
	const products = useContext(ProductContext)!
	return products
		.filter((product: ProductType) => product.id === cartProduct.productId)
		.map((product: ProductType) => (
			<tr className='product' key={`product_${product.id}`}>
				<td className='product__img'>
					<img alt={product.title} src={product.image} />
				</td>
				<td className='product__title'>{product.title}</td>
				<td className='product__price'>{product.price} </td>
				<td className='product__price'>{cartProduct.quantity}</td>
				<td>x</td>
			</tr>
		))
}

export default Product
