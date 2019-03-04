import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private ngxSmartModalService: NgxSmartModalService) { }

  ngOnInit() {
  }
  openImpressum() {
    this.ngxSmartModalService.getModal('impressumModal').open();
  }

  openDatenschutz() {
    this.ngxSmartModalService.getModal('datenschutzModal').open();
  }

}
