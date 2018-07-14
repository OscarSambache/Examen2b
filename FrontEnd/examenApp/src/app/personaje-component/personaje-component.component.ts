import { Component, OnInit , Input} from '@angular/core';
import {Personaje} from "../Modelos/Personaje";
import {Router} from "@angular/router";

@Component({
  selector: 'app-personaje-component',
  templateUrl: './personaje-component.component.html',
  styleUrls: ['./personaje-component.component.css']
})
export class PersonajeComponentComponent implements OnInit {

  @Input() personaje: Personaje;
  constructor(private _router: Router,) { }

  ngOnInit() {
  }

  ir(){
    const url = ['personaje/',this.personaje.id];
    this._router.navigate(url);
  }

}
