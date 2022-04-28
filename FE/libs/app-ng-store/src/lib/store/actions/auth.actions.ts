import { createAction, props } from '@ngrx/store';
import { User } from '../models/auth.model';

export const authLogin = createAction('[Auth Login] Authenticate User');

export const authLoginSuccessFul = createAction(
	'[Auth Login Successful Effect] User Loaded',
	props<{ loggedUser: User }>()
);

export const authLoginFailure = createAction(
	'[Auth Login Failure Effect] User Loading Failed',
	props<{ authError: string }>()
);

export const loginAction = createAction('[Login Page] Login', props<{ user: User }>());

export const logoutAction = createAction('[Top Nav] Logout');
