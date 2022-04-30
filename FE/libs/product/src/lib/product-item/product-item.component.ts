import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { NotificationAlertService } from '@rock-band-common';
import { appStore, CartActions, cartSelectors, ProductActions, productModel } from '@rock-band-ng-store';

@Component({
	selector: 'rock-band-product-item',
	templateUrl: './product-item.component.html',
})
export class ProductItemComponent implements OnInit {
	@Input() productItem: productModel.ProductEntry | undefined | null;
	updatedProd!: productModel.ProductEntry;
	qNum: number = 0;

	constructor(private readonly _store: Store<appStore.AppState>) {}

	ngOnInit(): void {
		if (this.productItem) {
			this._store.select(cartSelectors.cartProductQuantitySelector(this.productItem?.product.id || 0));
		}
	}

	addToShoppingCart(prdItem: productModel.ProductEntry, addToCartTemplateRef: TemplateRef<any>): void {
		this.updatedProd = {
			...prdItem,
			isAddedToCart: true,
		};
		this._store.dispatch(
			ProductActions.updateProductSelection({
				update: { id: String(prdItem.product.id), changes: this.updatedProd },
			})
		);
		this._store.dispatch(
			CartActions.addProductToCartSuccessFul({ productItem: CartActions.createNewCartItem(prdItem) })
		);
	}

	changeQuantityInCart(q: string, prdItem: productModel.ProductEntry): void {
		this._store.dispatch(
			CartActions.updateCartItemQuantity({
				update: { id: prdItem.product.id, changes: CartActions.createNewCartItem(prdItem, parseInt(q)) },
			})
		);
	}
}
