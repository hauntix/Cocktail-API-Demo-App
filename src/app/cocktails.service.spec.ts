import { TestBed } from '@angular/core/testing';

import { CocktailsService } from './cocktails.service';

describe('CocktailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CocktailsService = TestBed.get(CocktailsService);
    expect(service).toBeTruthy();
  });
});
