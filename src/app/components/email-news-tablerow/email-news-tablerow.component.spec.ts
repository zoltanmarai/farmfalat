import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailNewsTablerowComponent } from './email-news-tablerow.component';

describe('EmailNewsTablerowComponent', () => {
  let component: EmailNewsTablerowComponent;
  let fixture: ComponentFixture<EmailNewsTablerowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailNewsTablerowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailNewsTablerowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
