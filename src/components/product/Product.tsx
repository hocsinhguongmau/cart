import { faMinus, faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useContext } from "react"

import { ProductContext, CartContext } from "../../context/context"
import { CartProductType, ProductType } from "../../types"
import Button from "../button/Button"

import "./product.scss"

type Props = {
	cartProduct: CartProductType
	cartIndex: number
	withButtons: boolean
}

const Product: Function = ({ cartProduct, cartIndex, withButtons }: Props) => {
	const products = useContext(ProductContext)
	let carts = useContext(CartContext)

	return products !== undefined
		? products?.map((product: ProductType) => {
				if (product.id === cartProduct.productId) {
					return (
						<tr className='product' key={`product_${product.id}`}>
							<td
								data-testid='product-image'
								className='product__img'>
								<img alt={product.title} src={product.image} />
							</td>
							<td
								data-testid='product-title'
								className='product__title'>
								{product.title}
							</td>
							<td
								data-testid='product-price'
								className='product__price'>
								{product.price}{" "}
							</td>
							<td
								data-testid='product-quantity'
								className='product__quantity'>
								{withButtons ? (
									<Button
										onClickHandler={() =>
											carts.handleSubtractQuantity(
												cartIndex,
												product.id,
											)
										}>
										<FontAwesomeIcon icon={faMinus} />
									</Button>
								) : null}

								{cartProduct.quantity}
								{withButtons ? (
									<Button
										onClickHandler={() =>
											carts.handleAddQuantity(
												cartIndex,
												product.id,
											)
										}>
										<FontAwesomeIcon icon={faPlus} />
									</Button>
								) : null}
							</td>
							{withButtons ? (
								<td>
									<Button
										onClickHandler={() =>
											carts.handleRemoveProduct(
												cartIndex,
												product.id,
											)
										}>
										<FontAwesomeIcon icon={faTrashAlt} />
									</Button>
								</td>
							) : null}
						</tr>
					)
				}
				return null
		  })
		: null
}

export default Product
