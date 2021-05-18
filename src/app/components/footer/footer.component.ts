import { Component, OnInit } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FaqService} from "../../services/faq.service";
import {Aboutus} from "../../interfaces/aboutus";
import {DefaultModalComponent} from "../default-modal/default-modal.component";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  aszf: Aboutus;

  constructor(private modalService: NgbModal, private faqService: FaqService) {
    this.aszf = {
      title: '',
      subject: ''
    }
  }

  ngOnInit(): void {
  }
  openScrollableContent() {
    this.faqService.getAboutUs().subscribe( resp => {
      this.aszf = resp;
      const modalRef = this.modalService.open(DefaultModalComponent, { scrollable: true });
      modalRef.componentInstance.aszf = this.aszf;
    });
  }

}
