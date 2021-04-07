import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SpotifyMusicService } from '../services/spotify-music.service';
import { SongsModalPage } from '../songs-modal/songs-modal.page'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  artists: any[] = [];
  songs: any[] = [];
  albums: any[] = [];
  song: {
    preview_url: string;
    playing: boolean;
    name: string;
  } = {
    preview_url: "",
    playing: false,
    name: "",
  }

  currentSong: HTMLAudioElement
  newTime

  // Le inidcamos al slider por medio de las [options] las caracteriticas que va a tener
  slideOps = {
    initialSlide: 2, //slide inicial 
    slidesPerView: 4, //slide por vista
    centeredSlides: true, // Centrar los slides
    speed: 400 // Velocidad de transicion
  };

  constructor(private musicService: SpotifyMusicService, private modalController: ModalController) {}

  //Ciclo de vida componente
  // Este metodo se ejecuta una vez se a entrado exitosamente a la vista, sea ejecutado el contructor y el HTML esta cargado
  ionViewDidEnter() {
    this.musicService.getNewRelease().then( newReleases => {
      // Obtenemos los artistas desde el JSON local
      this.artists = this.musicService.getArtists()
      console.log(this.artists);
      
      // Asignamos lo que nos devuelve el backend a nuestra variable de artista
      //this.artists = newReleases.albums.items  
      // Asignamos lo que nos devuelve el backend a nuestra variable de songs por medio de un filtro    
      this.songs = newReleases.albums.items.filter(e => e.album_type == "single")   
      // Asignamos lo que nos devuelve el backend a nuestra variable de albums por medio de un filtro 
      this.albums = newReleases.albums.items.filter(e => e.album_type == "album")     
    })
  }

  async showSongs(artist) {
    const songs = await this.musicService.getArtistsTopTracks(artist.id)
    
    // Creat un Modal
    const modal = await this.modalController.create({
      component: SongsModalPage,
      componentProps: {
        // Varliables que enviamos al desde Home a SongsModal
        songs: songs.tracks,
        artist: artist.name
      }
    })
    
    modal.onDidDismiss().then(dataReturned=>{
      this.song = dataReturned.data;
    })

    // Mostramos el modal
    return await modal.present();
  }

  /* Controles del reproductor */
  play() {
    this.currentSong = new Audio(this.song.preview_url)
    //Iniciamos la canción
    this.currentSong.play()

    // Obtenemos el tiempo de la canción por medio de metodo timeupdate
    this.currentSong.addEventListener("timeupdate", () => {
      // le asignamos el valor a la variable newTime
      this.newTime = (this.currentSong.currentTime / this.currentSong.duration) //Realizamos la conversión para que scroll vaya acorde a la cancion
    })

    this.song.playing = true;
  }

  pause() {
    // Pausamos la canción
    this.currentSong.pause()

    this.song.playing = false;
  }

  parseTime(time:number) {
    if (time) {
      const partTime = parseInt(time.toString().split('.')[0], 10)
      let minutes = Math.floor(partTime/60).toString()
      if (minutes.length == 1) {
        minutes = '0' + minutes
      }

      let seconds = (partTime%60).toString()
      if (seconds.length == 1) {
        seconds = '0' + seconds
      }

      return minutes + ':' + seconds
    }
  }

}
