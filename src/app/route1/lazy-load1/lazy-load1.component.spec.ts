import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLoad1Component } from './lazy-load1.component';

describe('LazyLoad1Component', () => {
  let component: LazyLoad1Component;
  let fixture: ComponentFixture<LazyLoad1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyLoad1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyLoad1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
