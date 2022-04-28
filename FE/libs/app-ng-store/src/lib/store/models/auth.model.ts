import { CartProductItem } from './cart.model';
interface Order {
	id: number;
	products: Array<{
		id: number;
		quantity: number;
	}>;
}

export interface User {
	id: number;
	name: {
		firstName: string;
		lastName: string;
	};
	email: string;
	role: string;
	avatar: string;
	address: {
		city: string;
		country: string;
		street: string;
		zip: string;
	};
	phone: string;
	orders: Array<Order>;
}
