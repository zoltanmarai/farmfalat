import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {CartService} from "../../services/cart.service";
import {Product} from "../../interfaces/product";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  productsInCart: Product[];
  @Output()
  change: EventEmitter<number> = new EventEmitter<number>();
  numberOfItems: number;
  sumPrice: number;

  constructor(public activeModal: NgbActiveModal, public cartService: CartService) {
    this.productsInCart = [];
    this.numberOfItems = 0;
    this.sumPrice = 0;
  }

  ngOnInit(): void {
    this.productsInCart = this.cartService.items;
    this.numberOfItems = this.productsInCart.length;
    this.change.emit(this.numberOfItems);
    this.sumPrice =  this.cartService.sumPrice();
  }
  submit(): void {
    this.activeModal.close();
  }
  delete(pr: Product): void{
    console.log(pr);
      for (let i = 0; i < this.productsInCart.length; ++i){
      if (this.productsInCart[i].id === pr.id) {
        this.productsInCart.splice(i, 1);
        this.change.emit(this.numberOfItems);
        this.sumPrice =  this.cartService.sumPrice();
      }
    }
  }




}
