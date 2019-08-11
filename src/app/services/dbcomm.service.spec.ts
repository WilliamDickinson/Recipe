import { TestBed } from '@angular/core/testing';

import { DbcommService } from './dbcomm.service';

describe('DbcommService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DbcommService = TestBed.get(DbcommService);
    expect(service).toBeTruthy();
  });
});
