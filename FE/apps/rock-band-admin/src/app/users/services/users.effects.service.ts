import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import { authModel, UserActions } from '@rock-band-ng-store';
import { UsersService } from './users.service';

//  TODO: should be part of Utility
const dataTransformation = (users: authModel.User[]) => {
	return users.map((user) => {
		return {
			user: user,
			isCustom: true,
		};
	});
};

@Injectable({
	providedIn: 'root',
})
export class UsersEffectServices {
	constructor(private _actions: Actions, private _httpTrans: UsersService) {}

	// dispatch Load users and on success http call dispatch next successful action
	loadProductEffect = createEffect(() => {
		return this._actions.pipe(
			ofType(UserActions.loadUsers),
			// ConcatMap for call API once
			concatMap((): Observable<authModel.User[]> => {
				return this._httpTrans.loadUsers();
			}),
			map((users: authModel.User[]) => {
				return UserActions.loadUsersSuccessFul({
					data: dataTransformation(users),
				});
			}),
			catchError(() => {
				return of(
					UserActions.loadUsersFailure({
						usersError: 'Error on loading users!',
					})
				);
			})
		);
	});
}
