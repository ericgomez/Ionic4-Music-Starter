import { Component } from '@angular/core';
import { SpotifyMusicService } from '../services/spotify-music.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  artists = [{},{},{},{},{}];
  songs: any[] = [];
  albums: any[] = [];

  // Le inidcamos al slider por medio de las [options] las caracteriticas que va a tener
  slideOps = {
    initialSlide: 2, //slide inicial 
    slidesPerView: 4, //slide por vista
    centeredSlides: true, // Centrar los slides
    speed: 400 // Velocidad de transicion
  };

  constructor(private musicService: SpotifyMusicService) {}

  //Ciclo de vida componente
  // Este metodo se ejecuta una vez se a entrado exitosamente a la vista, sea ejecutado el contructor y el HTML esta cargado
  ionViewDidEnter() {
    this.musicService.getNewRelease().then( newReleases => {
      // Asignamos lo que nos devuelve el backend a nuestra variable de artista
      this.artists = newReleases.albums.items  
      // Asignamos lo que nos devuelve el backend a nuestra variable de songs por medio de un filtro    
      this.songs = newReleases.albums.items.filter(e => e.album_type == "single")   
      // Asignamos lo que nos devuelve el backend a nuestra variable de albums por medio de un filtro 
      this.albums = newReleases.albums.items.filter(e => e.album_type == "album")     
    })
  }

}
