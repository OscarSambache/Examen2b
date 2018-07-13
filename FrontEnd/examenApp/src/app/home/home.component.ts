import { Component, OnInit } from '@angular/core';
import {CasaServicioService} from "../Servicios/CasaServicio.service";
import {Casa} from "../Modelos/Casa";
import {PersonajeServicioService} from "../Servicios/PersonajeServicio.service";
import {Personaje} from "../Modelos/Personaje";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  casa: Casa;
  arregloCasa: Casa[];
  personaje: Personaje;
  arregloPersonaje: Personaje[];
  puntoOrigen: number;
  tamanioArreglo: number;
  tamanioArregloPersonajes: number;
  puntoOrigenPersonaje: number;

    constructor(
    public CasaServicio: CasaServicioService,
    public PersonajeServicio: PersonajeServicioService
  ) {
      this.arregloCasa = [];
      this.arregloPersonaje = [];
      this.tamanioArreglo=0;
      this.puntoOrigenPersonaje=0;
    }

  ngOnInit() {
  }

  buscar(region_origen: string){


      this.CasaServicio.getCasaporRegion(region_origen).subscribe(data => {
        this.tamanioArreglo=data.length;
        this.arregloCasa = data;
        this.puntoOrigen=3
        this.arregloCasa.splice(3, data.length)

      })



    this.PersonajeServicio.getPersonajeOrigen(region_origen).subscribe(data => {
      this.tamanioArregloPersonajes=data.length
      this.arregloPersonaje = data;
      this.puntoOrigenPersonaje=4;
      this.arregloPersonaje.splice(4,data.length);

    })
  }

  verMasCasas(region_origen: string){
    this.CasaServicio.getCasaporRegion(region_origen).subscribe(data => {
      this.arregloCasa = data;
      this.arregloCasa .splice(this.puntoOrigen, data.length)
      this.puntoOrigen=this.puntoOrigen+3;
    })

  }

  verMasPersonajes(region_origen: string){
    this.PersonajeServicio.getPersonajeOrigen(region_origen).subscribe(data => {
      this.arregloPersonaje=data;
      this.arregloPersonaje.splice(this.puntoOrigenPersonaje, data.length);
      this.puntoOrigenPersonaje=this.puntoOrigenPersonaje+4;

    })

  }
}
