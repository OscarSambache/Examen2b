import { Component, OnInit } from '@angular/core';
import {CarritoServicioService} from "../Servicios/carrito-servicio.service";
import {Personaje} from "../Modelos/Personaje";
import {UsuarioServicioService} from "../Servicios/UsuarioServicio.service";
import {Usuario} from "../Modelos/Usuario";
import {$} from "protractor";
import {PersonajeServicioService} from "../Servicios/PersonajeServicio.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  arregloPersonajes: Personaje[];
  usuario: Usuario;
  usuarioActualizado: Usuario;
  arregloPrecios: number[]=[];
  total: number=0;



  constructor(private CarritoService: CarritoServicioService,
              private UsuarioService: UsuarioServicioService,
              private PersonajeServicio: PersonajeServicioService,
              private _router: Router) {
    this.arregloPersonajes= [];
    this.arregloPersonajes=this.CarritoService.getPersonajes();
    //console.log(this.arregloPersonajes);

    this.usuario= new Usuario();
    console.log('id',localStorage.getItem("id"))
    this.UsuarioService.getUsuario(Number(localStorage.getItem('id'))).subscribe(data => {

      this.usuario=data
      console.log(this.usuario)
    })

    this.arregloPersonajes.map(precio=>{
      this.arregloPrecios.push(precio.precioPersonaje)
    })

    if(this.arregloPersonajes.length==0){
      this.total=0;
    }
    else{
      this.total= this.arregloPrecios.reduce(function (a,b) {
        return a+b;
      });
    }

  }

  ngOnInit() {
  }

  eliminar(personaje: Personaje) {
    this.CarritoService.deletePersonaje(personaje);
    this.CarritoService.emitirCambioCantidad(this.CarritoService.getNumberOfPersonajes());

    this.arregloPersonajes.map(precio=>{
      this.arregloPrecios.push(precio.precioPersonaje)
    })

    this.total=this.total-personaje.precioPersonaje
    personaje.estadoPersonaje='disponible';
    this.PersonajeServicio.actualizarPersonaje(personaje)
  }

  actualizar(nombre: string, email: string, telefono: string, direccion: string){
    this.usuarioActualizado= new Usuario();
    this.usuarioActualizado.nombre=nombre;
    this.usuarioActualizado.email=email;
    this.usuarioActualizado.telefono=telefono;
    this.usuarioActualizado.direccion=direccion;
    this.usuarioActualizado.id=this.usuario.id;

    this.UsuarioService.updateUsuario(this.usuarioActualizado).subscribe(data => {
      this.usuario=data

    })

  }

  salir(){
    localStorage.removeItem('id');
    console.log('removdo ')

    const url = [''];
    this._router.navigate(url);
    this.UsuarioService.emitirCambioNombreUsuario('')
    this.CarritoService.emitirCambioCantidad(0);

  }

}
