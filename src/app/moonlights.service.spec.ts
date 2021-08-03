import { TestBed } from '@angular/core/testing';

import { MoonlightsService } from './moonlights.service';

describe('MoonlightsService', () => {
  let service: MoonlightsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoonlightsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
