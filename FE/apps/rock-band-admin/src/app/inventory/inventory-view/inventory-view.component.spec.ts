import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { RockUiModule } from '@rock-band-rock-ui';

import { InventoryViewComponent } from './inventory-view.component';

describe('InventoryViewComponent', () => {
	let component: InventoryViewComponent;
	let fixture: ComponentFixture<InventoryViewComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [InventoryViewComponent],
			imports: [StoreModule.forRoot({}), RockUiModule, RouterTestingModule],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(InventoryViewComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
