import React from "react"

import { CartType, ProductType } from "../types"

const ProductContext = React.createContext<ProductType[] | undefined>(undefined)
type CartContext = {
	carts: CartType[] | undefined
	handleSubtractQuantity: (cartIndex: number, productIndex: number) => void
	handleAddQuantity: (cartIndex: number, productIndex: number) => void
}
const CartContext = React.createContext<CartContext>({
	carts: undefined,
	handleSubtractQuantity: () => {},
	handleAddQuantity: () => {},
})

export { ProductContext, CartContext }
