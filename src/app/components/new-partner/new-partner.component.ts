import { Component, OnInit } from '@angular/core';
import {Partner} from "../../interfaces/partner";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {PartnerService} from "../../services/partner.service";

@Component({
  selector: 'app-new-partner',
  templateUrl: './new-partner.component.html',
  styleUrls: ['./new-partner.component.css']
})
export class NewPartnerComponent implements OnInit {
  p: Partner;
  partnerForm: FormGroup;

  constructor(private router: Router,
              private partnerService: PartnerService) {
    this.p = {
      name: '',
      phone: '',
      link: '',
      description: '',
      id: 0,
      active: false
    };
    // @ts-ignore
    this.partnerForm = {name: '',
        phone: '',
        link: '',
        description: '',
        active: true
    }
  }

  ngOnInit(): void {
    this.creatForm();
  }
  creatForm(): void {
    this.partnerForm = new FormGroup({
      name: new FormControl(this.p.name, Validators.required),
      phone: new FormControl(this.p.phone, Validators.required),
      link: new FormControl(this.p.link, Validators.required),
      description: new FormControl(this.p.description, Validators.required),
      });

  }
  submit(): void {
    this.partnerService.newPartner(this.partnerForm.value).subscribe( resp => {
      console.log(resp);
        this.router.navigateByUrl('/partner-maintenance');

    });
  }
}
