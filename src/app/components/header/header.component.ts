import {AfterViewInit, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CartComponent} from "../cart/cart.component";
import {Login} from "../../interfaces/login";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {UserResponse} from "../../interfaces/user-response";
// @ts-ignore
import {EventEmitter} from "events";
import {CartService} from "../../services/cart.service";
import {Product} from "../../interfaces/product";
import {Observable} from 'rxjs';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit , OnInit, OnDestroy{
  public isMenuCollapsed = true;
  collapsed = true;
  login: Login;
  userResponse: UserResponse;
  @Input()
  productName: string;
  prNameValid = true;
  showLoginError: boolean;
  userRole: string | null;
  firstName: string | null;
  numberOfItems: number;
  productsInCart: Product[];
  obs = new Observable((observer) => {
    observer.next(this.cartService.items.length)
  }).pipe(map((val) => {
        console.log(val);
      return val as number
    }),    //map operator
  );


  constructor(private modalService: NgbModal, private userService: UserService,
              private router: Router, private cartService: CartService) {
   // this.obs.subscribe(value => {
    //  this.numberOfItems = value;
   // });
    this.numberOfItems = 0;
    this.cartService.currentItemsLength.subscribe(length => this.numberOfItems = Number(length));
    this.productsInCart = [];
    this.showLoginError = false;
    this.productName = '';
    this.login = {
      username: '',
      password: ''
    };
    this.userResponse = {
      succesful: false,
      list: {
        // @ts-ignore
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        password2: '',
        address: '',
        city: '',
        postCode: 0,
        phoneNumber: '',
        role: '',
        userID: 0,
        active: false
      }
    };
    this.userRole = '';
    this.firstName = '';
    if (sessionStorage.length > 0) {
      this.firstName = sessionStorage.getItem('firstName');
      this.userRole = sessionStorage.getItem('role');
    }

  }

  ngOnInit(): void {
    this.productsInCart = this.cartService.items;
    this.cartService.currentItemsLength.subscribe(length => this.numberOfItems = length);

   // this.obs.subscribe(value => {
    //  console.log(value);
    //  this.numberOfItems = value;
   // });

  }

  openModifyModal(): void {

    const modalRef = this.modalService.open(CartComponent);
    this.cartService.currentItemsLength.subscribe(length => this.numberOfItems = length);

    console.log(this.numberOfItems);
   // this.obs.subscribe(value => {
   //   console.log(value);
   //   this.numberOfItems = value;
   // });
  }

  submit(): void {
    // this.login.username = this.login.value.username;
    //  this.login.password = this.registrationForm.value.password;

    this.showLoginError = false;
    this.userService.login(this.login).subscribe(resp => {
        this.userResponse = resp;
        console.log(this.userResponse.succesful);
        if (this.userResponse.succesful) {
          console.log(this.userResponse);
          sessionStorage.setItem('firstName', this.userResponse.list[0].firstName);
          sessionStorage.setItem('role', String(this.userResponse.list[0].role));
          sessionStorage.setItem('id', String(this.userResponse.list[0].userID));
          if (sessionStorage.length > 0) {
            this.firstName = sessionStorage.getItem('firstName');
            this.userRole = sessionStorage.getItem('role');
          }
          this.router.navigate(['main']);
        } else {
          this.showLoginError = true;
          this.login.username = '';
          this.login.password = '';
          setTimeout(() => {
            this.showLoginError = false;
          },  3000);
        }
      },
      error => {
        this.showLoginError = true;
      });
    this.userResponse.succesful = false;
  }

  productSearch(): void {
    this.prNameValid = (this.productName.length > 2);
    if (this.prNameValid) {
      this.router.navigateByUrl('/egg/' + this.productName);
      this.productName = '';
    }
  }

  logout(): void {
    sessionStorage.clear();
    this.userRole = '';
    this.firstName = '';
    this.cartService.clearCart();
    this.numberOfItems = 0;
    this.router.navigate(['main']);

  }

  ngAfterViewInit() {
   // this.obs.subscribe( value =>
    //{ console.log(value);
   //   this.numberOfItems = value;
   // });
  }
  ngOnDestroy() {
  }

}


