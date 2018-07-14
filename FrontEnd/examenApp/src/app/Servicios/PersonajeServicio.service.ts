import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {Personaje} from "../Modelos/Personaje";


const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
@Injectable()

export class PersonajeServicioService {

  private url: string = 'http://localhost:1337/Personaje';
  private arregloPersonajes: Personaje[]=[];
  personaje: Personaje;

  constructor(private http: HttpClient) {
  }


  getPersonajes(): Observable<Personaje[]> {
    return this.http.get<Personaje[]>(this.url)
  }


  getPersonaje(id: number): Observable<Personaje> {
    const url = `${this.url}/${id}`;
    return this.http.get<Personaje>(url);
  }

  getPersonajeOrigen(origen: string): Observable<Personaje[]> {
    const url2= "?origenPersonaje="+origen;
    console.log(url2)
    const url = `${this.url}/${url2}`;
    console.log(url)
    return this.http.get<Personaje[]>(url);
  }

  updatePersonaje(personaje: Personaje): Observable<Personaje> {
    const url = `${this.url}/${personaje.id}`;
    return this.http.put(url,personaje.estadoPersonaje, httpOptions);
  }

  obtenerArregloPersonaje(){
    this.getPersonajes().subscribe(data=>{
      this.arregloPersonajes=data;
    })
  }

   getPersonajeDeArreglo(id: number): Personaje {
    return this.arregloPersonajes.find(o => o.id === id);
  }
  actualizarPersonaje(personaje: Personaje){
    this.personaje=new Personaje();
    this.arregloPersonajes.find(o => o.id == personaje.id ).estadoPersonaje=personaje.estadoPersonaje;
  }

}
