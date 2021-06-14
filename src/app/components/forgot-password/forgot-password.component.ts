import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {Email} from "../../interfaces/email";
import {ChangePassword} from "../../interfaces/change-password";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
    pswToken: string | null;
    email:Email;
    cP: ChangePassword;
    npswForm: FormGroup;
    emailForm: FormGroup;
    successful: boolean;
    showRegSuccess: boolean;
    showFailed: boolean;
    showChanged: boolean;
    showPswFailed: boolean;
  constructor(private route: ActivatedRoute, private userService: UserService,
              private router: Router) {
    this.showChanged = false;
    this.showPswFailed = false;
    this.showFailed = false;
    this.showRegSuccess = false;
    this.successful = false;
    this.pswToken = '0';
    this.email = {
      email: ''
    };
    // @ts-ignore
    this.emailForm = {email: ''};

    this.cP = {
      token: '',
      password: ''
    };
    // @ts-ignore
    this.npswForm = {token: '',
      password: ''
    };
  }

  ngOnInit(): void {
    this.pswToken = this.route.snapshot.paramMap.get('pswToken');
    console.log(this.pswToken);
    if (this.pswToken == null || this.pswToken == '0'){
      this.createEmailForm();
    }else{
      this.createNCPForm();
    }
  }
  createEmailForm(): void{
    this.emailForm = new FormGroup({
      email: new  FormControl(this.email.email,[Validators.email, Validators.required])
    });
  }
  createNCPForm(): void{
    if (this.pswToken != '0' && this.pswToken != null) {
        this.npswForm = new FormGroup({
          token: new FormControl(this.cP.token = this.pswToken),
          password: new FormControl(this.cP.password, [Validators.minLength(6), Validators.required])
        });
      }

  }
  submit(): void{
    console.log(this.emailForm.value);
    this.userService.forgotPassword(this.emailForm.value).subscribe(resp =>{
      console.log(resp);
      this.successful = resp;
      console.log(this.successful);
      if(this.successful) {
        this.showRegSuccess = true;
        this.emailForm.reset();
        this.email.email = '';
        setTimeout(() => {
          this.showRegSuccess = false;
        },  4000);
      }else{
        this.showFailed = true;
        this.emailForm.reset();
        this.email.email = '';
        setTimeout(() => {
          this.showFailed = false;
        },  4000);
      }
    },
      error => {
        this.showFailed = true;
        this.emailForm.reset();
        this.email.email = '';
        setTimeout(() => {
          this.showFailed = false;
        },  4000);
    });
  }
  changePassword(): void {
    this.cP.password = this.npswForm.value.password;
    if (this.pswToken != null) {
      this.cP.token = this.pswToken;
    }
    this.userService.newPassword(this.cP).subscribe(resp =>{
      console.log(resp);
      this.successful = resp;
      console.log(this.successful);
      if(this.successful) {
        this.showChanged = true;
        this.npswForm.reset();
        this.cP.password = '';
        setTimeout(() => {
          this.showChanged = false;
        },  4000);
      }else{
        this.showPswFailed = true;
        this.npswForm.reset();
        this.cP.password = '';
        setTimeout(() => {
          this.showPswFailed = false;
        },  4000);
      }
    },
      error => {
        this.showPswFailed = true;
        this.npswForm.reset();
        this.cP.password = '';
        setTimeout(() => {
          this.showPswFailed = false;
        },  4000);
      });
  }

}
