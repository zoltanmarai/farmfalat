import { Component, OnInit } from '@angular/core';
import {Faq} from "../../interfaces/faq";
import {ActivatedRoute, Router} from "@angular/router";
import {FaqService} from "../../services/faq.service";

@Component({
  selector: 'app-vegie',
  templateUrl: './vegie.component.html',
  styleUrls: ['./vegie.component.css']
})
export class VegieComponent implements OnInit {

  public isCollapsed = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private faqService: FaqService) {

  }

  ngOnInit(): void {

  }

}

