import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidoModComponent } from './partido-mod.component';

describe('PartidoModComponent', () => {
  let component: PartidoModComponent;
  let fixture: ComponentFixture<PartidoModComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartidoModComponent]
    });
    fixture = TestBed.createComponent(PartidoModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
