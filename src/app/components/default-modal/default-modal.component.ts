import {Component, Input, OnInit} from '@angular/core';
import {Aboutus} from "../../interfaces/aboutus";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-default-modal',
  templateUrl: './default-modal.component.html',
  styleUrls: ['./default-modal.component.css']
})
export class DefaultModalComponent implements OnInit {
  @Input()
  aszf: Aboutus;
  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal) {
    this.aszf = {
      title: '',
      subject: ''
    }
  }

  ngOnInit(): void {

  }

}
