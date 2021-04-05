import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular'
@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private storage: Storage) { }

  loginUser(credential){
    return new Promise((accept, reject) => {
      if (credential.email == 'test@test.com' && credential.password == '12345') {
        accept('Login correcto')
      } else {
        reject('Login incorrecto')
      }
    })
  }

  registerUser(userData) {
    // En este caso como aun no tenenemos niguna funcion de incriptado disponible podemos utilizar una utilidad de javaScript de nombre btoa()
    userData.password = btoa(userData.password)

    return this.storage.set('user', userData)
  }
}
