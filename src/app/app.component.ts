import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import Typed from 'typed.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'stb-ik';

  constructor() {}

  ngOnInit() {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 700, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });
    const typed = new Typed('#typed', {
      // tslint:disable-next-line: max-line-length
      strings: ['Herzlich Willkommen auf unserer Website!^1800', 'Herzlich Willkommen auf unserer Website!<br> Scrollen Sie herunter und sehen Sie sich um!^1000', 'Herzlich Willkommen auf unserer Website!'],
      typeSpeed: 20,
      startDelay: 500,
      smartBackspace: true,
      backSpeed: 10,
      showCursor: true,
    });
  }
}
