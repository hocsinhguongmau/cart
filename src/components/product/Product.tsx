import React, { useContext } from "react"

import ProductContext from "../../context/context"
import { ProductType } from "../../types"

const Product: React.FC<any> = ({ cartProduct }): JSX.Element => {
	const products = useContext(ProductContext)
	return products !== undefined
		? products
				.filter(
					(product: ProductType) =>
						product.id === cartProduct.productId,
				)
				.map((product: ProductType) => (
					<div key={`product_${product.id}`}>
						<p>{product.title}</p>
						<p>
							<img
								alt={product.title}
								width={70}
								src={product.image}
							/>
						</p>
						<p>{`Price: ${product.price} - ${cartProduct.quantity} pcs`}</p>
					</div>
				))
		: null
}

export default Product
