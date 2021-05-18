import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Partner} from "../../interfaces/partner";

@Component({
  selector: 'tr[app-partner-tablerow]',
  templateUrl: './partner-tablerow.component.html',
  styleUrls: ['./partner-tablerow.component.css']
})
export class PartnerTablerowComponent implements OnInit {
  @Input()
  p: Partner;
  @Output()
  delete = new EventEmitter<void>();

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
  deleteEvent(): void{
    this.delete.emit();
  }

}
