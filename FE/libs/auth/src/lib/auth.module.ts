import { CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { AuthEffectService } from './effect-services/auth.effect.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuardService } from './services/auth.guard.service';
import { RockUiModule } from '@rock-band-rock-ui';

const authRoutes: Routes = [
	{
		path: 'login',
		component: LoginComponent,
	},
	{
		path: 'profile',
		component: ProfileComponent,
	},
];

@NgModule({
	imports: [CommonModule, ReactiveFormsModule, RockUiModule, HttpClientModule, RouterModule.forChild(authRoutes)],
	declarations: [ProfileComponent, LoginComponent],
	exports: [ProfileComponent, LoginComponent],
	providers: [AuthService, AuthEffectService, AuthGuardService],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AuthModule {
	static forChild(): ModuleWithProviders<AuthModule> {
		return {
			ngModule: AuthModule,
			providers: [AuthService, AuthEffectService, AuthGuardService],
		};
	}
}
