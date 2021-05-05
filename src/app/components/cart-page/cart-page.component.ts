import { Component, OnInit } from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Product} from "../../interfaces/product";
import {User} from "../../interfaces/user";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DateService} from "../../services/date.service";
import {DeliveryDate} from "../../interfaces/deliveryDate";

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
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
  registrationForm: FormGroup;
  deliveryDates: DeliveryDate[];
  dDate: DeliveryDate;

  constructor(public cartService: CartService, private userService: UserService,
              private router: Router, private dateService: DateService) {
    this.dDate = {
      active: false, deliveryDayID: 0, listOfGaps: [],
      year: 2000,
      month: 'sajnos nincs elérhetö dátum',
      dayOfTheMonth: 0,
      dayOfWeek: 'XXX'

    }
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
    this.reactiveForm2.controls['reactiveRadio2'].valueChanges.subscribe((state: any) => {
      console.log(state);
    });
    // @ts-ignore
    this.registrationForm = {firstName: '', lastName: '', username: '',
       phoneNumber: '',
      address_delivery: null, city_delivery: null, postCode_delivery: 0
    };
    this.deliveryDates = [];
    this.sumPrice = 0;
  }
  ngOnInit(): void {
    this.getDeliveryDates();
    this.productsInCart = this.cartService.items;
    this.sumPrice =  this.cartService.sumPrice();
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
  getDeliveryDates(): void {
    this.dateService.getDeliveryDates().subscribe(
      resp => {
        this.deliveryDates = resp;
        console.log(this.deliveryDates[0].listOfGaps[0]);
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
      }
    }
  }
  submit(): void {

  }

}


