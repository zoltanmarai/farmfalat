import { Component, OnInit } from '@angular/core';
import {SloganService} from "../../services/slogan.service";
import {Slogan} from "../../interfaces/slogan";
import {PartnerService} from "../../services/partner.service";
import {Partner} from "../../interfaces/partner";

@Component({
  selector: 'app-main-site',
  templateUrl: './main-site.component.html',
  styleUrls: ['./main-site.component.css']
})
export class MainSiteComponent implements OnInit {
  slogan: Slogan;
  partners: Partner[];

  constructor(
    private sloganService: SloganService,
    private partnerService: PartnerService
  ) {
    this.slogan = {
      text: '',
      id: 0,
      active: false
    };
    this.partners = [];
  }

  ngOnInit(): void {
    this.sloganService.getSlogan().subscribe(
      sl => {
        this.slogan = sl ;
      });
    this.partnerService.getPartners().subscribe( resp =>{
      this.partners = resp;
    });
  }

}
