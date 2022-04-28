import { TestBed } from '@angular/core/testing';
import { AuthEffectService } from './auth.effect.service';

describe('Auth.EffectService', () => {
	let service: AuthEffectService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(AuthEffectService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
