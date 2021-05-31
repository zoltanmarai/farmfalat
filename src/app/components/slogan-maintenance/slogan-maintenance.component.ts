import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SloganService} from "../../services/slogan.service";
import {Slogan} from "../../interfaces/slogan";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-slogan-maintenance',
  templateUrl: './slogan-maintenance.component.html',
  styleUrls: ['./slogan-maintenance.component.css']
})
export class SloganMaintenanceComponent implements OnInit {
  sloganForm: FormGroup;
  slogan: string;
  added: boolean;
  slogansArr: Slogan[];
  pr: Slogan;
  // @ts-ignore
  private refreshSubscription: Subscription;

  constructor(private sloganService: SloganService) {
    this.slogan = '';
    this.added = false;
    // @ts-ignore
    this.sloganForm = { slogan: ''};
    this.slogansArr = [];
    this.pr = {text: '', id: 0, active: false};

  }

  ngOnInit(): void {
  this.createSloganForm();
  this.getSloganList();
  this.refreshSubscription = this.sloganService.refreshObservable.subscribe(resp => {
    this.slogansArr = resp;
  });
  }
  submit(): void{
    this.sloganService.addSlogan(this.sloganForm.value.slogan).subscribe( resp => {
      this.added = resp;
      console.log(this.added);
      this.getSloganList();
      this.createSloganForm();
      this.sloganService.refreshSlogans(this.slogansArr);
      }
    )
  }

  createSloganForm(): void{
    this.sloganForm = new FormGroup({
      slogan: new FormControl(this.slogan, Validators.required)
    });
  }
  getSloganList(): void{
    this.sloganService.getAllSlogan().subscribe(resp => {
      console.log(resp);
      this.slogansArr = resp ;
    });
  }
  delete(pr: Slogan): void{
    console.log(pr.id);
    this.sloganService.removeSlogan(pr.id).subscribe(resp =>{
      console.log(resp);
      this.getSloganList();
    });
  }
  ngONDestroy(): void {
    this.refreshSubscription.unsubscribe();
  }

}
