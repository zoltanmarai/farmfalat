import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegieComponent } from './vegie.component';

describe('VegieComponent', () => {
  let component: VegieComponent;
  let fixture: ComponentFixture<VegieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VegieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VegieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
