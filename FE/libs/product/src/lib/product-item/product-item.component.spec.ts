import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { ProductItemComponent } from './product-item.component';

describe('ProductItemComponent', () => {
	let component: ProductItemComponent;
	let fixture: ComponentFixture<ProductItemComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ProductItemComponent],
			imports: [StoreModule.forRoot({})],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ProductItemComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
