import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchrecipeComponent } from './searchrecipe.component';

describe('SearchrecipeComponent', () => {
  let component: SearchrecipeComponent;
  let fixture: ComponentFixture<SearchrecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchrecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchrecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
