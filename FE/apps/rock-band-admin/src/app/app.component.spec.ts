import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { RockUiModule } from '@rock-band-rock-ui';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AppComponent],
			imports: [RouterTestingModule, StoreModule.forRoot({}), RockUiModule],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		}).compileComponents();
	});

	it('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app).toBeTruthy();
	});
});
