import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuscursoscreadosComponent } from './tuscursoscreados.component';

describe('TuscursoscreadosComponent', () => {
  let component: TuscursoscreadosComponent;
  let fixture: ComponentFixture<TuscursoscreadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TuscursoscreadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TuscursoscreadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
