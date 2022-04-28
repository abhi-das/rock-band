import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { productStore } from '@rock-band-ng-store';

import { ProductItemsComponent } from './product-items.component';

describe('ProductItemsComponent', () => {
	let component: ProductItemsComponent;
	let fixture: ComponentFixture<ProductItemsComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ProductItemsComponent],
			imports: [StoreModule.forRoot({})],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ProductItemsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
