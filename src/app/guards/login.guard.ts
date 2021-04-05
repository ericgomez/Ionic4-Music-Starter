import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private storage: Storage, private router: Router) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    
    // Creamos la Base de Datos
    await this.storage.create();

    const isUserLoggedIn = await this.storage.get('isUserLoggedIn'); // Obtenemos el valor de la Variable isUserLoggedIn de nuestro Storage
    
    if(isUserLoggedIn){ // En caso de que el valor sea verdadero
      return true;
    } else { // En caso que sea falso redireccionamos a la pagina intro
      this.router.navigateByUrl('/login');
    }

  }
  
}
