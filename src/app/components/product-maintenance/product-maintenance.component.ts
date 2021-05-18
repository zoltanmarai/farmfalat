import {Component, OnInit} from '@angular/core';
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
  refreshSubsrciption: Subscription | undefined;


  constructor( private route: ActivatedRoute,
               private router: Router,
               private productService: ProductService) {
    this.products = [];

  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      pr => {
        this.products = pr;
      });
    this.refreshSubsrciption = this.productService.refreshObservable.subscribe(productList =>{
      this.products = productList;
    });
  }

}
