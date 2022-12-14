import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MaterialcursosService {

  urlBase: string = "https://peaapi-production.up.railway.app/api/"

  constructor(private http: HttpClient) { }

  getMaterialCurso(id:number)
  {
    return this.http.get(this.urlBase+'materialcursos/'+id)
  }

}
