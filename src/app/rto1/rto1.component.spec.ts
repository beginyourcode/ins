import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rto1Component } from './rto1.component';

describe('Rto1Component', () => {
  let component: Rto1Component;
  let fixture: ComponentFixture<Rto1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rto1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rto1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
