import { Component, OnInit } from '@angular/core';
import {User} from "../../interfaces/user";
import {UserResponse} from "../../interfaces/user-response";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-maintenance',
  templateUrl: './user-maintenance.component.html',
  styleUrls: ['./user-maintenance.component.css']
})
export class UserMaintenanceComponent implements OnInit {
  user:User;
  usersArr: User[];
  constructor(private userService: UserService,
              private router: Router) {
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
    this.usersArr = [];
  }

  ngOnInit(): void {
  }
  getAllUsers(): void{
  this.userService.getAllUsers().subscribe(
    resp => {
      this.usersArr = resp;
    });
  }
  getActiveUsers(): void{
    this.userService.getActiveUsers().subscribe(
      resp => {
        this.usersArr = resp;
      });
  }
}
