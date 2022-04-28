import { APP_BASE_HREF, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {
	AuthEffectService,
	AuthGuardService,
	AuthModule,
	AuthModuleConfig,
	AuthModuleConfigToken,
} from '@rock-band-auth';
import { CartEffectServices, CartModuleConfig, CartModuleConfigToken } from '@rock-band-cart';
import { authStore, cartStore, productStore } from '@rock-band-ng-store';
import { ProductEffectServices, ProductModuleConfig, ProductModuleConfigToken } from '@rock-band-product';
import { PageNotFoundComponent, RockUiModule } from '@rock-band-rock-ui';
import { HttpErrorInterceptor } from '@rock-band-common';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './site-header/site-header.component';

const routes: Routes = [
	{
		path: 'products',
		loadChildren: async () => (await import('@rock-band-product')).ProductModule,
	},
	{
		path: 'cart',
		loadChildren: async () => (await import('@rock-band-cart')).CartModule,
		canActivate: [AuthGuardService],
	},
	{
		path: '',
		redirectTo: 'products',
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
		HttpClientModule,
		RouterModule.forRoot(routes, { enableTracing: false }),
		RockUiModule,
		AuthModule.forChild(),
		StoreModule.forRoot({
			auth: authStore.authReducers,
			cart: cartStore.cartReducer,
			products: productStore.productReducer,
		}),
		EffectsModule.forRoot([]),
		EffectsModule.forFeature([ProductEffectServices, CartEffectServices, AuthEffectService]),
		StoreDevtoolsModule.instrument({
			maxAge: 25,
			logOnly: environment.production,
		}),
	],
	providers: [
		{
			provide: AuthModuleConfigToken,
			useValue: <Partial<AuthModuleConfig>>{
				apiURL: environment.authApiUrl,
			},
		},
		{
			provide: CartModuleConfigToken,
			useValue: <Partial<CartModuleConfig>>{
				apiURL: environment.cartApiUrl,
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
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
