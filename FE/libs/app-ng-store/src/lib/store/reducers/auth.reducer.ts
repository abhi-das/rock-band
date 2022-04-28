import { createReducer, on } from '@ngrx/store';

import { AuthActions } from '../actions';
import { User } from '../models/auth.model';

export interface AuthState {
	user: User | undefined;
	authError?: string;
}

export const initialAuthState: AuthState = {
	user: undefined,
};

export const authReducers = createReducer(
	initialAuthState,
	on(AuthActions.authLoginSuccessFul, (state: AuthState, { loggedUser }) => {
		return {
			user: loggedUser,
			authError: '',
		};
	}),
	on(AuthActions.logoutAction, () => {
		return {
			user: undefined,
		};
	})
);
