import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
	constructor(private readonly _router: Router) {}

	// Always give a try second time to communicate with backend service (retry) operator
	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		return next.handle(request).pipe(
			retry(1),
			catchError((error: HttpErrorResponse) => {
				let errorMessage = '';
				if (error.error instanceof ErrorEvent) {
					// client-side error
					errorMessage = `Error: ${error.error.message}`;
				} else {
					// server-side error
					errorMessage = `Error Status: ${error.status}\nMessage: ${error.message}`;
				}
				this._router.navigateByUrl('/404', {
					state: {
						message: 'Services not found!',
					},
				});
				return throwError(errorMessage);
			})
		);
	}
}
