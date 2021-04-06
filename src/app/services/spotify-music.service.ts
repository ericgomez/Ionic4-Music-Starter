import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpotifyMusicService {
  constructor() {}

  getNewRelease() {
    // Obtenemos la informacion desde una API en formato JSON
    return fetch(
      'https://platzi-music-api.herokuapp.com/browse/new-releases'
    ).then((response) => response.json());
  }
}
