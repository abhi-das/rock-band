import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { Product, ProductEntry } from '../models/product.model';

export const loadProducts = createAction('[Load Products Resolver] Load Products');

export const loadProductsSuccessFul = createAction(
	'[Load Products Effect] Loaded Selected Products',
	props<{ data: ProductEntry[] }>()
);

export const loadProductsFailure = createAction(
	'[Load Products Effect] Loading Failed',
	props<{ productError: string }>()
);

export const updateProductSelection = createAction(
	'[Update IsAddedToCart flag] Update Products IsAddedToCart',
	props<{ update: Update<ProductEntry> }>()
);

export const removeProductFromCart = createAction(
	'[Remove Product] Remove Product from Cart',
	props<{ productId: number }>()
);

export const addProductToInventory = createAction(
	'[Upload New Product] New Product to Inventory',
	props<{ productItem: Partial<Product> }>()
);

export const addProductToInventorySuccessFul = createAction(
	'[Upload New Product] New Product to Inventory Successful',
	props<{ productItem: ProductEntry }>()
);

export const addProductToInventoryFailure = createAction(
	'[Upload New Product] New Product to Inventory Failure',
	props<{ productError: string }>()
);
