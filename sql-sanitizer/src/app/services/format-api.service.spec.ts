import { TestBed } from '@angular/core/testing';

import { FormatApiService } from './format-api.service';

describe('FormatApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormatApiService = TestBed.get(FormatApiService);
    expect(service).toBeTruthy();
  });
});
