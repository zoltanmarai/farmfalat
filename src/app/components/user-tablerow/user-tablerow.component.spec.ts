import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTablerowComponent } from './user-tablerow.component';

describe('UserTablerowComponent', () => {
  let component: UserTablerowComponent;
  let fixture: ComponentFixture<UserTablerowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTablerowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTablerowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
