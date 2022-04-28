import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Product, ProductData, ProductEntry } from '../models/product.model';
import { ProductActions } from '../actions';

export interface ProductState extends EntityState<ProductEntry> {
	productError?: string;
}

export const productAdapter: EntityAdapter<ProductEntry> = createEntityAdapter<ProductEntry>({
	// selectId: (prd) => (prd.product.id * Math.random()) + '-' + prd.product.name.replace(/ /g, ''),
	selectId: (prd) => prd.product.id,
});

export const initialProductState = productAdapter.getInitialState({
	productError: '',
});

const hasListLoaded = (state: ProductState) => {
	return {
		...state,
		productError: '',
	};
};

export const productReducer = createReducer(
	initialProductState,
	on(ProductActions.loadProductsSuccessFul, (state: ProductState, action: ProductData) => {
		return productAdapter.addMany(action.data, hasListLoaded(state));
	}),
	on(ProductActions.loadProductsFailure, (state: ProductState, { productError }) => {
		return {
			...state,
			productError: productError,
		};
	}),
	on(ProductActions.updateProductSelection, (state: ProductState, action) => {
		return productAdapter.updateOne(action.update, hasListLoaded(state));
	}),
	on(ProductActions.removeProductFromCart, (state: ProductState, { productId }) => {
		return productAdapter.removeOne(productId, hasListLoaded(state));
	}),
	on(ProductActions.addProductToInventorySuccessFul, (state: ProductState, { productItem }) => {
		return productAdapter.setAll([productItem, ...selectAll(state)], hasListLoaded(state));
	}),
	on(ProductActions.addProductToInventoryFailure, (state: ProductState, { productError }) => {
		return {
			...state,
			productError: productError,
		};
	})
);

export const { selectAll } = productAdapter.getSelectors();
