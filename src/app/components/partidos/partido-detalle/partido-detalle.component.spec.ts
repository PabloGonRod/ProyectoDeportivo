import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidoDetalleComponent } from './partido-detalle.component';

describe('PartidoDetalleComponent', () => {
  let component: PartidoDetalleComponent;
  let fixture: ComponentFixture<PartidoDetalleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartidoDetalleComponent]
    });
    fixture = TestBed.createComponent(PartidoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
