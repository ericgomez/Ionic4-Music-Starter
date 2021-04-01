import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1, // un slide po vista
    centeredSlides: true, // centrado
    speed: 400 // Velocidad de trancicion
  };

  constructor() {}

}
