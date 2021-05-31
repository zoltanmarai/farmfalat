import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailNewsMaintenanceComponent } from './email-news-maintenance.component';

describe('EmailNewsMaintenanceComponent', () => {
  let component: EmailNewsMaintenanceComponent;
  let fixture: ComponentFixture<EmailNewsMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailNewsMaintenanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailNewsMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
