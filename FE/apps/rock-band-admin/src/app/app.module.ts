import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent, RockUiModule } from '@rock-band-rock-ui';
import { SiteHeaderComponent } from './site-header/site-header.component';
import {
	AuthEffectService,
	AuthGuardService,
	AuthModule,
	AuthModuleConfig,
	AuthModuleConfigToken,
} from '@rock-band-auth';
import { APP_BASE_HREF, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { environment } from '../environments/environment';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from '@rock-band-common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { authStore, productStore, userStore } from '@rock-band-ng-store';
import { ProductEffectServices, ProductModuleConfig, ProductModuleConfigToken } from '@rock-band-product';
import { UsersModuleConfig, UsersModuleConfigToken } from './users/services/users.service';
import { UsersEffectServices } from './users/services/users.effects.service';

const routes: Routes = [
	{
		path: 'dashboard',
		loadChildren: async () => (await import('./dashboard/dashboard.module')).DashboardModule,
		canActivate: [AuthGuardService],
	},
	{
		path: 'products',
		loadChildren: async () => (await import('./inventory/inventory.module')).InventoryModule,
		canActivate: [AuthGuardService],
	},
	{
		path: 'users',
		loadChildren: async () => (await import('./users/users.module')).UsersModule,
		canActivate: [AuthGuardService],
	},
	{
		path: '',
		redirectTo: 'login',
		pathMatch: 'full',
	},
	{
		path: '**',
		component: PageNotFoundComponent,
	},
];

@NgModule({
	declarations: [AppComponent, SiteHeaderComponent],
	imports: [
		BrowserModule,
		RockUiModule,
		HttpClientModule,
		AuthModule.forChild(),
		RouterModule.forRoot(routes, { enableTracing: false }),
		StoreModule.forRoot({
			auth: authStore.authReducers,
			products: productStore.productReducer,
			users: userStore.userReducer,
		}),
		EffectsModule.forRoot([]),
		EffectsModule.forFeature([ProductEffectServices, AuthEffectService, UsersEffectServices]),
		StoreDevtoolsModule.instrument({
			maxAge: 25,
			logOnly: environment.production,
		}),
	],
	providers: [
		{
			provide: UsersModuleConfigToken,
			useValue: <Partial<UsersModuleConfig>>{
				apiURL: environment.userApiUrl,
			},
		},
		{
			provide: AuthModuleConfigToken,
			useValue: <Partial<AuthModuleConfig>>{
				apiURL: environment.authApiUrl,
			},
		},
		{
			provide: ProductModuleConfigToken,
			useValue: <Partial<ProductModuleConfig>>{
				apiURL: environment.productApiUrl,
			},
		},
		{
			provide: HTTP_INTERCEPTORS,
			useClass: HttpErrorInterceptor,
			multi: true,
		},
		Location,
		{
			provide: LocationStrategy,
			useClass: PathLocationStrategy,
		},
		{ provide: APP_BASE_HREF, useValue: '/' },
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
