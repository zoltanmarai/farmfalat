import {Component, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../interfaces/product";
import {ProductService} from "../../services/product.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-egg',
  templateUrl: './egg.component.html',
  styleUrls: ['./egg.component.css']
})
export class EggComponent implements OnInit {
  @Output()
  products: Product[];
  @Output()
  productName: string | null;

  constructor(private productService: ProductService,private route: ActivatedRoute) {
    this.products = [];
    this.productName = '';
  }

  ngOnInit(): void {

    this.route.queryParams.subscribe(r =>  {console.log (r)});
    this.route.params.subscribe(s => {
      console.log(s);
      this.productName = s.productName;
      this.productService.productSearchByName(this.productName).subscribe(
        pr => {
          this.products = pr;
          console.log(this.products);
        });
    });
  }

}
