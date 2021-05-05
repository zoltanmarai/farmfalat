import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategoryTableRowComponent } from './product-category-table-row.component';

describe('ProductCategoryTableRowComponent', () => {
  let component: ProductCategoryTableRowComponent;
  let fixture: ComponentFixture<ProductCategoryTableRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCategoryTableRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCategoryTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
