import { Component, OnInit } from '@angular/core';
import {Partner} from "../../interfaces/partner";
import {ActivatedRoute, Router} from "@angular/router";
import {PartnerService} from "../../services/partner.service";

@Component({
  selector: 'app-partner-maintenance',
  templateUrl: './partner-maintenance.component.html',
  styleUrls: ['./partner-maintenance.component.css']
})
export class PartnerMaintenanceComponent implements OnInit {
  partners: Partner[];

  constructor( private route: ActivatedRoute,
               private router: Router,
               private partnerService: PartnerService) {
    this.partners = [];

  }

  ngOnInit(): void {
    this.partnerService.getPartners().subscribe( resp =>{
      this.partners = resp;
    });
  }

  delete(p: Partner): void {
    this.partnerService.deletePartner(p).subscribe( resp => {
      console.log(resp);
    });
  }
}
