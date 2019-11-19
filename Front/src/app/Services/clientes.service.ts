import { Clientes } from './../Model/Clientes';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { DataReturn } from './../model/Clientes';
import { GlobalService } from './global.service';

var httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
var global: GlobalService;


@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient, public _global: GlobalService, private httpClient: HttpClient) {
    global = _global;
   }

  GetAll(): Observable<DataReturn<Clientes[]>>{
   
    return this.http
    .get<DataReturn<Clientes[]>>(global.UrlService + "clientes", httpOptions)
    .pipe(
      tap(userx => this.log('Obter todos os clientes', userx.data)) ,
      catchError(this.handleError.bind(this))
    );
  }

  GetById(id: number): Observable<DataReturn<Clientes[]>>{
   
    return this.http
    .get<DataReturn<Clientes[]>>(global.UrlService + "clientes/" + id, httpOptions)
    .pipe(
      tap(userx => this.log('Obter o cliente ' + id, userx.data)) ,
      catchError(this.handleError)
    );
  }


  
  AddCliente(cliente: Clientes): Observable<DataReturn<Clientes>> {

    return this.http
        .post<DataReturn<Clientes>>(global.UrlService + "clientes", cliente, httpOptions)
        .pipe(
            tap((log: DataReturn<Clientes>) => //this.log('adicionado Log com Sucesso'),
            catchError(this.handleError))
        );
  }

  updateCliente(id: any, cliente: Clientes): Observable<DataReturn<Clientes>> {

    return this.http
        .put<DataReturn<Clientes>>(global.UrlService + "clientes/" + id, cliente, httpOptions)
        .pipe(
            tap((log: DataReturn<Clientes>) => //this.log('adicionado Log com Sucesso'),
            catchError(this.handleError))
        );
  }

  DeleteCliente(id: any): Observable<DataReturn<Clientes>> {

    return this.http
        .delete<DataReturn<Clientes>>(global.UrlService + "clientes/" + id, httpOptions)
        .pipe(
            tap((log: DataReturn<Clientes>) => //this.log('adicionado Log com Sucesso'),
            catchError(this.handleError))
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
