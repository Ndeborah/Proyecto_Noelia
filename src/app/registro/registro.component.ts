import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  hide: any;

  getErrorMessage(): string {
    if (this.email.hasError('required')) {
      return 'Ingrese un mail valido';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
