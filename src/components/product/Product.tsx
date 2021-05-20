import React, { useContext } from "react"

import { ProductContext, CartContext } from "../../context/context"
import { CartProductType, ProductType } from "../../types"

import "./product.scss"

type Props = {
	cartProduct: CartProductType
	cartIndex: number
}

const Product: Function = ({ cartProduct, cartIndex }: Props) => {
	const products = useContext(ProductContext)!
	let carts = useContext(CartContext)!

	return products.map((product: ProductType) => {
		if (product.id === cartProduct.productId) {
			return (
				<tr className='product' key={`product_${product.id}`}>
					<td className='product__img'>
						<img alt={product.title} src={product.image} />
					</td>
					<td className='product__title'>{product.title}</td>
					<td className='product__price'>{product.price} </td>
					<td className='product__price'>
						<button
							onClick={() =>
								carts.handleSubtractQuantity(
									cartIndex,
									product.id,
								)
							}>
							-
						</button>
						{cartProduct.quantity}
						<button
							onClick={() =>
								carts.handleAddQuantity(cartIndex, product.id)
							}>
							+
						</button>
					</td>
					<td>
						<button
							onClick={() =>
								carts.handleRemoveProduct(cartIndex, product.id)
							}>
							x
						</button>
					</td>
				</tr>
			)
		}
	})
}

export default Product
