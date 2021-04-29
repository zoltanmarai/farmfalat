import { Component, OnInit } from '@angular/core';
import {SloganService} from "../../services/slogan.service";
import {Slogan} from "../../interfaces/slogan";

@Component({
  selector: 'app-main-site',
  templateUrl: './main-site.component.html',
  styleUrls: ['./main-site.component.css']
})
export class MainSiteComponent implements OnInit {
  slogan: Slogan;

  constructor(
    private sloganService: SloganService,
  ) {
    this.slogan = {
      text: '',
      id: 0,
      active: false
    };
  }

  ngOnInit(): void {
    this.sloganService.getSlogan().subscribe(
      sl => {
        this.slogan = sl ;
      });
  }

}
