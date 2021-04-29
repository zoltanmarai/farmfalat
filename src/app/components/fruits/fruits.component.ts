import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../interfaces/product";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {
  @Input()
  products: Product[];
  @Input()
  pr: Product;
  id: number;
  showError: boolean;
  constructor( private route: ActivatedRoute,
               private router: Router,
               private productService: ProductService
  ) {
    this.id = 0;
    this.products = [];
    this.pr = { id: 0,
      imageId: 0,
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
    this.showError = false;
  }


  ngOnInit(): void {
     // @ts-ignore
    this.route.queryParams.subscribe(r =>  {console.log (r)});
    this.route.params.subscribe(s => {
      console.log(s);
      this.id = s.id;
      this.productService.getProductByCategory(this.id).subscribe(
        pr => {
          this.products = pr;
          console.log(this.products);
        });
    });
    }


}
