import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HelpComponent} from './help/help.component';
import {HomeComponent} from './home/home.component';
import {RegistroComponent} from './registro/registro.component';
import {IniciarSesionComponent} from './iniciar-sesion/iniciar-sesion.component';
import {ContactoComponent} from './contacto/contacto.component';
import {ProductosComponent} from './productos/productos.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'help', component: HelpComponent },
  { path: 'registro', component: RegistroComponent},
  { path: 'login', component: IniciarSesionComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: 'productos', component: ProductosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
