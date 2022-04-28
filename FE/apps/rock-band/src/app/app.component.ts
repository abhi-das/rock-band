import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { appStore, AuthActions } from '@rock-band-ng-store';

@Component({
	selector: 'rock-band-root',
	templateUrl: './app.component.html',
})
export class AppComponent {
	constructor(private readonly _store: Store<appStore.AppState>) {
		// If user has already logged in
		const user = localStorage.getItem('user');
		if (user) {
			const existingUser = JSON.parse(user);
			this._store.dispatch(AuthActions.authLoginSuccessFul({ loggedUser: existingUser }));
		}
	}
}
