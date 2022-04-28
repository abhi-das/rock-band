import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthActions } from '@rock-band-ng-store';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
	providedIn: 'root',
})
export class AuthEffectService {
	constructor(private _actions: Actions, private _router: Router) {}

	loginEffect = createEffect(
		() =>
			this._actions.pipe(
				ofType(AuthActions.authLoginSuccessFul),
				tap((loggedUser) => {
					localStorage.setItem('user', JSON.stringify(loggedUser));
					this._router.navigateByUrl('/products');
				})
			),
		{ dispatch: false }
	);

	logoutEffect = createEffect(
		() =>
			this._actions.pipe(
				ofType(AuthActions.logoutAction),
				tap((rs) => {
					localStorage.removeItem('user');
					this._router.navigateByUrl('/login');
				})
			),
		{ dispatch: false }
	);
}
