import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../interfaces/user";
import {UserService} from "../../services/user.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  @Input()
   user: User;
  profileForm: FormGroup;
  successful: boolean;
  showModifyError: boolean;
  isRemoved: boolean;
  showRemoveError: boolean;

  constructor(private  userService: UserService, private router: Router, private cartService: CartService) {
    this.isRemoved = false;
    this.showRemoveError = false;
    this.showModifyError = false;
    this.successful = false;
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

    this.profileForm  ={
      // @ts-ignore
      firstName: '',
      lastName: '',
      username: '',
      simpleAddress_home: '',
      city_home: '',
      postCode_home: 0,
      phoneNumber: '',
      simpleAddress_delivery: '',
      simpleAddress_billing: '',
      city_delivery: '',
      city_billing: '',
      postCode_delivery: 0,
      postCode_billing: 0
    };

  }
  ngOnInit(): void {
    this.createForm();
    this.userService.getOneUser(parseInt(<string>sessionStorage.getItem('id'),10)).subscribe(
      resp => {
        console.log(resp);
       this.user = resp;
        this.createForm();
      });
  }
  createForm(): void{
    this.profileForm  = new FormGroup({
      firstName: new FormControl(this.user.firstName, Validators.required),
      lastName: new FormControl(this.user.lastName, Validators.required),
      username: new FormControl(this.user.username, [Validators.email, Validators.required]),
      simpleAddress_home: new FormControl(this.user.simpleAddress_home, Validators.required),
      city_home: new FormControl(this.user.city_home, Validators.required),
      postCode_home: new FormControl(this.user.postCode_home, Validators.minLength(4)),
      phoneNumber: new FormControl(this.user.phoneNumber, Validators.minLength(6)),
      simpleAddress_delivery: new FormControl(this.user.simpleAddress_delivery),
      simpleAddress_billing: new FormControl(this.user.simpleAddress_billing),
      city_delivery: new FormControl(this.user.city_delivery),
      city_billing: new FormControl(this.user.city_billing),
      postCode_delivery: new FormControl(this.user.postCode_delivery),
      postCode_billing: new FormControl(this.user.postCode_billing)
    });

  }

  submit(): void {
    this.showModifyError = false;
    console.log(this.profileForm.value);
    this.userService.userModify(parseInt(<string>sessionStorage.getItem('id'),10),this.profileForm.value).subscribe(resp => {
      this.successful = resp.successful;
      if(!this.successful){
        this.showModifyError = true;
      }},
      error => {
        this.showModifyError = true;
    });
  }
  removeUser(): void{
    this.showRemoveError = false;
    this.userService.removeUser(parseInt(<string>sessionStorage.getItem('id'),10)).subscribe(resp => {
      this.isRemoved = resp.successful;
      if(this.isRemoved) {
        sessionStorage.clear();
        this.cartService.clearCart();
        this.router.navigate(['main']);
      }else{
        this.showRemoveError = true;
      }},
      error => {
        this.showModifyError = true;
    });
  }
}
