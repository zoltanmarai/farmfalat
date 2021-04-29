import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFullinfoComponent } from './user-fullinfo.component';

describe('UserFullinfoComponent', () => {
  let component: UserFullinfoComponent;
  let fixture: ComponentFixture<UserFullinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFullinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFullinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
