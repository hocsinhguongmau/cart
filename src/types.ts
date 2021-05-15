export type CartType = {
	id: number
	products: Array<CartProductType>
}[]

export type CartProductType = {
	productId: number
	quantity: number
}

export type ProductType = {
	id: number
	image: string
	title: string
	price: number
	quantity: number
}[]
