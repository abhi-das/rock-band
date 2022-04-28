import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { productModel } from '@rock-band-ng-store';
import { SortEvent } from '../directives/sortable.directive';

@Component({
	selector: 'rock-band-products-table',
	templateUrl: './products-table.component.html',
})
export class ProductsTableComponent implements OnInit {
	@Input() tblData: Array<productModel.ProductEntry> | undefined | null;
	@Output() tblSort: EventEmitter<SortEvent> = new EventEmitter<SortEvent>();
	@Output() editRowHandler: EventEmitter<any> = new EventEmitter<any>();
	@Output() deleteRowHandler: EventEmitter<any> = new EventEmitter<any>();
	constructor() {}

	ngOnInit(): void {}

	sortHandler(event: SortEvent): void {
		this.tblSort.emit(event);
		console.log('onsort ====> ', event);
	}

	editHandler(selectedProduct: productModel.Product): void {
		this.editRowHandler.emit(selectedProduct);
	}

	deleteHandler(selectedProduct: productModel.Product): void {
		this.deleteRowHandler.emit(selectedProduct);
	}
}
