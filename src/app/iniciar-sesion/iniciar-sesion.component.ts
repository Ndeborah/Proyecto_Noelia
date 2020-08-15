import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.scss']
})
export class IniciarSesionComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  hide: any;

  getErrorMessage(): string {
    if (this.email.hasError('required')) {
      return 'Ingrese un mail valido';
    }

    return this.email.hasError('email') ? 'Email no valido' : '';
  }
  constructor() {
  }

  ngOnInit(): void {
  }

}
