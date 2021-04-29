import { Component, OnInit } from '@angular/core';
import {User} from "../../interfaces/user";
import {UserService} from "../../services/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-fullinfo',
  templateUrl: './user-fullinfo.component.html',
  styleUrls: ['./user-fullinfo.component.css']
})
export class UserFullinfoComponent implements OnInit {
  user:User;
  id: number;
  constructor(private userService: UserService, private route: ActivatedRoute) {
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
    this.id = 0;
  }

  ngOnInit(): void {
    this.id = parseInt(<string>this.route.snapshot.paramMap.get('id'));
    this.userService.getOneUser(this.id).subscribe(
      resp => {
        this.user = resp;
      });
  }

}
