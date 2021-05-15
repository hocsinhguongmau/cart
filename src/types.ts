export type CartType = {
	id: number
	products: Array<CartProductType>
}[]

export type CartProductType = {
	productId: number
	quantity: number
}
