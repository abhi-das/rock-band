import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { appStore, ProductActions, productModel } from '@rock-band-ng-store';
import { Product } from 'libs/app-ng-store/src/lib/store/models/product.model';

@Component({
	selector: 'rock-band-inventory-form',
	templateUrl: './inventory-form.component.html',
})
export class InventoryFormComponent implements OnInit {
	existingForm!: Partial<productModel.Product>;
	routerStateObj!: any;
	constructor(private _store: Store<appStore.AppState>, private readonly _router: Router) {
		this.routerStateObj = this._router.getCurrentNavigation()?.extras.state;
		if (this.routerStateObj) {
			this.existingForm = this.routerStateObj.product;
		}
	}

	ngOnInit(): void {}

	onFormSubmit(formValues: Partial<productModel.Product>): void {
		if (this.existingForm) {
			const updatedProd: productModel.ProductEntry = {
				product: {
					id: this.existingForm.id,
					name: formValues.name,
					price: formValues.price,
					discount: formValues.discount,
					defaultImage: this.existingForm.defaultImage,
					images: this.existingForm.images,
				} as Product,
				isAddedToCart: false,
			};

			this._store.dispatch(
				ProductActions.updateProductSelection({
					update: { id: String(this.existingForm.id), changes: updatedProd },
				})
			);
			console.log(updatedProd);
		} else {
			this._store.dispatch(ProductActions.addProductToInventory({ productItem: formValues }));
		}

		this._router.navigate(['/products']);
	}
}
