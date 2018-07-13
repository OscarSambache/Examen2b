import {Component, Input, OnInit} from '@angular/core';
import {Casa} from "../Modelos/Casa";

@Component({
  selector: 'app-casa-componente',
  templateUrl: './casa-componente.component.html',
  styleUrls: ['./casa-componente.component.css']
})
export class CasaComponenteComponent implements OnInit {

  @Input() casa: Casa;


  constructor() { }

  ngOnInit() {
  }

}
