import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { UserActions } from '../actions';
import { UsersData, UsersEntry } from '../models/users.model';

export interface UsersState extends EntityState<UsersEntry> {
	usersError?: string;
}

export const usersAdapter: EntityAdapter<UsersEntry> = createEntityAdapter<UsersEntry>({
	selectId: (data) => data.user.id,
});

export const initialUsersState = usersAdapter.getInitialState({
	usersError: '',
});

const hasListLoaded = (state: UsersState) => {
	return {
		...state,
		usersError: '',
	};
};

export const userReducer = createReducer(
	initialUsersState,
	on(UserActions.loadUsersSuccessFul, (state: UsersState, action: UsersData) => {
		return usersAdapter.addMany(action.data, hasListLoaded(state));
	}),
	on(UserActions.loadUsersFailure, (state: UsersState, { usersError }) => {
		return {
			...state,
			usersError: usersError,
		};
	}),
	on(UserActions.updateUserselection, (state: UsersState, action) => {
		return usersAdapter.updateOne(action.update, hasListLoaded(state));
	}),
	on(UserActions.removeUser, (state: UsersState, { userId }) => {
		return usersAdapter.removeOne(userId, hasListLoaded(state));
	})
);

export const { selectAll } = usersAdapter.getSelectors();
