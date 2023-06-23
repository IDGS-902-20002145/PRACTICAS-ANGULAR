import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculoD2PComponent } from './calculo-d2-p.component';

describe('CalculoD2PComponent', () => {
  let component: CalculoD2PComponent;
  let fixture: ComponentFixture<CalculoD2PComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculoD2PComponent]
    });
    fixture = TestBed.createComponent(CalculoD2PComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
