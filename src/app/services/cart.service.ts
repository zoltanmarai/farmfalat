import { Injectable } from '@angular/core';
import {Product} from "../interfaces/product";


@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[];
  totalPrice: number;
  maxPrice;

  constructor() {
    this.items = [];
    this.totalPrice = 0;
    this.maxPrice =0;
  }
  // @ts-ignore
  addToCart(product: Product) {
    // @ts-ignore
    this.items.push(product);
    console.log(this.items);
  }
  getItems() {
    return this.items;
  }
  itemsCounter(){
    return this.items.length;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  deleteRow(id: number): void{
    for (let i = 0; i < this.items.length; ++i){
      if (this.items[i].id === id) {
        this.items.splice(i, 1);
      }
    }
  }
  sumPrice(): number {
    this.totalPrice = 0;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.items.length; i++) {
      // @ts-ignore
      this.totalPrice = this.items[i].subTotal + this.totalPrice;
    }
    console.log(this.totalPrice);
    return this.totalPrice;
  }
  getSumPrice(): number {

    if(this.totalPrice < 10000){
      this.maxPrice = 1000 + this.totalPrice;
    } else{
      this.maxPrice = this.totalPrice;
    }
    return this.maxPrice;
  }
}
