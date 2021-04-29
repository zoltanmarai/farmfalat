import {Component,EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../interfaces/product";
import {CartService} from "../../services/cart.service";




@Component({
  selector: 'tr[app-product-row]',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent implements OnInit {
  @Input()
  orderedProduct: Product;
  @Output()
  delete = new EventEmitter<void>();

  constructor(public cartService: CartService) {
    this.orderedProduct = {id: 0,
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
      subTotal: 0};
  }

  ngOnInit(): void {
  }
  deleteEvent(): void{
    console.log(this.orderedProduct);
    this.delete.emit();
  }
}
