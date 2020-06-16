import { TestBed } from '@angular/core/testing';

import { DedProfileService } from './ded-profile.service';

describe('DedProfileService', () => {
  let service: DedProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DedProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
