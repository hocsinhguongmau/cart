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

	// return products
	// 	.filter((product: ProductType) => product.id === cartProduct.productId)
	// 	.map((product: ProductType, productIndex: number) => (
	// 		<tr className='product' key={`product_${product.id}`}>
	// 			<td className='product__img'>
	// 				<img alt={product.title} src={product.image} />
	// 			</td>
	// 			<td className='product__title'>{product.title}</td>
	// 			<td className='product__price'>{product.price} </td>
	// 			<td className='product__price'>
	// 				<button
	// 					onClick={() =>
	// 						carts.handleSubtractQuantity(
	// 							cartIndex,
	// 							productIndex,
	// 						)
	// 					}>
	// 					-
	// 				</button>
	// 				{cartProduct.quantity}
	// 				<button>+</button>
	// 			</td>
	// 			<td>x</td>
	// 		</tr>
	// 	))

	return products.map((product: ProductType, productIndex: number) => {
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
									productIndex,
								)
							}>
							-
						</button>
						{cartProduct.quantity}
						<button
							onClick={() =>
								carts.handleAddQuantity(cartIndex, productIndex)
							}>
							+
						</button>
					</td>
					<td>x</td>
				</tr>
			)
		}
	})
}

export default Product
