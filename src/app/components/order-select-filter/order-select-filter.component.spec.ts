import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSelectFilterComponent } from './order-select-filter.component';

describe('OrderSelectFilterComponent', () => {
  let component: OrderSelectFilterComponent;
  let fixture: ComponentFixture<OrderSelectFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderSelectFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderSelectFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
