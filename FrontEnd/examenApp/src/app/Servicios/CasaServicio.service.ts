import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Casa} from "../Modelos/Casa";
import {Observable} from "rxjs/internal/Observable";


const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
@Injectable()
export class CasaServicioService {


  private url: string = 'http://localhost:1337/Casa';

  constructor(private http: HttpClient) {
  }


  getCasa(id: number): Observable<Casa> {
    const url = `${this.url}/${id}`;
    return this.http.get<Casa>(url);
  }



  getCasaporRegion(region: string): Observable<Casa[]> {
    const url2= "?regionCasa="+region;
    console.log(url2)
    const url = `${this.url}/${url2}`;
    console.log(url)
    return this.http.get<Casa[]>(url);
  }

}





