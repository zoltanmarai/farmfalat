import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EmailNews} from "../../interfaces/email-news";
import {EmailServiceService} from "../../services/email-service.service";

@Component({
  selector: 'app-email-news-maintenance',
  templateUrl: './email-news-maintenance.component.html',
  styleUrls: ['./email-news-maintenance.component.css']
})
export class EmailNewsMaintenanceComponent implements OnInit {
  emailNewsForm: FormGroup;
  news: string;
  emailPartners: EmailNews[];
  pr: EmailNews;

  constructor(private emailService: EmailServiceService) {
    this.news = '';
    // @ts-ignore
    this.emailNewsForm = { news: ''};
     this.emailPartners = [];
     this.pr = {
       email: '',
       name: '',
       active: false,
       id: 0
     }
  }

  ngOnInit(): void {
    this.getEmailPartners();
    this.createEmailNewsForm();
  }
  createEmailNewsForm(): void{
    this.emailNewsForm = new FormGroup({
      news: new FormControl(this.news, Validators.required)
    });
  }
  getEmailPartners(): void{
    this.emailService.allPartners().subscribe( resp => {
      this.emailPartners = resp;
    });
  }
  submit(): void {

  }

}
