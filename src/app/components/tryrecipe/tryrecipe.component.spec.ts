import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TryrecipeComponent } from './tryrecipe.component';

describe('TryrecipeComponent', () => {
  let component: TryrecipeComponent;
  let fixture: ComponentFixture<TryrecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TryrecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TryrecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
