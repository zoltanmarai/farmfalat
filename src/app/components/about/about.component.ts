import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FaqService} from "../../services/faq.service";
import {Faq} from "../../interfaces/faq";


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  faq: Faq;
  faqArr: Faq[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private faqService: FaqService) {
    this.faq = {
      question : '', answer: ''
    };
    this.faqArr = [];
  }

  ngOnInit(): void {
    this.faqService.getFaqs().subscribe( resp => {
      this.faqArr = resp;
    });
  }

}
