import { TestBed } from '@angular/core/testing';

import { AllAlbumsService } from './all-albums.service';

describe('AllAlbumsService', () => {
  let service: AllAlbumsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllAlbumsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
