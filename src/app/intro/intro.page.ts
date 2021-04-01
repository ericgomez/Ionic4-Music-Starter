import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1, // un slide po vista
    centeredSlides: true, // centrado
    speed: 400 // Velocidad de trancicion
  };

  slides = [{
    title: "Escucha tu música",
    subTitle: "EN CUALQUIER LUGAR",
    description: "Los mejores álbumes, las mejores canciones. Escucha y comparte en cualquier momento, a todas horas.",
    icon: "play",
  }, 
  {
    title: "Disfruta de nuestro reproductor",
    subTitle: "DE VIDEOS INCREÍBLES",
    description: "Entra al modo video de nuestro reproductor y obtén acceso a clips, documentales y making offs incríbles de tu artista favorito.",
    icon: "videocam",
  }, 
  {
    title: "Accede al exclusivo",
    subTitle: "MODO DEPORTE",
    description: "Crea una playlist basada en tu actividad física. <br /> Ten reportes y acceso a lo que necesites, integrado ccon GPS!",
    icon: "bicycle",
  }]

  constructor() { }

  ngOnInit() {
  }

}