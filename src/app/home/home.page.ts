import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  artists = [{},{},{},{},{}];

  // Le inidcamos al slider por medio de las [options] las caracteriticas que va a tener
  slideOps = {
    initialSlide: 2, //slide inicial 
    slidesPerView: 4, //slide por vista
    centeredSlides: true, // Centrar los slides
    speed: 400 // Velocidad de transicion
  };

  constructor() {}

}
