import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { appStore, AuthActions } from '@rock-band-ng-store';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Component({
	selector: 'rock-band-login',
	templateUrl: './login.component.html',
	styles: [],
})
export class LoginComponent implements OnInit {
	errorRes!: string;
	loginForm!: FormGroup;
	isAuthLoading = false;

	constructor(private _store: Store<appStore.AppState>, private _srv: AuthService, private _fb: FormBuilder) {}

	ngOnInit(): void {
		this.loginForm = this._fb.group({
			userId: new FormControl('', [Validators.required]),
		});
	}

	get loginFormField() {
		return this.loginForm.controls;
	}

	onLoginSubmit() {
		if (this.loginForm.valid) {
			this.isAuthLoading = true;
			console.log(this.loginFormField);
			this._store.dispatch(AuthActions.authLogin());
			this._srv
				.login(this.loginFormField['userId'].value)
				.pipe(
					tap((res) => {
						this._store.dispatch(
							AuthActions.authLoginSuccessFul({
								loggedUser: res,
							})
						);
						this.isAuthLoading = false;
					})
				)
				.subscribe();
			// .subscribe(
			//   noop, () => {
			//     console.log('login failed')
			//     this.isAuthLoading = false;
			//   }
			// )
		}
	}
}
