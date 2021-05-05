import { Component, OnInit } from '@angular/core';
import {ProductCategory} from "../../interfaces/product-category";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductCategoryService} from "../../services/product-category.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-product-category-new',
  templateUrl: './product-category-new.component.html',
  styleUrls: ['./product-category-new.component.css']
})
export class ProductCategoryNewComponent implements OnInit {
  category: ProductCategory;
  catForm: FormGroup;
  constructor( private route: ActivatedRoute,
               private router: Router,
               private categoryService: ProductCategoryService) {
    this.category = {
      categoryName: '',
      parentCategoryID: 0,
      parentCategory: null,
      id: 0
    };
    // @ts-ignore
    this.catForm = { categoryName: '',
      parentCategoryID: 0,
      parentCategory: null,
      id: 0
    };
  }

  ngOnInit(): void {
    this.creatform();
  }
  creatform(): void {
    this.catForm = new FormGroup({
      categoryName: new FormControl( this.category.categoryName, Validators.required),
      parentCategoryID: new FormControl(this.category.parentCategoryID, Validators.required),
      //parentCategory: new FormControl(this.category),
      id: new FormControl(this.category.id, Validators.required)
    });
  }
  submit(): void{
    this.categoryService.addNewCat(this.catForm.value).subscribe( resp => {
      console.log(resp);
      this.router.navigateByUrl('/product-categories');
    });
  }

}
