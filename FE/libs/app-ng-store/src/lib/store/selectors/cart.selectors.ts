import { createFeatureSelector, createSelector } from '@ngrx/store';
import { cartStore } from '../reducers';

export const selectCartState = createFeatureSelector<cartStore.CartState>('cart');

export const cartSelectAll = createSelector(selectCartState, cartStore.selectAll);

export const cartProductQuantitySelector = (id: number) =>
	createSelector(selectCartState, (state: cartStore.CartState) => state.entities[id]?.products[0].quantity);
