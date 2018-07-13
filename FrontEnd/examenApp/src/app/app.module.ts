import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {HttpClientModule, HttpHeaders} from '@angular/common/http';
import {RouterModule} from "@angular/router";


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {CasaServicioService} from "./Servicios/CasaServicio.service";
import { CasaComponenteComponent } from './casa-componente/casa-componente.component';
import {PersonajeServicioService} from "./Servicios/PersonajeServicio.service";
import { PersonajeComponentComponent } from './personaje-component/personaje-component.component';
import {RUTAS_APP} from "./app.route";
import { CasaComponent } from './casa/casa.component';
import { PersonajeComponent } from './personaje/personaje.component';
import { RutaPadreHijoComponent } from './ruta-padre-hijo/ruta-padre-hijo.component';
import { CabezeraComponent } from './cabezera/cabezera.component';
import {UsuarioServicioService} from "./Servicios/UsuarioServicio.service";
import {CarritoServicioService} from "./Servicios/carrito-servicio.service";
import { CarritoComponent } from './/carrito/carrito.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CasaComponenteComponent,
    PersonajeComponentComponent,
    CasaComponent,
    PersonajeComponent,
    RutaPadreHijoComponent,
    CabezeraComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(
      RUTAS_APP,
      {
        useHash: true
      }
    ),
  ],
  providers: [
    CasaServicioService,
    PersonajeServicioService,
    UsuarioServicioService,
    CarritoServicioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
