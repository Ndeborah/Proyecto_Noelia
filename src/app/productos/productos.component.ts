import { Component, OnInit } from '@angular/core';
import {ProductosService} from '../miki/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  constructor(private productoService: ProductosService) { }

  ngOnInit(): void {
    this.productoService.lista();
  }

}
