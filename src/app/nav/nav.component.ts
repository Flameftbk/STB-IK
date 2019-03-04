import { Component, OnInit } from '@angular/core';
import { TourService } from '../tour.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(public ts: TourService) { }

  ngOnInit() {
  }

  scrollTo(param) {
    const height = document.documentElement.clientHeight * param;
    window.scrollTo(0, height);
  }
  goToYourXpert() {
    window.open('https://www.yourxpert.de/xpert/steuerberater/ingo.kneisel', '_blank');
  }
}
