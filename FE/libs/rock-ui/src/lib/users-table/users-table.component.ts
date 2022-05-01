import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { authModel, usersModel } from '@rock-band-ng-store';
import { SortEvent } from '../directives/sortable.directive';

@Component({
	selector: 'rock-band-users-table',
	templateUrl: './users-table.component.html'
})
export class UsersTableComponent implements OnInit {
	@Input() tData: Array<usersModel.UsersEntry> | undefined | null;
	@Output() tblSort: EventEmitter<SortEvent> = new EventEmitter<SortEvent>();
	@Output() editRowHandler: EventEmitter<any> = new EventEmitter<any>();
	@Output() deleteRowHandler: EventEmitter<any> = new EventEmitter<any>();
	constructor() {}

	ngOnInit(): void {}

	sortHandler(event: SortEvent): void {
		this.tblSort.emit(event);
		console.log('onsort ====> ', event);
	}

	editHandler(selectedUser: authModel.User): void {
		this.editRowHandler.emit(selectedUser);
	}

	deleteHandler(selectedUser: authModel.User): void {
		this.deleteRowHandler.emit(selectedUser);
	}
}
