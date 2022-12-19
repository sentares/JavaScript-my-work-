export interface IProductsArray {
	productArray: Products[]
}

export interface IPropsProductsArray {
	setProductArray: Products[]
}

export interface Products {
	product: string
	name: string
	price: number
	category: string
	count: number
	active: boolean
	id: string
	imageUrl: string
}
