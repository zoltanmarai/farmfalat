import {Component, Input, OnInit} from '@angular/core';
import {Token} from "@angular/compiler";
import {User} from "../../interfaces/user";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {TokenService} from "../../services/token.service";
import {Login} from "../../interfaces/login";
import {UserResponse} from "../../interfaces/user-response";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
 // @Input()
 // token: Token;
  @Input()
  user: User;
  registrationForm: FormGroup;
  showRegError: boolean;
  successful: boolean;
  login: Login;
  userResponse: UserResponse;
  isMoreAddress: boolean;
  showRegSuccess: boolean;
 // confirm: ConfirmMessageResponse;


  constructor( private userService: UserService,
              private router: Router, private tokenService: TokenService) {
    this.showRegSuccess = false;
    this.isMoreAddress = false;
    this.successful = false;
    // @ts-ignore
    // @ts-ignore
    this.user = { city_billing: null , city_delivery: null ,
      postCode_billing: 0, postCode_delivery: 0, simpleAddress_billing: null, simpleAddress_delivery: null,
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
    // @ts-ignore
    this.registrationForm = {firstName: '', lastName: '', username: '',
      password: '',password2:'', simpleAddress_home: '', city_home: '', postCode_home: 1000, phoneNumber: '',
      address_delivery: null, city_delivery: null, postCode_delivery: 0,
      address_billing: null, city_billing: null, postCode_billing: 0, wantEmailNews: false
    };
    this.showRegError = false;
    // @ts-ignore
    this.confirm = {
      successful: false,
      message: {
        // @ts-ignore
        message: ''
      }
    };
    this.login ={
      username: '',
      password: ''
    }

    this.userResponse = {
      succesful: false,
      list: {
        // @ts-ignore
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        password2: '',
        address_home: '',
        city_home: '',
        postCode_home: 0,
        phoneNumber: '',
        role: '',
        active: false
      }
    }

  }

  ngOnInit(): void {
    this.createRegistrationForm();
  }
  createRegistrationForm(): void {
    this.registrationForm = new FormGroup({
      firstName: new FormControl(this.user.firstName, Validators.required),
      lastName: new FormControl(this.user.lastName, Validators.required),
      username: new FormControl(this.user.username, [Validators.email, Validators.required]),
      password: new FormControl(this.user.password, [Validators.minLength(6), Validators.required]),
      simpleAddress_home: new FormControl(this.user.simpleAddress_home, Validators.required),
      city_home: new FormControl(this.user.city_home, Validators.required),
      password2: new FormControl(this.user.password2, Validators.required),
      postCode_home: new FormControl(this.user.postCode_home, Validators.minLength(4)),
      phoneNumber: new FormControl(this.user.phoneNumber, Validators.minLength(6)),
      simpleAddress_delivery: new FormControl(this.user.simpleAddress_delivery),
      simpleAddress_billing: new FormControl(this.user.simpleAddress_billing),
      city_delivery: new FormControl(this.user.city_delivery),
      city_billing: new FormControl(this.user.city_billing),
      postCode_delivery: new FormControl(this.user.postCode_delivery),
      postCode_billing: new FormControl(this.user.postCode_billing),
      isMoreAddress: new FormControl(this.isMoreAddress, Validators.required),
      wantEmailNews: new FormControl(this.user.wantEmailNews, Validators.required)
    });
  }
  submit(): void {
    console.log(this.registrationForm);
    this.userService.addUser(this.registrationForm.value).subscribe(resp =>{
      console.log(resp);
      this.successful = resp;
      if(this.successful) {
        this.showRegSuccess = true;
        setTimeout(() => {
        this.login.username = this.registrationForm.value.username;
        this.login.password = this.registrationForm.value.password;
        this.userService.login(this.login).subscribe(resp => {
        this.userResponse = resp;
        if(this.userResponse.succesful){
          sessionStorage.setItem('firstName', this.userResponse.list[0].firstName);
          sessionStorage.setItem('role', String(this.userResponse.list[0].role));
          sessionStorage.setItem('id', String(this.userResponse.list[0].userID));
          this.router.navigate(['main']);
        }else{}
        });
        },  2000);
      }else{}

    });

  }
  changeVal(): void{
    this.showRegSuccess = false;
}
}
