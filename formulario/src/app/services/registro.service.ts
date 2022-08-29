import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment.prod';
import { Registro } from '../models/registro';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private URL = environment.apiUrl + 'registros/';

  constructor( private http: HttpClient) { }

  getRegistros(): Observable<any> {
    return this.http.get(this.URL);
  }

  guardarRegistro(registro: Registro) : Observable<any>{
    return this.http.post(this.URL, registro);
  }

  postImagen(imagen: any): Observable<any> {
    return this.http.post(this.URL + '/imagen', imagen);
  }
}
