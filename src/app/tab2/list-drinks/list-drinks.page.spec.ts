import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDrinksPage } from './list-drinks.page';

describe('ListDrinksPage', () => {
  let component: ListDrinksPage;
  let fixture: ComponentFixture<ListDrinksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDrinksPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDrinksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
