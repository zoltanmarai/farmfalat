import {Component, Input, OnInit} from '@angular/core';
import {EmailNews} from "../../interfaces/email-news";

@Component({
  selector: 'tr[app-email-news-tablerow]',
  templateUrl: './email-news-tablerow.component.html',
  styleUrls: ['./email-news-tablerow.component.css']
})
export class EmailNewsTablerowComponent implements OnInit {
  @Input()
  pr: EmailNews;

  constructor() {
    this.pr = {
      id: 0,
      email: '',
      name: '',
      active: false
    };
  }

  ngOnInit(): void {

  }

}
