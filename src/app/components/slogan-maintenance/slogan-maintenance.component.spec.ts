import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SloganMaintenanceComponent } from './slogan-maintenance.component';

describe('SloganMaintenanceComponent', () => {
  let component: SloganMaintenanceComponent;
  let fixture: ComponentFixture<SloganMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SloganMaintenanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SloganMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
