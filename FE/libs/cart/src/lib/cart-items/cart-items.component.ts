import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { cartModel } from '@rock-band-ng-store';

@Component({
	selector: 'rock-band-cart-items',
	templateUrl: './cart-items.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemsComponent {
	@Input() cartItms!: cartModel.CartProductEntry[] | null;

	page = 1;
	pageSize = 5;
	itemsPerPage = 5;
	onPageChange(pageNum: number): void {
		this.pageSize = this.itemsPerPage * (pageNum - 1);
	}
}
