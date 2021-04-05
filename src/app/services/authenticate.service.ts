import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular'
@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private storage: Storage) { }

  async loginUser(credential){
    const user = await this.storage.get('user')

    return new Promise((accept, reject) => {
      if (user.email == credential.email && user.password == btoa(credential.password)) {
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
