import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'rock-page-not-found',
	templateUrl: './page-not-found.component.html',
})
export class PageNotFoundComponent {
	readonly error: any = '';
	constructor(private _activeRouter: Router) {
		this.error = this._activeRouter.getCurrentNavigation()?.extras.state;
	}
}
