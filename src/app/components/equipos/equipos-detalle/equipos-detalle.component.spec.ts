import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiposDetalleComponent } from './equipos-detalle.component';

describe('EquiposDetalleComponent', () => {
  let component: EquiposDetalleComponent;
  let fixture: ComponentFixture<EquiposDetalleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquiposDetalleComponent]
    });
    fixture = TestBed.createComponent(EquiposDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
