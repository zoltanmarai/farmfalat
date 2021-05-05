import {Component, Input, OnInit} from '@angular/core';
import {ProductCategory} from "../../interfaces/product-category";
import {ProductCategoryService} from "../../services/product-category.service";

@Component({
  selector: 'tr[app-product-category-table-row]',
  templateUrl: './product-category-table-row.component.html',
  styleUrls: ['./product-category-table-row.component.css']
})
export class ProductCategoryTableRowComponent implements OnInit {
  @Input()
  category: ProductCategory;
  constructor(private categoryService: ProductCategoryService) {

    this.category = {
      categoryName: '',
      parentCategoryID: 0,
      parentCategory: null,
      id: 0
    }
  }

  ngOnInit(): void {
  }

}
