import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { appStore, CartActions, cartSelectors, cartModel } from '@rock-band-ng-store';
import { Observable, Subject, Subscription, takeUntil, tap } from 'rxjs';

@Component({
	selector: 'rock-band-cart',
	templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit, OnDestroy {
	isCartLoading = true;
	cartItm$!: Observable<cartModel.CartProductEntry[]>;

	private readonly destroy$ = new Subject();

	constructor(private _store: Store<appStore.AppState>, private readonly cd: ChangeDetectorRef) {}
	ngOnInit(): void {
		this._store.dispatch(CartActions.loadProductInCart());
		this.cartItm$ = this._store.select(cartSelectors.cartSelectAll).pipe(
			tap((res) => {
				if (res.length) {
					this.isCartLoading = false;
				}
			})
		);
	}
	ngOnDestroy(): void {
		this.destroy$.next(0);
		this.destroy$.complete();
	}
}
