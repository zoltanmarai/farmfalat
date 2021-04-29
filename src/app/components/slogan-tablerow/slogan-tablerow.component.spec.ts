import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SloganTablerowComponent } from './slogan-tablerow.component';

describe('SloganTablerowComponent', () => {
  let component: SloganTablerowComponent;
  let fixture: ComponentFixture<SloganTablerowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SloganTablerowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SloganTablerowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
