import { TestBed } from '@angular/core/testing';

import { AnimatedCounterService } from './animated-counter.service';

describe('AnimatedCounterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnimatedCounterService = TestBed.get(AnimatedCounterService);
    expect(service).toBeTruthy();
  });
});
