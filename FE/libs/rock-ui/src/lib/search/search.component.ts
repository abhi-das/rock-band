import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'rock-search',
	templateUrl: './search.component.html',
})
export class SearchComponent {
	@Input() placeholderText!: string;
	@Output() inputChange: EventEmitter<any> = new EventEmitter();

	onInputChange(event: Event): void {
		this.inputChange.emit(event);
	}
}
