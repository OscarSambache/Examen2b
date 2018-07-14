import {Component, Input, OnInit} from '@angular/core';
import {Casa} from "../Modelos/Casa";
import {Router} from "@angular/router";

@Component({
  selector: 'app-casa-componente',
  templateUrl: './casa-componente.component.html',
  styleUrls: ['./casa-componente.component.css']
})
export class CasaComponenteComponent implements OnInit {

  @Input() casa: Casa;


  constructor(private _router: Router,) { }

  ngOnInit() {
  }

  ir(){
    const url = ['casa/',this.casa.id];
    this._router.navigate(url);
  }

}
