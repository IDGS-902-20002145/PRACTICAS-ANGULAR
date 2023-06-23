import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculosRComponent } from './calculos-r.component';

describe('CalculosRComponent', () => {
  let component: CalculosRComponent;
  let fixture: ComponentFixture<CalculosRComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculosRComponent]
    });
    fixture = TestBed.createComponent(CalculosRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
