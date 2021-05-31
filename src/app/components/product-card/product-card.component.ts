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
  retrievedImage: any;
  base64Data: any;
  numberOfItems: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cartService: CartService,
    private modalService: NgbModal
  ) {

    this.numberOfItems = this.cartService.itemsCounter();
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
      subTotal: 0,
      // @ts-ignore
      imageList: {name: '',
        type: '',
        description: '',
        tooltip: '',
        productID: 0,
        byteFlow: '',
        id: 0,
        active: false
      }
    };
  }

  ngOnInit(): void {
    this.cartService.currentItemsLength.subscribe(length => this.numberOfItems = Number(length));
    this.pr.quantity = 1;
    // @ts-ignore
    if (this.pr.imageList.length > 0) {
      // @ts-ignore
      this.base64Data = this.pr.imageList[0].byteFlow;
      this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
    }
  }
  addToCart(pr:Product) {
    this.pr = pr;

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
      this.cartService.changeItemsLength(this.numberOfItems);
      this.numberOfItems = this.cartService.itemsCounter();
   // this.modalService.open(CartComponent);
  }
  addQuantity(): void{
    // @ts-ignore
    this.pr.quantity = this.pr.quantity + 1;
  }
  minusQuantity(): void{
    // @ts-ignore
    if(this.pr.quantity > 1) {
      // @ts-ignore
      this.pr.quantity = this.pr.quantity - 1;
    }
  }
}
