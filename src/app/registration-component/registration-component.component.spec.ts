import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationComponentComponent } from './registration-component.component';

describe('RegistrationComponentComponent', () => {
  let component: RegistrationComponentComponent;
  let fixture: ComponentFixture<RegistrationComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
