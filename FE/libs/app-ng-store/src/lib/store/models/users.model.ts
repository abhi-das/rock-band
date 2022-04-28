import { User } from './auth.model';

export interface UsersEntry {
	user: User;
	isCustom?: boolean;
}

export interface UsersData {
	data: UsersEntry[];
}
