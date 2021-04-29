import { TestBed } from '@angular/core/testing';

import { SloganService } from './slogan.service';

describe('SloganService', () => {
  let service: SloganService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SloganService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
