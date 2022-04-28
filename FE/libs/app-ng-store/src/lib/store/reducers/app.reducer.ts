import { ActionReducerMap } from '@ngrx/store';
import { AuthState } from './auth.reducer';

import { CartState } from './cart.reducer';
import { ProductState } from './product.reducer';

export interface AppState {
	auth?: AuthState;
	products?: ProductState;
	cart?: CartState;
	users?: any;
}

export const appReducer: ActionReducerMap<AppState> = {};
