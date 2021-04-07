import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core'
const { Geolocation } = Plugins

@Component({
  selector: 'app-sports',
  templateUrl: './sports.page.html',
  styleUrls: ['./sports.page.scss'],
})
export class SportsPage implements OnInit {

  currentCenter: any;
  coordinates: any[] = [];
  defaultZoom = 14

  constructor() { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.getCurrentPosition()
    this.watchPosition()
  }

  // Obtenemos la primera posicion
  async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition()
    this.currentCenter = {
      lat: coordinates.coords.latitude,
      lng: coordinates.coords.longitude
    }
  }

  //Optenemos la posicion en cada que se actualiza
  watchPosition() {
    Geolocation.watchPosition({}, position => {
      this.currentCenter = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }

      this.coordinates.push({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      })
    })
  }

}
