import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { UsersEntry } from '../models/users.model';

export const loadUsers = createAction('[Load Users Resolver] Load Users');

export const loadUsersSuccessFul = createAction(
	'[Load Users Effect] Loaded Selected Users',
	props<{ data: UsersEntry[] }>()
);

export const loadUsersFailure = createAction('[Load Users Effect] Loading Failed', props<{ usersError: string }>());

export const updateUserselection = createAction(
	'[Update IsAddedToCart flag] Update Users IsAddedToCart',
	props<{ update: Update<UsersEntry> }>()
);

export const removeUser = createAction('[Remove User] Remove User from DB', props<{ userId: number }>());
