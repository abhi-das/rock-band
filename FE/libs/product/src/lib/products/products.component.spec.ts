import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
	let component: ProductsComponent;
	let fixture: ComponentFixture<ProductsComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ProductsComponent],
			imports: [HttpClientModule, StoreModule.forRoot({})],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ProductsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
