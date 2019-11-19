import { Clientes } from './../Model/Clientes';
import { ClientesService } from './../Services/clientes.service';
import { FormBuilder, Validators } from '@angular/forms';
import { LocalizacaoService } from './../Services/localizacao.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';




@Component({
  selector: 'app-edit-cliente',
  templateUrl: './edit-cliente.component.html',
  styleUrls: ['./edit-cliente.component.css']
})
export class EditClienteComponent implements OnInit {

  listalocalizacao: any;
  public FindCliente: any;
  angFormCliente: any;
  xxx: any;

  public idRequest: any 
  public sub: Subscription;


  constructor(private route: ActivatedRoute, private router: Router, private LocalizacaoService: LocalizacaoService,  private fb: FormBuilder, private ClientesService: ClientesService ) {
   
    this.sub = this.route.params.subscribe(
      params => {
        this.idRequest = params['id'];
       // console.log('id de: ' + this.idRequest);
      });

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

    this.CarregaCliente(this.idRequest);



  }

  public CarregaCliente(id:any)
  {

    console.log("Localizando o cliente " + id);
    this.ClientesService.GetById(id)
    .subscribe(
      xxx => { this.xxx = xxx
        console.log(xxx.data)
        console.log('aqui');
      console.log(this.xxx)
      }
    ,
      error => {  
      console.log('erro gerado: ' + error)
      }
    )
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

  
  _cliente: Clientes;
  public EditCliente(nome: string, documento: string, cidade: string, endereco: string, complemento: string, idlocalizacao: string)
  {
      this._cliente = new Clientes();
      this._cliente.id = this.idRequest;
      this._cliente.Nome = nome;
      this._cliente.Documento = documento;
      this._cliente.Endereco = endereco;
      this._cliente.Cidade = cidade;
      this._cliente.Complemento = complemento;
      this._cliente.idLocalizacao = idlocalizacao;

      this.ClientesService.updateCliente(this.idRequest, this._cliente)
        .subscribe(
          result => { console.log('editou' + result)
          this.router.navigate(['/clientes']);},
          error => {
            console.log(error);
          });

          
  }

  public ExcluirCliente()
  {
    this.ClientesService.DeleteCliente(this.idRequest)
    .subscribe(
      result => { console.log('excluiu' + result)
      this.router.navigate(['/clientes']);},
      error => {
        console.log(error);
      });
  }

  public CancelarAcao()
  {
    this.router.navigate(['/clientes']);
  }

}
