import {Component, Input, OnInit} from '@angular/core';
import {Partner} from "../../interfaces/partner";

@Component({
  selector: 'app-partner-card',
  templateUrl: './partner-card.component.html',
  styleUrls: ['./partner-card.component.css']
})
export class PartnerCardComponent implements OnInit {
  @Input()
  p: Partner;
  constructor() {
    this.p = {
      name: '',
      phone: '',
      link: '',
      description: '',
      id: 0,
      active: false
    };
  }

  ngOnInit(): void {
  }

}
