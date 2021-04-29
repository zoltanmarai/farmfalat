import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../interfaces/user";

@Component({
  selector: 'tr[app-user-tablerow]',
  templateUrl: './user-tablerow.component.html',
  styleUrls: ['./user-tablerow.component.css']
})
export class UserTablerowComponent implements OnInit {
  @Input()
  user:User;
  constructor() {
    this.user = { city_billing: null , city_delivery: null ,
      postCode_billing: 0, postCode_delivery: 0, simpleAddress_billing: null, simpleAddress_delivery: null,
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      password2: '',
      simpleAddress_home: '',
      city_home: '',
      postCode_home: 0,
      phoneNumber: '',
      active: false
    };
  }

  ngOnInit(): void {
  }

}
