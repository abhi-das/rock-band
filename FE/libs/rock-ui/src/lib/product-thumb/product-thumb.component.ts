import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'rock-product-thumb',
	templateUrl: './product-thumb.component.html',
})
export class ProductThumbComponent {
	@Input() imgSrc?: string;
	@Input() title?: string;
	@Input() price?: number;
	@Input() isCtaDisabled: boolean = false;
	@Input() productQuantity: number = 0;
	@Output() ctaHandler: EventEmitter<any> = new EventEmitter<any>();
	@Output() quantityHandler: EventEmitter<any> = new EventEmitter<any>();

	addToCartHandler(product: any): void {
		this.ctaHandler.emit(product);
	}
	quantityChangeHandler(quantity: string): void {
		this.quantityHandler.emit(quantity);
	}
}
