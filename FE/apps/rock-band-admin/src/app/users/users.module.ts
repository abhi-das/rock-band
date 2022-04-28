import { CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersComponent } from './users.component';
import { RouterModule, Routes } from '@angular/router';
import { UsersService } from './services/users.service';
import { RockUiModule } from '@rock-band-rock-ui';
import { HttpClientModule } from '@angular/common/http';
import { UsersViewComponent } from './users-view/users-view.component';
import { UserFormComponent } from './user-form/user-form.component';

const usersRoutes: Routes = [
	{
		path: '',
		component: UsersComponent,
		children: [
			{
				path: '',
				component: UsersViewComponent,
			},
			// {
			// 	path: 'edit/:id',
			// 	component: UserFormComponent,
			// },
		],
	},
];

@NgModule({
	declarations: [UsersComponent, UsersViewComponent, UserFormComponent],
	imports: [CommonModule, RockUiModule, HttpClientModule, RouterModule.forChild(usersRoutes)],
	exports: [UsersComponent, RouterModule, UsersViewComponent, UserFormComponent],
	providers: [UsersService],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UsersModule {}
