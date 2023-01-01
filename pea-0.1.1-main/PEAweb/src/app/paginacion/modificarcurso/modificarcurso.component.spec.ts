import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarcursoComponent } from './modificarcurso.component';

describe('ModificarcursoComponent', () => {
  let component: ModificarcursoComponent;
  let fixture: ComponentFixture<ModificarcursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarcursoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarcursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
