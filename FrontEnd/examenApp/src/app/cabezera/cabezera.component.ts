import { Component, OnInit } from '@angular/core';
import {UsuarioServicioService} from "../Servicios/UsuarioServicio.service";
import {Usuario} from "../Modelos/Usuario";
import {Carrito} from "../Modelos/Carrito";
import {CarritoServicioService} from "../Servicios/carrito-servicio.service";
import {Personaje} from "../Modelos/Personaje";

@Component({
  selector: 'app-cabezera',
  templateUrl: './cabezera.component.html',
  styleUrls: ['./cabezera.component.css']
})
export class CabezeraComponent implements OnInit {

  usuario: Usuario
  public cantidadPersonajes: number;
  idtext: string

  constructor(private UsuarioServicio: UsuarioServicioService,
              private CarritoServicio: CarritoServicioService) {

    this.cantidadPersonajes=this.CarritoServicio.getNumberOfPersonajes();
    this.usuario= new Usuario()

    this.UsuarioServicio.getUsuario(Number(localStorage.getItem('id'))).subscribe(data => {
      this.usuario= data;
    })

  }

  ngOnInit() {
    this.cantidadPersonajes=this.CarritoServicio.cantidad
    this.escucharCambiosCantidad();
    this.usuario.nombre = this.UsuarioServicio.nombreUsuario;
    this.escucharCambiosNombreUsuario();
  }


  escucharCambiosCantidad() {
    this.CarritoServicio
      .cambioCAntidadPersonajes
      .subscribe(
        (cantidad: number) => {
          this.cantidadPersonajes = cantidad;
        }
      )
  }

  escucharCambiosNombreUsuario() {
    this.UsuarioServicio
      .cambioNombreUsuario
      .subscribe(
        (nombreUsuario: string) => {
          this.usuario.nombre = nombreUsuario;
        }
      )
  }
}
