import { CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BannerComponent } from './banner/banner.component';
import { SearchComponent } from './search/search.component';
import { ProductThumbComponent } from './product-thumb/product-thumb.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ButtonCtaComponent } from './button-cta/button-cta.component';
import { ContentLoaderComponent } from './content-loader/content-loader.component';
import { GiftWrapComponent } from './gift-wrap/gift-wrap.component';
import { RouterModule } from '@angular/router';
import { NotificationAlertComponent } from './notification-alert/notification-alert.component';
import { RockBandCommonModule } from '@rock-band-common';
import { DropdownComponent } from './dropdown/dropdown.component';
import { CardInfoComponent } from './card-info/card-info.component';
import { ProductsTableComponent } from './products-table/products-table.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	imports: [CommonModule, NgbModule, RouterModule, RockBandCommonModule, ReactiveFormsModule],
	declarations: [
		BannerComponent,
		SearchComponent,
		ProductThumbComponent,
		CartItemComponent,
		PageNotFoundComponent,
		NavbarComponent,
		ButtonCtaComponent,
		ContentLoaderComponent,
		GiftWrapComponent,
		NotificationAlertComponent,
		DropdownComponent,
		CardInfoComponent,
		ProductsTableComponent,
		UsersTableComponent,
		ProductFormComponent,
	],
	exports: [
		BannerComponent,
		SearchComponent,
		ProductThumbComponent,
		CartItemComponent,
		PageNotFoundComponent,
		NavbarComponent,
		ButtonCtaComponent,
		ContentLoaderComponent,
		GiftWrapComponent,
		NotificationAlertComponent,
		DropdownComponent,
		CardInfoComponent,
		ProductsTableComponent,
		UsersTableComponent,
		ProductFormComponent,
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RockUiModule {}
