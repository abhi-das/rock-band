import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { authModel } from '@rock-band-ng-store';

import { map, Observable } from 'rxjs';

export interface AuthModuleConfig {
	apiURL: string;
}

export const AuthModuleConfigToken = new InjectionToken<AuthModuleConfig>('Authentication Module Config Token');

export const DEFAULT_AUTH_MODULE_CONFIG: AuthModuleConfig = {
	apiURL: '',
};

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	readonly authServiceConfig: AuthModuleConfig;
	constructor(
		private http: HttpClient,
		@Optional()
		@Inject(AuthModuleConfigToken)
		serviceConfig: AuthModuleConfig | null
	) {
		this.authServiceConfig = {
			...DEFAULT_AUTH_MODULE_CONFIG,
			...serviceConfig,
		};
	}

	login(uId: string): Observable<authModel.User> {
		return this.http.get<authModel.User>(`${this.authServiceConfig.apiURL}/${uId}`);
	}
}
