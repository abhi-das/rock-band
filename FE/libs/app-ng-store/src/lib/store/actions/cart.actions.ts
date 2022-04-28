import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { productModel } from '../models';
import { CartProductEntry, ServiceError } from '../models/cart.model';

export const loadProductInCart = createAction('[Load Cart Resolver] Load Products');

export const loadProductInCartSuccessFul = createAction(
	'[Load Cart Effect] Loaded Selected Products',
	props<{ data: CartProductEntry[] }>()
);

export const loadProductInCartFailure = createAction(
	'[Load Cart Effect] Loading Failed',
	props<{ cartError: Partial<ServiceError> }>()
);

export const addProductToCartSuccessFul = createAction(
	'[Add Product to Cart] Add Product Successful',
	props<{ productItem: CartProductEntry }>()
);

export const addProductToCartFailure = createAction(
	'[Add Product to Cart] Add Product Failure',
	props<{ cartError: string }>()
);

export const updateCartItemQuantity = createAction(
	'[Update Quantity] Update Products Quantity',
	props<{ update: Update<CartProductEntry> }>()
);

export const createNewCartItem = (item: productModel.ProductEntry, qty: number = 1) => {
	return {
		id: item.product.id,
		products: [
			{
				id: item.product.id,
				name: item.product.name,
				price: item.product.price,
				quantity: qty,
			},
		],
	};
};
