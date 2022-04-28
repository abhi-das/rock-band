import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryComponent } from './inventory.component';
import { RouterModule, Routes } from '@angular/router';
import { RockUiModule } from '@rock-band-rock-ui';
import { InventoryFormComponent } from './inventory-form/inventory-form.component';
import { InventoryViewComponent } from './inventory-view/inventory-view.component';

const inventoryRoutes: Routes = [
	{
		path: '',
		component: InventoryComponent,
		children: [
			{
				path: '',
				component: InventoryViewComponent,
			},
			{
				path: 'edit/:id',
				component: InventoryFormComponent,
			},
		],
	},
];
@NgModule({
	declarations: [InventoryComponent, InventoryFormComponent, InventoryViewComponent],
	imports: [CommonModule, RockUiModule, RouterModule.forChild(inventoryRoutes)],
	exports: [InventoryComponent, InventoryFormComponent, RouterModule, InventoryViewComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class InventoryModule {}
