import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLogingComponent } from './form-loging.component';

describe('FormLogingComponent', () => {
  let component: FormLogingComponent;
  let fixture: ComponentFixture<FormLogingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormLogingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLogingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
