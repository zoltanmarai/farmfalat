import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerTablerowComponent } from './partner-tablerow.component';

describe('PartnerTablerowComponent', () => {
  let component: PartnerTablerowComponent;
  let fixture: ComponentFixture<PartnerTablerowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerTablerowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerTablerowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
