import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { appStore, AuthActions, authSelector } from '@rock-band-ng-store';
import { Observable } from 'rxjs';

@Component({
	selector: 'rock-band-site-header',
	templateUrl: './site-header.component.html',
})
export class SiteHeaderComponent implements OnInit {
	isLoggedIn!: Observable<boolean | undefined>;
	isLoggedOut!: Observable<boolean | undefined>;

	constructor(private _store: Store<appStore.AppState>) {}

	ngOnInit(): void {
		this.isLoggedOut = this._store.pipe(select(authSelector.isLoggedIn));
		this.isLoggedIn = this._store.pipe(select(authSelector.isLoggedOut));
	}

	onSignOut = () => {
		this._store.dispatch(AuthActions.logoutAction());
	};
}
