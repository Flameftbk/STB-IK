import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scrollTo(param) {
    const height = document.documentElement.clientHeight * param;
    window.scrollTo(0, height);
  }
}
