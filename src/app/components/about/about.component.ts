import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FaqService} from "../../services/faq.service";
import {Faq} from "../../interfaces/faq";
import {Aboutus} from "../../interfaces/aboutus";
import {PartnerService} from "../../services/partner.service";
import {Partner} from "../../interfaces/partner";
import {Title} from "@angular/platform-browser";


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  faq: Faq;
  faqArr: Faq[];
  aboutUs: Aboutus;
  partners: Partner[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private faqService: FaqService,
              private titleService: Title,
              private partnerService: PartnerService) {
    this.partners = [];
    this.faq = {
      question : '', answer: ''
    };
    this.faqArr = [];
    this.aboutUs = {
      title: '',
      subject: ''
    };
  }

  ngOnInit(): void {
    this.titleService.setTitle('Rólunk');
    this.faqService.getFaqs().subscribe( resp => {
      this.faqArr = resp;
    });
    this.faqService.getAboutUs().subscribe( resp => {
      this.aboutUs = resp;
    });
    this.partnerService.getUs().subscribe( r => {
      this.partners = r;
    });
  }

}
