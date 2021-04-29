import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../interfaces/product";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../services/product.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-product-maintenance',
  templateUrl: './product-maintenance.component.html',
  styleUrls: ['./product-maintenance.component.css']
})
export class ProductMaintenanceComponent implements OnInit {
  products: Product[];
  @Input()
  pr: Product;
  refreshSubsrciption: Subscription | undefined;


  constructor( private route: ActivatedRoute,
               private router: Router,
               private productService: ProductService) {
    this.products = [];
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

  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      pr => {
        this.products = pr;
        console.log(this.products);
      });
    this.refreshSubsrciption = this.productService.refreshObservable.subscribe(productList =>{
      this.products = productList;
    });
  }

}
