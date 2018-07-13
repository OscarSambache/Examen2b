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
    this.UsuarioServicio.getUsuario(3).subscribe(data => {
     // console.log(data);

      this.usuario=data
      this.idtext=this.usuario.id.toString();
   //   console.log(this.usuario);
      localStorage.setItem("id", this.idtext);
     // console.log('id',localStorage.getItem("id"))
    })

  }

  ngOnInit() {
    this.cantidadPersonajes=this.CarritoServicio.cantidad
    this.escucharCambiosCantidad();

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
}
