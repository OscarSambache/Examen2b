import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Personaje} from "../Modelos/Personaje";
import {PersonajeServicioService} from "../Servicios/PersonajeServicio.service";
import {CarritoServicioService} from "../Servicios/carrito-servicio.service";

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit {

  personaje: Personaje;
  estaDisponible?: boolean=true;


  constructor( private ruta:  ActivatedRoute,
               private servicoPersonaje: PersonajeServicioService,
               private CarritoServicio: CarritoServicioService) {

    this.ruta.params.subscribe(params =>{
      this.personaje= new Personaje();
      this.servicoPersonaje.getPersonaje(params['id']).subscribe(data => {

        this.personaje=data;
        //console.log('personaje',this.personaje)
      })

    } )

  }

  ngOnInit() {
  }

  add(){
    this.CarritoServicio.guardarPersonaje(this.personaje);
    this.CarritoServicio.emitirCambioCantidad(this.CarritoServicio.getNumberOfPersonajes());
    //console.log(this.CarritoServicio.getNumberOfPersonajes())

  }
}
