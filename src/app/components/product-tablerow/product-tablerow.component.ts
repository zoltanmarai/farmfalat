import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../interfaces/product";
import {ProductService} from "../../services/product.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ProductModifyModalComponent} from "../product-modify-modal/product-modify-modal.component";

@Component({
  selector: 'tr[app-product-tablerow]',
  templateUrl: './product-tablerow.component.html',
  styleUrls: ['./product-tablerow.component.css']
})
export class ProductTablerowComponent implements OnInit {
  @Input()
  pr: Product;
  constructor(private productService: ProductService, private modalService: NgbModal) {
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
  }

  openModifyModal(): void {
    const modalRef = this.modalService.open(ProductModifyModalComponent);
    modalRef.componentInstance.pr = this.pr;
  }
}
