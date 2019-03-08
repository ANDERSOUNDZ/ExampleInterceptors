import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponceHomeComponent } from './responce-home.component';

describe('ResponceHomeComponent', () => {
  let component: ResponceHomeComponent;
  let fixture: ComponentFixture<ResponceHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponceHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponceHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
