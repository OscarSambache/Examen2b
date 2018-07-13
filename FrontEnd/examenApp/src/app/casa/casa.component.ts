import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CasaServicioService} from "../Servicios/CasaServicio.service";
import {Casa} from "../Modelos/Casa";
import {Personaje} from "../Modelos/Personaje";

@Component({
  selector: 'app-casa',
  templateUrl: './casa.component.html',
  styleUrls: ['./casa.component.css']
})
export class CasaComponent implements OnInit {

  casa: Casa;
  personaje: Personaje;
  arregloPersonaje: Personaje[];

  constructor(
    private ruta:  ActivatedRoute,
    private servicoCasa: CasaServicioService
  ) {
    this.ruta.params.subscribe(params =>{
      this.casa= new Casa();
      this.servicoCasa.getCasa(params['id']).subscribe(data => {
        console.log(data);

        this.casa=data
        this.arregloPersonaje=data.Personajes;
      })

    } )
  }

  ngOnInit() {
  }

}
