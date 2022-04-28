import { Component, Input } from '@angular/core';

@Component({
	selector: 'rock-cart-item',
	templateUrl: './cart-item.component.html',
})
export class CartItemComponent {
	@Input() label?: string = 'Product Name';
	@Input() quantity?: number = 0;
	@Input() price?: number = 0;
}
