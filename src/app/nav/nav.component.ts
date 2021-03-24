import { Component, OnInit } from '@angular/core';
import { TourService } from '../tour.service';
import { HostListener, Inject } from "@angular/core";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  currentScroll: any = 0;
  window: any;
  constructor(public ts: TourService) {}

  ngOnInit() {
  }

  @HostListener("window:scroll", [])
  getScrollPercent() {
    var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
        this.currentScroll = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
    return this.currentScroll;
}

  scrollTo(param) {
    const height = document.documentElement.clientHeight * param;
    window.scrollTo(0, height);
  }
  goToYourXpert() {
    window.open('https://www.yourxpert.de/xpert/steuerberater/ingo.kneisel', '_blank');
  }
}
