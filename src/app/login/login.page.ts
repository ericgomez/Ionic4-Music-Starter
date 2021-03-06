import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  validationMessages = {
    email: [
      {
        // Cuando el error sea de tipo requerido
        type: 'required', message: 'El email es requerido'
      },
      {
        // Cuando el error no cumple el patron
        type: 'pattern', message: 'El email es incorrecto'
      }],
    password: [
      {
        // Cuando el error sea de tipo requerido
        type: 'required', message: 'El password es requerido'
      },
      {
        // Cuando el error no cumple el patron
        type: 'minlength', message: 'Minimo 5 letras para el password'
      }]
  };

  errorMessage: string = ''

  constructor(private formBuilder: FormBuilder, private authService: AuthenticateService, private navCtrl: NavController, private storage: Storage) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ])
      ),
      password: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
        ])
      ),
    });
  }

  async ngOnInit() { 
    // Creamos la Base de Datos
    await this.storage.create();
  }

  loginUser(credentials) {
    this.authService.loginUser(credentials).then(res => {
      this.errorMessage='';

      this.storage.set('isUserLoggedIn', true)

      this.navCtrl.navigateForward('/menu/home')
    }).catch(error => {
      this.errorMessage = error
    })
  }

  goToRegister() {
    this.navCtrl.navigateForward('/register')
  }
}
