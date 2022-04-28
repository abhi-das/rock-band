import { CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RockUiModule } from '@rock-band-rock-ui';
import { ProductItemsComponent } from './product-items/product-items.component';
import { ProductsComponent } from './products/products.component';
import { ProductService } from './services/product.service';
import { ProductEffectServices } from './effect-services/product.effects.service';
import { RockBandCommonModule } from '@rock-band-common';
import { RouterModule, Routes } from '@angular/router';
import { ProductItemComponent } from './product-item/product-item.component';

const routes: Routes = [
	{
		path: '',
		component: ProductsComponent,
	},
	// {
	//   path: ':productId',
	//   component: ProductDetailComponent
	// },
];
@NgModule({
	imports: [CommonModule, HttpClientModule, RockUiModule, RockBandCommonModule, RouterModule.forChild(routes)],
	declarations: [ProductItemsComponent, ProductsComponent, ProductItemComponent],
	exports: [ProductItemsComponent, ProductsComponent, RouterModule, ProductItemComponent],
	providers: [ProductService, ProductEffectServices],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductModule {
	static forRoot(): ModuleWithProviders<ProductModule> {
		return {
			ngModule: ProductModule,
			providers: [ProductService, ProductEffectServices],
		};
	}
}
