import { ActivatedRoute } from '@angular/router';
import { LocalizacaoService } from './../Services/localizacao.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-localizacao',
  templateUrl: './localizacao.component.html',
  styleUrls: ['./localizacao.component.css']
})
export class LocalizacaoComponent implements OnInit {


  ListaLocalizacao2: any = [];
  ListaLocalizacao: any;

  public idRequest: any 
  public sub: Subscription;

  constructor(private route: ActivatedRoute, private LocalizacaoService: LocalizacaoService) { 

    this.sub = this.route.params.subscribe(
      params => {
        this.idRequest = params['id'];
       // console.log('id de: ' + this.idRequest);
      });

  }

  ngOnInit() {

    console.log('id:' + this.idRequest);
    if(this.idRequest !== undefined)
    {
      console.log('1');
      this.CarregaListaClientesbyId(this.idRequest);
      this.ListaLocalizacao = this.ListaLocalizacao2;
    }
    else
    {
      console.log('2');
      this.CarregaListaClientes();
    }

  }

  public CarregaListaClientes()
  {
    console.log('Entrou');
    this.LocalizacaoService.GetAll()
    .subscribe(Clientes => { this.ListaLocalizacao = Clientes },
      error => { console.log(error) }
      )
console.log(this.ListaLocalizacao);
      console.log('saiu');
  }

  public CarregaListaClientesbyId(id: any )
  {
    console.log('Entrou');
    this.LocalizacaoService.GetAllbyId(id)
    .subscribe(Clientes => { this.ListaLocalizacao2.push(Clientes) },
      error => { console.log(error) }
      )
console.log(this.ListaLocalizacao);
      console.log('saiu');
  }

}
