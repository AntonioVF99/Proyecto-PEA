import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionmaterialComponent } from './seleccionmaterial.component';

describe('SeleccionmaterialComponent', () => {
  let component: SeleccionmaterialComponent;
  let fixture: ComponentFixture<SeleccionmaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeleccionmaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeleccionmaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
