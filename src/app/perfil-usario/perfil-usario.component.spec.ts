import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilUsarioComponent } from './perfil-usario.component';

describe('PerfilUsarioComponent', () => {
  let component: PerfilUsarioComponent;
  let fixture: ComponentFixture<PerfilUsarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilUsarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilUsarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
