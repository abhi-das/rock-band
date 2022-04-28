import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { RockUiModule } from '@rock-band-rock-ui';

const dashboardRoutes: Routes = [
	{
		path: '',
		component: DashboardComponent,
	},
];

@NgModule({
	declarations: [DashboardComponent],
	imports: [CommonModule, RockUiModule, RouterModule.forChild(dashboardRoutes)],
	exports: [DashboardComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardModule {}
