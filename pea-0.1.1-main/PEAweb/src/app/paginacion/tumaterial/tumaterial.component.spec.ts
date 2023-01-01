import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TumaterialComponent } from './tumaterial.component';

describe('TumaterialComponent', () => {
  let component: TumaterialComponent;
  let fixture: ComponentFixture<TumaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TumaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TumaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
