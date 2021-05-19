export type CartType = {
	id: number
	userId: number
	date: string
	products: CartProductType[]
	__v: number
}

export type CartProductType = {
	productId: number
	quantity: number
}

export type ProductType = {
	id: number
	title: string
	price: number
	description: string
	category: string
	image: string
}
