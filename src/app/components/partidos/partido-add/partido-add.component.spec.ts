import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidoAddComponent } from './partido-add.component';

describe('PartidoAddComponent', () => {
  let component: PartidoAddComponent;
  let fixture: ComponentFixture<PartidoAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartidoAddComponent]
    });
    fixture = TestBed.createComponent(PartidoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
