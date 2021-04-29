import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Slogan} from "../../interfaces/slogan";

@Component({
  selector: 'tr[app-slogan-tablerow]',
  templateUrl: './slogan-tablerow.component.html',
  styleUrls: ['./slogan-tablerow.component.css']
})
export class SloganTablerowComponent implements OnInit {
  @Input()
  pr: Slogan;
  @Output()
  delete = new EventEmitter<void>();


  constructor() {
    this.pr = {text: '', id: 0, active: false};
  }

  ngOnInit(): void {
  }
  deleteEvent(): void{
    console.log(this.pr);
    this.delete.emit();
  }
}
