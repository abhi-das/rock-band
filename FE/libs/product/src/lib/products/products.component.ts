import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { appStore, productModel, ProductActions, productSelector } from '@rock-band-ng-store';
import { Observable, Subject } from 'rxjs';

@Component({
	selector: 'rock-band-products',
	templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit, OnDestroy {
	productItm$?: Observable<productModel.ProductEntry[]>;
	query?: string;

	private readonly destroy$ = new Subject();

	constructor(private _store: Store<appStore.AppState>) {}

	ngOnInit(): void {
		this._store.dispatch(ProductActions.loadProducts());
		this.productItm$ = this._store.select(productSelector.productSelectAll);
	}

	searchProductHandler(event: any) {
		this.query = event.currentTarget.value;
	}

	ngOnDestroy(): void {
		this.destroy$.next(0);
		this.destroy$.complete();
	}
}
