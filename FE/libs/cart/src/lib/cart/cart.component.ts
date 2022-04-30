import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { appStore, CartActions, cartSelectors, cartModel } from '@rock-band-ng-store';
import { Observable, Subject } from 'rxjs';

@Component({
	selector: 'rock-band-cart',
	templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit, OnDestroy {
	cartItm$!: Observable<cartModel.CartProductEntry[]>;
	private readonly destroy$ = new Subject();

	constructor(private _store: Store<appStore.AppState>) {}
	ngOnInit(): void {
		this._store.dispatch(CartActions.loadProductInCart());
		this.cartItm$ = this._store.select(cartSelectors.cartSelectAll);
	}
	ngOnDestroy(): void {
		this.destroy$.next(0);
		this.destroy$.complete();
	}
}
