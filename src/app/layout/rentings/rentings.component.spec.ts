import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentingsComponent } from './rentings.component';

describe('RentingsComponent', () => {
  let component: RentingsComponent;
  let fixture: ComponentFixture<RentingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
