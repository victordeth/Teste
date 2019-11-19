import { Router } from '@angular/router';
import { ClientesService } from './../Services/clientes.service';
import { Clientes } from './../Model/Clientes';
import { LocalizacaoService } from './../Services/localizacao.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';



@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.css']
})
export class AddClienteComponent implements OnInit {

  listalocalizacao: any;

  angFormCliente: any

  constructor(private router: Router, private LocalizacaoService: LocalizacaoService,  private fb: FormBuilder, private ClientesService: ClientesService) { 
    this.createForm();
  }

  createForm() {
  
    this.angFormCliente = this.fb.group({
      nome:  ['', Validators.required ],
      documento: ['', Validators.required ],
      cidade : ['', Validators.required ],
      endereco : ['', Validators.required ],
      complemento : ['', Validators.required ],
      idlocalizacao : ['', Validators.required ]
    });


  }


  ngOnInit() {

    this.CarregaListaLocalizacao();
  }

  _cliente: Clientes;
  public addCliente(nome: string, documento: string, cidade: string, endereco: string, complemento: string, idlocalizacao: string)
  {
      this._cliente = new Clientes();
      this._cliente.id = "4"; //incrementar o total + 1 
      this._cliente.Nome = nome;
      this._cliente.Documento = documento;
      this._cliente.Endereco = endereco;
      this._cliente.Cidade = cidade;
      this._cliente.Complemento = complemento;
      this._cliente.idLocalizacao = idlocalizacao;

      this.ClientesService.AddCliente(this._cliente)
        .subscribe(
          result => { console.log('Gravou' + result)
          this.router.navigate(['/clientes']);},
          error => {
            console.log(error);
          });

          
  }

  public CarregaListaLocalizacao()
  {
    console.log('Entrou');
    this.LocalizacaoService.GetAll()
    .subscribe(localizacao => { this.listalocalizacao = localizacao },
      error => { console.log(error) }
      )
      console.log(this.listalocalizacao);
      console.log('saiu');
  }

  public CancelarAcao()
  {
    this.router.navigate(['/clientes']);
  }

}
