import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTablerowComponent } from './product-tablerow.component';

describe('ProductTablerowComponent', () => {
  let component: ProductTablerowComponent;
  let fixture: ComponentFixture<ProductTablerowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductTablerowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTablerowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
