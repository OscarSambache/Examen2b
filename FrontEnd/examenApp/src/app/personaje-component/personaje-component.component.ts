import { Component, OnInit , Input} from '@angular/core';
import {Personaje} from "../Modelos/Personaje";

@Component({
  selector: 'app-personaje-component',
  templateUrl: './personaje-component.component.html',
  styleUrls: ['./personaje-component.component.css']
})
export class PersonajeComponentComponent implements OnInit {

  @Input() personaje: Personaje;
  constructor() { }

  ngOnInit() {
  }

}
