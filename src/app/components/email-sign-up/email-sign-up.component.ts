import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {EmailServiceService} from "../../services/email-service.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EmailNews} from "../../interfaces/email-news";

@Component({
  selector: 'app-email-sign-up',
  templateUrl: './email-sign-up.component.html',
  styleUrls: ['./email-sign-up.component.css']
})
export class EmailSignUpComponent implements OnInit {
  registrationForm: FormGroup;
  emailUser: EmailNews;
  successful: boolean;
  showRegSuccess: boolean;

  constructor( private router: Router, private emailService: EmailServiceService) {
    this.emailUser = {
      email: '',
      name: ''
    };
    // @ts-ignore
    this.registrationForm = { email: '',
      name: ''
    };
    this.successful = false;
    this.showRegSuccess = false;
  }

  ngOnInit(): void {
    this.createRegistrationForm();
  }
  createRegistrationForm(): void {
    this.registrationForm = new FormGroup({
      email: new FormControl(this.emailUser.email,[Validators.email, Validators.required]),
      name: new FormControl(this.emailUser.name, Validators.required)
    }
    )};
  submit(): void{
    this.emailService.newPartner(this.registrationForm.value).subscribe( resp =>{
      console.log(resp);
      this.registrationForm.reset();
      this.successful = resp;
      if(this.successful) {
        this.showRegSuccess = true;
        setTimeout(() => {
          this.showRegSuccess = false;
        },  3000);
      }
    });
  };
}
