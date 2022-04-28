import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { appStore, ProductActions, productModel, productSelector } from '@rock-band-ng-store';
import { Observable, Subject, tap } from 'rxjs';

@Component({
	selector: 'rock-band-inventory-view',
	templateUrl: './inventory-view.component.html',
	styles: [],
})
export class InventoryViewComponent implements OnInit, OnDestroy {
	isProductLoading = true;
	productItm$?: Observable<productModel.ProductEntry[]>;
	private readonly destroy$ = new Subject();

	constructor(
		private readonly _store: Store<appStore.AppState>,
		private readonly _router: Router,
		private readonly _activedRoute: ActivatedRoute
	) {}

	ngOnInit(): void {
		this._store.dispatch(ProductActions.loadProducts());
		this.productItm$ = this._store.select(productSelector.productSelectAll).pipe(
			tap((res) => {
				if (res.length) {
					this.isProductLoading = false;
				}
			})
		);
	}

	editProductHandler(prd: productModel.Product): void {
		// console.log(`Edit selected Product =>`, prd);
		this._router.navigate([`edit/${prd.id}`], {
			relativeTo: this._activedRoute,
			state: {
				product: prd,
			},
		});
	}

	deleteProductHandler(prd: productModel.Product): void {
		this._store.dispatch(ProductActions.removeProductFromCart({ productId: prd.id }));
	}

	ngOnDestroy(): void {
		this.destroy$.next(0);
		this.destroy$.unsubscribe();
	}
}
