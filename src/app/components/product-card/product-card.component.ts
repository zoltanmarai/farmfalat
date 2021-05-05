import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../interfaces/product";
import {ActivatedRoute, Router} from "@angular/router";
import {CartService} from "../../services/cart.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CartComponent} from "../cart/cart.component";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input()
  pr: Product;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cartService: CartService,
    private modalService: NgbModal
  ) {
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
   this.pr.quantity = 0;
  }

  addToCart(pr:Product) {


    // @ts-ignore
    this.cartService.addToCart({
      // @ts-ignore
      id: this.pr.id,
      name: this.pr.name,
      // @ts-ignore
      imageId: this.pr.imageId,
      price: this.pr.price,
      // @ts-ignore
      quantity: this.pr.quantity,
      // @ts-ignore
      subTotal: this.pr.price * this.pr.quantity
    });
    this.modalService.open(CartComponent);
  }

}