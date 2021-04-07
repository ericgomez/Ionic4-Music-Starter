import { Injectable } from '@angular/core';
import * as dataArtists from './artists.json'

@Injectable({
  providedIn: 'root',
})
export class SpotifyMusicService {
  constructor() {}

  getArtists() {
    // Obtenemos la informacion de los artistas desde un archivo JSON local
    return dataArtists.items
  }

  getNewRelease() {
    // Obtenemos la informacion desde una API en formato JSON
    return fetch(
      'https://platzi-music-api.herokuapp.com/browse/new-releases'
    ).then((response) => response.json());
  }
}
