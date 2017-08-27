import { TestBed, inject } from '@angular/core/testing';

import { MutfaklarService } from './mutfaklar.service';

describe('MutfaklarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MutfaklarService]
    });
  });

  it('should be created', inject([MutfaklarService], (service: MutfaklarService) => {
    expect(service).toBeTruthy();
  }));
});
