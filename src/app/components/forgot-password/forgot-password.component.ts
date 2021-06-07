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
  constructor(private route: ActivatedRoute, private userService: UserService,
              private router: Router) {
    this.pswToken = '';
    this.email = {
      username: ''
    };
    // @ts-ignore
    this.emailForm = {username: ''};

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
    if (this.pswToken == null){
      this.createEmailForm();
    }else{
      this.createNCPForm();
    }
  }
  createEmailForm(): void{
    this.emailForm = new FormGroup({
      username: new  FormControl(this.email.username,[Validators.email, Validators.required])
    });
  }
  createNCPForm(): void{
    if (this.pswToken != null) {
      this.npswForm = new FormGroup({
        token: new FormControl(this.cP.token = this.pswToken),
        password: new FormControl(this.cP.password, [Validators.minLength(6), Validators.required])
      });
    }
  }
  submit(): void{
    this.userService.forgotPassword(this.emailForm.value).subscribe(resp =>{
      console.log(resp);
    });
  }
  changePassword(): void {
    this.userService.newPassword(this.npswForm.value).subscribe(resp =>{
      console.log(resp);
    });
  }

}
