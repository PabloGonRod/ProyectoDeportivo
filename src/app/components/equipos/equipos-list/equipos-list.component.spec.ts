import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiposListComponent } from './equipos-list.component';

describe('EquiposListComponent', () => {
  let component: EquiposListComponent;
  let fixture: ComponentFixture<EquiposListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquiposListComponent]
    });
    fixture = TestBed.createComponent(EquiposListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
