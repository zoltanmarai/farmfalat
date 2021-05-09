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


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
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

  constructor(public cartService: CartService, private userService: UserService,
              private router: Router, private dateService: DateService) {
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
      active: false
    };
    this.reactiveForm.controls['reactiveRadio'].valueChanges.subscribe((state: any) => {
      console.log(state);
    });
    this.reactiveForm2.controls['reactiveRadio2'].valueChanges.subscribe((s: number) => {
      console.log(s);
      this.i = s;
    });
    // @ts-ignore
    this.registrationForm = {firstName: '', lastName: '', username: '',
       phoneNumber: '',
      address_delivery: null, city_delivery: null, postCode_delivery: 0
    };
    // @ts-ignore
    this.deliveryDates = { deliveryDayID: 0,
      year: 2000,
      month: '',
      dayOfTheMonth: 0,
      dayOfWeek: '',
      listOfGaps: {
        deliveryGapsID: 0,
        gapStartsAt: 0,
        counter: 0,
        available: false
      },
      active: false
    };
    this.sumPrice = 0;
    // @ts-ignore
    this.order = {
      user: this.user,
      deliveryDate:{ deliveryDayID: 0,
                     year: 2000,
                    month: '',
                    dayOfTheMonth: 0,
                    dayOfWeek: '',
                    listOfGaps: [],
                    active: false},
      orderedItemList: this.productsInCart,
      paymentType: '',
      status: false,
      deliveryFee: 0
    };
    // @ts-ignore
    this.deliveryForm = {deliveryGapsID: 0,
      gapStartsAt: 0,
      counter: 0,
      available: false
    }
  }
  ngOnInit(): void {
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
    }
  }
  submit(): void {

    this.order.deliveryDate = this.deliveryDates[this.i];
    this.order.deliveryDate.listOfGaps[0].deliveryGapsID = this.deliveryForm.value.deliveryGapsID;

    this.order.user = this.user;
    this.order.orderedItemList = this.productsInCart;
    this.order.paymentType = 'CASH';
    console.log(this.order);

  }

}


