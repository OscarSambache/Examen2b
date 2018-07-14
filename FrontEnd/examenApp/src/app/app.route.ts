import {Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {CasaComponent} from "./casa/casa.component";
import {PersonajeComponent} from "./personaje/personaje.component";
import {RutaPadreHijoComponent} from "./ruta-padre-hijo/ruta-padre-hijo.component";
import {CarritoComponent} from "./carrito/carrito.component";
import {AppComponent} from "./app.component";
import {InicioComponent} from "./inicio/inicio.component";
import {LoginGuard} from "./login.guard";

export const RUTAS_APP: Routes = [

  {
    path: 'home',
    component: HomeComponent,
    canActivate: [LoginGuard],
  },

  {
    path: '',
    component: InicioComponent
  },{
    path: 'casa/:id',
    component: RutaPadreHijoComponent,
    children: [
      {
        path: '',
        component: CasaComponent,
      },
      {
        path: 'personaje/:id',
        component: PersonajeComponent,
      },

    ],
    canActivate: [LoginGuard],

  },
  {
    path: 'personaje/:id',
    component: PersonajeComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'carrito/personaje/:id',
    component: PersonajeComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'carrito',
    component: CarritoComponent,
    canActivate: [LoginGuard],
  },



]
