import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help/help.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { RegistroComponent } from './registro/registro.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ProductosComponent } from './productos/productos.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import { TarjeteriaComponent } from './tarjeteria/tarjeteria.component';
import { SouveniresComponent } from './souvenires/souvenires.component';
import { OtrosComponent } from './otros/otros.component';
import {MatCardModule} from '@angular/material/card';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HelpComponent,
    FooterComponent,
    HeaderComponent,
    RegistroComponent,
    IniciarSesionComponent,
    ContactoComponent,
    ProductosComponent,
    TarjeteriaComponent,
    SouveniresComponent,
    OtrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatStepperModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatCardModule,
    HttpClientModule,
    MatTableModule,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
