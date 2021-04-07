import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private menu: MenuController, private navCtrl: NavController, private storage: Storage) { }

  ngOnInit() {
  }

  // Funcion de cerrar menu
  closeMenu() {
    this.menu.close()
  }

  logout() {
    //this.storage.set('isUserLoggedIn', false) // Pasamo la variable a false o removerla
    this.storage.remove('isUserLoggedIn') // Pasamo la variable a false
    this.navCtrl.navigateRoot('/login')
  }

  goToSettings() {
    this.navCtrl.navigateRoot('menu/settings')

    this.menu.close()
  }

  goToSports() {
    this.navCtrl.navigateRoot('menu/sports')

    this.menu.close()
  }

  goToHome() {
    this.navCtrl.navigateRoot('menu/home')

    this.menu.close()
  }
}
