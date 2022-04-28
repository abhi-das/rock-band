import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'rock-band-dropdown',
	templateUrl: './dropdown.component.html',
	styles: [],
})
export class DropdownComponent {
	@Input() selectedValue: number = 0;
	@Output() changeHandler: EventEmitter<string> = new EventEmitter<string>();

	quantityNum = [1, 2, 3, 4, 5, 6];

	selectHandler(value: string): void {
		this.changeHandler.emit(value);
	}
}
