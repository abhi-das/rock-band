import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { appStore, authModel, UserActions, usersModel, usersSelector } from '@rock-band-ng-store';
import { Observable, Subject, tap } from 'rxjs';

@Component({
	selector: 'rock-band-users-view',
	templateUrl: './users-view.component.html',
})
export class UsersViewComponent implements OnInit, OnDestroy {
	isUsersLoading = true;
	usersItm$?: Observable<usersModel.UsersEntry[]>;
	private readonly destroy$ = new Subject();

	constructor(
		private readonly _store: Store<appStore.AppState>,
		private readonly _router: Router,
		private readonly _activedRoute: ActivatedRoute
	) {}

	ngOnInit(): void {
		this._store.dispatch(UserActions.loadUsers());
		this.usersItm$ = this._store.select(usersSelector.usersSelectAll).pipe(
			tap((res) => {
				if (res.length) {
					this.isUsersLoading = false;
				}
			})
		);
	}

	editUserHandler(user: authModel.User): void {
		// console.log(`Edit selected User =>`, user);
		this._router.navigate([`edit/22`], { relativeTo: this._activedRoute });
	}

	deleteUserHandler(user: authModel.User): void {
		this._store.dispatch(UserActions.removeUser({ userId: user.id }));
	}

	ngOnDestroy(): void {
		this.destroy$.next(0);
		this.destroy$.unsubscribe();
	}
}
