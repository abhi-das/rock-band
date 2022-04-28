import { CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RockUiModule } from '@rock-band-rock-ui';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './services/cart.service';
import { CartEffectServices } from './effect-services/cart.effects.service';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
	{
		path: '',
		component: CartComponent,
	},
];

@NgModule({
	imports: [CommonModule, HttpClientModule, NgbModule, RockUiModule, RouterModule.forChild(routes)],
	declarations: [CartItemsComponent, CartComponent],
	exports: [CartItemsComponent, CartComponent, RouterModule],
	providers: [CartService, CartEffectServices],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CartModule {
	static forRoot(): ModuleWithProviders<CartModule> {
		return {
			ngModule: CartModule,
			providers: [CartService, CartEffectServices],
		};
	}
}
