import { TestBed } from '@angular/core/testing';

import { FavoriteDrinksService } from './favorite-drinks.service';

describe('LocalStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FavoriteDrinksService = TestBed.get(FavoriteDrinksService);
    expect(service).toBeTruthy();
  });
});
