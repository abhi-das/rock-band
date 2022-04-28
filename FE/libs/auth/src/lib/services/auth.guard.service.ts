import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { appStore, authSelector } from '@rock-band-ng-store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
	constructor(private store: Store<appStore.AppState>, private router: Router) {}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
		return this.store.pipe(
			select(authSelector.isLoggedIn),
			tap((rs: boolean) => {
				if (!rs) {
					this.router.navigateByUrl('/');
				}
			})
		);
	}
}
