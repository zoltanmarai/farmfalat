import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderMaintenanceComponent } from './order-maintenance.component';

describe('OrderMaintenanceComponent', () => {
  let component: OrderMaintenanceComponent;
  let fixture: ComponentFixture<OrderMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderMaintenanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
