import {EventEmitter, Injectable} from '@angular/core';
import {Personaje} from "../Modelos/Personaje";
import {Observable} from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})
export class CarritoServicioService {

  private  arregloPersonajes: Personaje[]=[];
  cambioCAntidadPersonajes: EventEmitter<number> = new EventEmitter();
  cantidad: number = 0;


  constructor() { }

  emitirCambioCantidad(cantidad: number) {
    this.cantidad = cantidad;
    this.cambioCAntidadPersonajes.emit(cantidad);
  }

   getNumberOfPersonajes():  number {
    return this.arregloPersonajes.length;
  }
   getPersonajes(): Personaje[] {
    return this.arregloPersonajes;
  }
   guardarPersonaje(personaje: Personaje) {
    this.arregloPersonajes.push(personaje);
  }
   deletePersonaje(personaje: Personaje) {
    const index = this.arregloPersonajes.indexOf(personaje);
    this.arregloPersonajes.splice(index, 1);
  }
}
