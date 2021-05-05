import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {
  id: number;

  constructor() {
   this.id = 0;
  }

  ngOnInit(): void {
  }

}
