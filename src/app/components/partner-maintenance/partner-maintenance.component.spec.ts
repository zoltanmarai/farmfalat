import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerMaintenanceComponent } from './partner-maintenance.component';

describe('PartnerMaintenanceComponent', () => {
  let component: PartnerMaintenanceComponent;
  let fixture: ComponentFixture<PartnerMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerMaintenanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
