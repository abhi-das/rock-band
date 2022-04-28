export interface CartProductItem {
	id: number;
	quantity: number;
	name: string;
	price: number;
}
export interface CartProductEntry {
	id: number;
	products: CartProductItem[];
}

export interface ServiceError {
	message: string;
	code: number;
}
