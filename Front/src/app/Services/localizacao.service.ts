import { Localizacao } from './../Model/Localizacao';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { DataReturn } from './../Model/Localizacao';
import { GlobalService } from './global.service';


var httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
var global: GlobalService;



@Injectable({
  providedIn: 'root'
})
export class LocalizacaoService {

  constructor(private http: HttpClient, public _global: GlobalService, private httpClient: HttpClient) {
    global = _global;
   }

  GetAll(): Observable<DataReturn<Localizacao[]>>{
   
    return this.http
    .get<DataReturn<Localizacao[]>>(global.UrlService + "localizacao", httpOptions)
    .pipe(
      tap(localrx => this.log('Obter todas as localizacao', localrx.data)) ,
      catchError(this.handleError.bind(this))
    );

    
  }

  GetAllbyId(id: any): Observable<DataReturn<Localizacao[]>>{
   
    return this.http
    .get<DataReturn<Localizacao[]>>(global.UrlService + "localizacao/" + id, httpOptions)
    .pipe(
      tap(localrx => this.log('Obter todas as localizacao', localrx.data)) ,
      catchError(this.handleError.bind(this))
    );

    
  }

  private log(message: string, teste : any)
  {
    console.log(message);
    console.log(teste);
  }

  private handleError(error: HttpErrorResponse) {
    let erro = error.message || 'Server error';
    console.error('Ocorreu um erro miseravel', error);

    return Observable.throw(erro);
}

}
