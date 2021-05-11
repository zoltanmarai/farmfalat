import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersTablerowComponent } from './orders-tablerow.component';

describe('OrdersTablerowComponent', () => {
  let component: OrdersTablerowComponent;
  let fixture: ComponentFixture<OrdersTablerowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersTablerowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersTablerowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
