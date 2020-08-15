import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) {
  }

  lista(): void {
    this.http.get('http://localhost:3000/productos', {
      headers: {'Access-Control-Allow-Origin': '*'}
    }).subscribe(productos => {
      console.log(productos);
    });

  }
}
