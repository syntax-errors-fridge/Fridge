import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FridgeListPage } from './fridge-list.page';

describe('FridgeListPage', () => {
  let component: FridgeListPage;
  let fixture: ComponentFixture<FridgeListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FridgeListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FridgeListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
