import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { RockUiModule } from '@rock-band-rock-ui';

import { SiteHeaderComponent } from './site-header.component';

describe('SiteHeaderComponent', () => {
	let component: SiteHeaderComponent;
	let fixture: ComponentFixture<SiteHeaderComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [SiteHeaderComponent],
			imports: [StoreModule.forRoot({}), RockUiModule],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(SiteHeaderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
