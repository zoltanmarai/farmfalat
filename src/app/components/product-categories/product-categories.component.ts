import {Component, Input, OnInit, Output} from '@angular/core';
import {ProductCategory} from "../../interfaces/product-category";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductCategoryService} from "../../services/product-category.service";

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.css']
})
export class ProductCategoriesComponent implements OnInit {
  @Input()
  category: ProductCategory;
  categoriesArr: ProductCategory[];

  constructor( private route: ActivatedRoute,
               private router: Router,
               private categoryService: ProductCategoryService) {
    this.category = {
      categoryName: '',
      parentCategoryID: 0,
      parentCategory: null,
      id: 0
    };
    this.categoriesArr = [];
  }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe( resp =>{
      this.categoriesArr = resp
    });
  }

}
