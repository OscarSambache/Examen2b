import {EventEmitter, Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {Usuario} from "../Modelos/Usuario";

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
@Injectable()

export class UsuarioServicioService {
  private url: string = 'http://localhost:1337/Usuario';
  nombreUsuario = '';
  cambioNombreUsuario: EventEmitter<string> = new EventEmitter();

  constructor(private http: HttpClient) {

  }

  emitirCambioNombreUsuario(nombreUsuario: string) {
    this.nombreUsuario = nombreUsuario;
    this.cambioNombreUsuario.emit(nombreUsuario);
  }

  getUsuario(id: number): Observable<Usuario> {
    const url = `${this.url}/${id}`;
    return this.http.get<Usuario>(url);
  }

  updateUsuario(user: Usuario): Observable<Usuario> {
    const url = `${this.url}/${user.id}`;
    return this.http.put(url,user, httpOptions);
  }
}
