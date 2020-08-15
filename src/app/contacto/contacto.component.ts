import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor() {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  getErrorMessage(): string {
    if (this.email.hasError('required')) {
      return 'Ingrese un mail valido';
    }

    return this.email.hasError('email') ? 'Email no valido' : '';
  }
}
