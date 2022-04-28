import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFilterPipe } from './pipes/product-filter.pipe';
import { NotificationAlertService } from './services/notification-alert.service';

@NgModule({
	imports: [CommonModule],
	declarations: [ProductFilterPipe],
	exports: [ProductFilterPipe],
	providers: [NotificationAlertService],
})
export class RockBandCommonModule {}
