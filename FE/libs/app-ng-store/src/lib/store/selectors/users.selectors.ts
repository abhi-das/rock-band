import { createFeatureSelector, createSelector } from '@ngrx/store';
import { userStore } from '../reducers';

export const selectUsersState = createFeatureSelector<userStore.UsersState>('users');

export const usersSelectAll = createSelector(selectUsersState, userStore.selectAll);
