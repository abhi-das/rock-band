import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { authModel } from '@rock-band-ng-store';

export interface UsersModuleConfig {
	apiURL: string;
}

export const UsersModuleConfigToken = new InjectionToken<UsersModuleConfig>('Users Module Config Token');

export const DEFAULT_Users_MODULE_CONFIG: UsersModuleConfig = {
	apiURL: '',
};

@Injectable({
	providedIn: 'root',
})
export class UsersService {
	readonly usersServiceConfig: UsersModuleConfig;
	constructor(
		private readonly http: HttpClient,
		@Optional()
		@Inject(UsersModuleConfigToken)
		serviceConfig: UsersModuleConfig | null
	) {
		this.usersServiceConfig = {
			...DEFAULT_Users_MODULE_CONFIG,
			...serviceConfig,
		};
	}

	loadUsers(): Observable<authModel.User[]> {
		return this.http.get<authModel.User[]>(this.usersServiceConfig.apiURL).pipe(map((res) => res));
	}
}
