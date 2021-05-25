import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../interfaces/product";
import {ActivatedRoute, Router} from "@angular/router";
import {CartService} from "../../services/cart.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CartComponent} from "../cart/cart.component";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-packages-card',
  templateUrl: './packages-card.component.html',
  styleUrls: ['./packages-card.component.css']
})
export class PackagesCardComponent implements OnInit {

  @Input()
  id: number;
  pr: Product;

  constructor(
    private productService: ProductService,
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
      quantity: 1,
      unit: '',
      locale: '',
      categoryID: 0,
      inPromotion: false,
      outOfStock: false,
      outOfSeason:  false,
      subTotal: 0
    };
    this.id = 0;
  }

  ngOnInit(): void {
    this.getProductByID(this.id);
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
   // this.modalService.open(CartComponent);
  }
  getProductByID(id: number): void {
    this.productService.getProductById(id).subscribe(
      p => {
        this.pr = p;
        this.pr.quantity = 1;
      });
  }
  addQuantity(): void{
    // @ts-ignore
    this.pr.quantity = this.pr.quantity + 1;
  }
  minusQuantity(): void {
    // @ts-ignore
    if (this.pr.quantity > 1) {
      // @ts-ignore
      this.pr.quantity = this.pr.quantity - 1;
    }
  }
}

