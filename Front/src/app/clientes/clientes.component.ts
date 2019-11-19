import { ClientesService } from './../Services/clientes.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  ListaClientes: any;

  constructor(private ClientesService: ClientesService) { }

  ngOnInit() {
    this.CarregaListaClientes();
  }

  public CarregaListaClientes()
  {
    console.log('Entrou');
    this.ClientesService.GetAll()
    .subscribe(Clientes => { this.ListaClientes = Clientes },
      error => { console.log(error) }
      )
console.log(this.ListaClientes);
      console.log('saiu');
  }

}
