import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { RockUiModule } from '@rock-band-rock-ui';

import { InventoryFormComponent } from './inventory-form.component';

describe('InventoryEditComponent', () => {
	let component: InventoryFormComponent;
	let fixture: ComponentFixture<InventoryFormComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [InventoryFormComponent],
			imports: [StoreModule.forRoot({}), RockUiModule, RouterTestingModule],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(InventoryFormComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
