import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  userImage = 'assets/img/user.jpg'
  photo: SafeResourceUrl //Creamos una url segura

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  //Funcion tomar foto
  async takePhoto() {
    // Accedemos a la camara atravez de capacitor
    const image = await Plugins.Camera.getPhoto({
      quality: 100, //Calidad de la imagen: 0 a 100
      allowEditing: false, //Editar la foto
      resultType: CameraResultType.DataUrl, // Formatos de la imagen
      source: CameraSource.Camera, // Fuente de la foto
    })
    
    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(
      image && image.dataUrl
    )
    
  }

}
