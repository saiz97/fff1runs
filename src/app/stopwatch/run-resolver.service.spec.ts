import { TestBed } from '@angular/core/testing';

import { RunResolverService } from './runs-resolver.service';

describe('RunResolverService', () => {
  let service: RunResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RunResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
