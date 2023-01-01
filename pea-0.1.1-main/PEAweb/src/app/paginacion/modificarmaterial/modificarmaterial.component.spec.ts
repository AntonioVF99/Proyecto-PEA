import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarmaterialComponent } from './modificarmaterial.component';

describe('ModificarmaterialComponent', () => {
  let component: ModificarmaterialComponent;
  let fixture: ComponentFixture<ModificarmaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarmaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarmaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
