import React from "react"

import { CartType, ProductType } from "../types"

const ProductContext = React.createContext<ProductType[] | undefined>(undefined)
type CartContext = {
	carts: CartType[] | undefined
	handleSubtractQuantity: (cartIndex: number, id: number) => void
	handleAddQuantity: (cartIndex: number, id: number) => void
	handleRemoveProduct: (cartIndex: number, id: number) => void
	handleRemoveCart: (cartId: number) => void
	handleApprovedCart: (cartId: number) => void
}
const CartContext = React.createContext<CartContext>({
	carts: undefined,
	handleSubtractQuantity: () => {},
	handleAddQuantity: () => {},
	handleRemoveProduct: () => {},
	handleRemoveCart: () => {},
	handleApprovedCart: () => {},
})

export { ProductContext, CartContext }
