import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Product} from "../../interfaces/product";
import {User} from "../../interfaces/user";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DateService} from "../../services/date.service";
import {DeliveryDate} from "../../interfaces/deliveryDate";
import {Order} from "../../interfaces/order";
import {OrderService} from "../../services/order.service";
import {OrderResponce} from "../../interfaces/order-responce";


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  numberOfItems: number;
  maxPrice: number;
  i: number;
  sumPrice: number;
  productsInCart: Product[];
  user: User;
  firstName: string | null;
  reactiveForm: FormGroup = new FormGroup({
    reactiveRadio: new FormControl(true)
  });
  reactiveForm2: FormGroup = new FormGroup({
    reactiveRadio2: new FormControl(true)
  });
  deliveryForm: FormGroup;
  registrationForm: FormGroup;
  deliveryDates: DeliveryDate[];
  dDate: DeliveryDate;
  order: Order;
  dGap: number;
  orderResp: OrderResponce;
  showRespSuccess: boolean;

  constructor(public cartService: CartService, private userService: UserService,
              private router: Router, private dateService: DateService, private orderService: OrderService) {
    this.dGap = 0;
    this.i = 2;
    this.dDate = {
      active: false, deliveryDayID: 0, listOfGaps: [],
      year: 2000,
      month: 'sajnos nincs elérhetö dátum',
      dayOfTheMonth: 0,
      dayOfWeek: 'XXX'

    };
    this.maxPrice =  0;
    this.firstName = '';
    this.productsInCart = [];
    this.user = {
      userID: 0,
      city_billing: "", city_delivery: "",
      postCode_billing: 0, postCode_delivery: 0, simpleAddress_billing: "", simpleAddress_delivery: "",
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      password2: '',
      simpleAddress_home: '',
      city_home: '',
      postCode_home: 0,
      phoneNumber: '',
      active: false,
      wantEmailNews: false
    };
    this.reactiveForm.controls['reactiveRadio'].valueChanges.subscribe((state: number) => {
      if(state === 0){
        this.order.paymentType = 'CASH';
      } else{
        this.order.paymentType = 'CARD';
      }
    });
    this.reactiveForm2.controls['reactiveRadio2'].valueChanges.subscribe((s: number) => {
      console.log(s);
      this.i = s;
    });
    // @ts-ignore
    this.registrationForm = {firstName: '', lastName: '', username: '',
       phoneNumber: '',
      address_delivery: '', city_delivery: '', postCode_delivery: 0
    };
    // @ts-ignore
    this.deliveryDates = { deliveryDayID: 0,
      year: 2000,
      month: '',
      dayOfTheMonth: 0,
      dayOfWeek: '',
      listOfGaps : {
        deliveryGapsID: 0,
        gapStartsAt: 0,
        counter: 0,
        available: false,
        deliveryGapString: ''
      },
      active: false
    };
    this.sumPrice = 0;
    // @ts-ignore
    this.order = {
      firstName: '',
      lastName: '',
      username: '',
      phoneNumber: '',
      userID: 0,
      postCode_delivery: 0,
      city_delivery: '',
      simpleAddress_delivery: '',
      comment_delivery: '',
      deliveryDayID: 0,
      deliveryGapsID: 0,
      ordersItemList: this.productsInCart,
      paymentType: '',
      status: false,
      deliveryFee: 0
    };
    // @ts-ignore
    this.deliveryForm = {deliveryGapsID: 0,
      gapStartsAt: 0,
      counter: 0,
      available: false,
      deliveryGapString: ''
    };
    this.orderResp = {
      successful: false,
      ID: 0
    };
    this.showRespSuccess = false;
    this.numberOfItems = this.cartService.itemsCounter();
  }
  ngOnInit(): void {
    this.cartService.currentItemsLength.subscribe(length => this.numberOfItems = Number(length));
    this.getDeliveryDates();
    this.createDeliveryForm();
    this.productsInCart = this.cartService.items;
    this.sumPrice =  this.cartService.sumPrice();
    this.maxPrice = this.cartService.getSumPrice();
    this.order.deliveryFee = this.maxPrice-this.sumPrice;
    if(sessionStorage.length > 0) {
      this.firstName = sessionStorage.getItem('firstName');
      this.userService.getOneUser(parseInt(<string>sessionStorage.getItem('id'), 10)).subscribe(
        resp => {
          this.user = resp;
        });
    }else{
      this.createRegistrationForm();
    }
  }
  createRegistrationForm(): void {
    this.registrationForm = new FormGroup({
      firstName: new FormControl(this.user.firstName, Validators.required),
      lastName: new FormControl(this.user.lastName, Validators.required),
      username: new FormControl(this.user.username, [Validators.email, Validators.required]),
      phoneNumber: new FormControl(this.user.phoneNumber, Validators.minLength(6)),
      simpleAddress_delivery: new FormControl(this.user.simpleAddress_delivery,Validators.required),
      city_delivery: new FormControl(this.user.city_delivery,Validators.required),
      postCode_delivery: new FormControl(this.user.postCode_delivery, Validators.minLength(4)),
    });
  }
  createDeliveryForm(): void{
    this.deliveryForm = new FormGroup({
      deliveryGapsID: new FormControl(this.dGap),
    });
  }

  getDeliveryDates(): void {
    this.dateService.getDeliveryDates().subscribe(
      resp => {
        this.deliveryDates = resp;

      },
      error => {
        this.deliveryDates.push(this.dDate);
        this.deliveryDates.push(this.dDate);
      });

  }
  delete(pr: Product): void{
    for (let i = 0; i < this.productsInCart.length; ++i){
      if (this.productsInCart[i].id === pr.id) {
        this.productsInCart.splice(i, 1);
        this.sumPrice =  this.cartService.sumPrice();
        this.maxPrice = this.cartService.getSumPrice();
        this.order.deliveryFee = this.maxPrice-this.sumPrice;
      }
      this.cartService.changeItemsLength(this.numberOfItems);
    }
  }
  submit(): void {

    this.order.deliveryDayID = this.deliveryDates[this.i].deliveryDayID;
    this.order.deliveryGapsID = this.deliveryForm.value.deliveryGapsID;
    if(this.firstName!== '' || this.firstName !== null){
      this.order.firstName = this.user.firstName;
      this.order.lastName = this.user.lastName;
      this.order.phoneNumber = this.user.phoneNumber;
      this.order.username = this.user.username;
    // @ts-ignore
      this.order.userID = this.user.userID;
      this.order.postCode_delivery = this.user.postCode_delivery;
    // @ts-ignore
      this.order.city_delivery = this.user.city_delivery;
    // @ts-ignore
      this.order.simpleAddress_delivery = this.user.simpleAddress_delivery;
    }else{
      this.order.firstName = this.registrationForm.value.firstName;
      this.order.lastName = this.registrationForm.value.lastName;
      this.order.phoneNumber = this.registrationForm.value.phoneNumber;
      this.order.username = this.registrationForm.value.username;
      // @ts-ignore
      this.order.userID = 0;
      this.order.postCode_delivery = this.registrationForm.value.postCode_delivery;
      // @ts-ignore
      this.order.city_delivery = this.registrationForm.value.city_delivery;
      // @ts-ignore
      this.order.simpleAddress_delivery = this.registrationForm.value.simpleAddress_delivery;

    }
    this.order.ordersItemList = this.productsInCart;
    console.log(this.order);
    this.orderService.newOrder(this.order).subscribe( resp => {
      console.log(resp);
      this.orderResp = resp;
      if(this.orderResp.successful){
          this.showRespSuccess = true;
          setTimeout( () =>{
            this.cartService.clearCart();
            this.router.navigate(['main']);
          },3000);
      }else{

      }
    });

  }


}


