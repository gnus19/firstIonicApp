import { TestBed } from '@angular/core/testing';

import { MemoryDBService } from './memory-db.service';

describe('MemoryDBService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MemoryDBService = TestBed.get(MemoryDBService);
    expect(service).toBeTruthy();
  });
});
