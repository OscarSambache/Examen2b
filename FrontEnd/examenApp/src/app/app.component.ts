import { Component } from '@angular/core';
import {PersonajeServicioService} from "./Servicios/PersonajeServicio.service";
import {CarritoServicioService} from "./Servicios/carrito-servicio.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';

  constructor(private  PersonajeServicio: PersonajeServicioService) {
    this.PersonajeServicio.obtenerArregloPersonaje();

  }

}
