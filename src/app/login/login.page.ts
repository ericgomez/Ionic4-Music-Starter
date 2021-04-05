import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder) {
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

  ngOnInit() { }
}
