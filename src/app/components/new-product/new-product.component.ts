import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../interfaces/product";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ProductService} from "../../services/product.service";
import {UnitService} from "../../services/unit.service";
import {NewproductResponse} from "../../interfaces/newproduct-response";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  @Input()
  pr: Product;
  productForm: FormGroup;
  newProductResp: NewproductResponse;
  unitList: string[];
  constructor(private router: Router,
              private productService: ProductService,
              private unitService: UnitService) {
    this.unitList= [];
    this.pr = { id: 0,
      imageId: 0,
      name: '',
      description: '',
      price: 0,
      quantity: 0,
      unit: '',
      locale: '',
      categoryID: 0,
      inPromotion: false,
      outOfStock: false,
      outOfSeason:  false,
      subTotal: 0
    };
    // @ts-ignore
    this.productForm = {imageId: 0,
      name: '',
      description: '',
      price: 0,
      unit: '',
      locale: '',
      categoryID: 0,
      inPromotion: false,
      outOfStock: false,
      outOfSeason:  false
    };
    this.newProductResp = {
      successful: false,
      id: 0,
    };
  }

  ngOnInit(): void {
    this.creatform();
    this.unitService.getUnits().subscribe(
      s =>{
        this.unitList= s;
      }
    );
  }
  creatform(): void {
    this.productForm = new FormGroup({
      imageId: new FormControl(this.pr.imageId, Validators.required),
      name: new FormControl(this.pr.name, Validators.required),
      description: new FormControl(this.pr.description, Validators.required),
      price: new FormControl(this.pr.price, Validators.min(1)),
      unit: new FormControl(this.pr.unit, Validators.required),
      locale: new FormControl(this.pr.locale, Validators.required),
      categoryID: new FormControl(this.pr.categoryID, Validators.min(0)),
      inPromotion: new FormControl(this.pr.inPromotion, Validators.required),
      outOfStock: new FormControl(this.pr.outOfStock, Validators.required),
      outOfSeason: new FormControl(this.pr.outOfSeason, Validators.required),
    });
  }
  submit(): void{
    this.productService.addProduct(this.productForm.value).subscribe(resp =>{
      this.newProductResp = resp;
      if(this.newProductResp.successful) {
        // TO DO kép hozzáadása
        this.router.navigateByUrl('/product-maintenance');
      }else{

      }
    });
  }
}
