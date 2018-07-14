import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Personaje} from "../Modelos/Personaje";
import {PersonajeServicioService} from "../Servicios/PersonajeServicio.service";
import {CarritoServicioService} from "../Servicios/carrito-servicio.service";
import {Casa} from "../Modelos/Casa";

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit {

  personaje: Personaje;
  personaje2: Personaje;
  constructor( private ruta:  ActivatedRoute,
               private servicoPersonaje: PersonajeServicioService,
               private CarritoServicio: CarritoServicioService) {


    this.ruta.params.subscribe(params =>{
      this.personaje= new Personaje();
      this.personaje2= new Personaje();

      this.servicoPersonaje.getPersonaje(params['id']).subscribe(data => {
        this.personaje=data;
        this.personaje2=this.servicoPersonaje.getPersonajeDeArreglo(this.personaje.id);
      })
    } )

  }

  ngOnInit() {
  }

  add(){
    this.CarritoServicio.guardarPersonaje(this.personaje);
    this.CarritoServicio.emitirCambioCantidad(this.CarritoServicio.getNumberOfPersonajes());
    this.personaje.estadoPersonaje='mo disponible';
    this.servicoPersonaje.actualizarPersonaje(this.personaje)

  }
}
