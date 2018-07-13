import {Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {CasaComponent} from "./casa/casa.component";
import {PersonajeComponent} from "./personaje/personaje.component";
import {RutaPadreHijoComponent} from "./ruta-padre-hijo/ruta-padre-hijo.component";
import {CarritoComponent} from "./carrito/carrito.component";

export const RUTAS_APP: Routes = [

  {
    path: '',
    component: HomeComponent,
  },
  {
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

    ]

  },
  {
    path: 'personaje/:id',
    component: PersonajeComponent,
  },
  {
    path: 'carrito/personaje/:id',
    component: PersonajeComponent,
  },
  {
    path: 'carrito',
    component: CarritoComponent,
  },



]
