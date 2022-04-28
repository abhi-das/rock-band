import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { RockUiModule } from '@rock-band-rock-ui';

import { UsersViewComponent } from './users-view.component';

describe('UsersViewComponent', () => {
	let component: UsersViewComponent;
	let fixture: ComponentFixture<UsersViewComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [UsersViewComponent],
			imports: [StoreModule.forRoot({}), RockUiModule, RouterTestingModule],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(UsersViewComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
