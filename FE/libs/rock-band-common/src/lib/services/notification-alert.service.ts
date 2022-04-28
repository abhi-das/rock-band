import { Injectable, TemplateRef } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class NotificationAlertService {
	notificationAlerts: any[] = [];

	showNotificationAlert(txtOrTpl: string | TemplateRef<any>, options: any = {}): void {
		this.notificationAlerts.push({ txtOrTpl, ...options });
	}

	removeNotificationAlert(notification: any): void {
		this.notificationAlerts = this.notificationAlerts.filter((alert: any[]) => alert != notification);
	}
}
