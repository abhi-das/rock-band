import { Component, TemplateRef } from '@angular/core';
import { NotificationAlertService } from '@rock-band-common';

@Component({
	selector: 'rock-band-notification-alert',
	templateUrl: './notification-alert.component.html',
	host: { '[class.ngb-toasts]': 'true' },
})
export class NotificationAlertComponent {
	notificationAlerts: any[] = [];
	constructor(private _notification: NotificationAlertService) {
		this.notificationAlerts = this._notification.notificationAlerts;
	}

	removeNotification(toast: any): void {
		this._notification.removeNotificationAlert(toast);
	}

	isTemplate(toast: any) {
		return toast.txtOrTpl instanceof TemplateRef;
	}
}
