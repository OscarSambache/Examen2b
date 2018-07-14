import { Component, OnInit } from '@angular/core';
import {Usuario} from "../Modelos/Usuario";
import {UsuarioServicioService} from "../Servicios/UsuarioServicio.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  usuario: Usuario
  constructor(private UsuarioService: UsuarioServicioService,
              private ruta: Router) { }

  ngOnInit() {
  }

  ingresar(id: number){
    this.usuario= new Usuario();
    this.UsuarioService.getUsuario(id).subscribe(data=>{
      this.usuario=data
      var idtext=this.usuario.id.toString();
      localStorage.setItem("id", idtext);
      const url = ['home'];
      this.ruta.navigate(url);
      this.UsuarioService.emitirCambioNombreUsuario(this.usuario.nombre)
    })






  }
}
