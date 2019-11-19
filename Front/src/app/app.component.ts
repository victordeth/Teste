import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontTeste';

  angForm: any;


  constructor(private router: Router, private fb: FormBuilder){
    this.createForm(); 

  }

  createForm() {
    this.angForm = this.fb.group({
      palavra_chave: ['', Validators.required ]
    });
  }

public LocalizarPais(id: string)
{
  console.log('tentar achar pais pelo id : ' + id );

  // if(Apelido.includes("*"))
  // {
  //   let key = 'EspecialName';
  //   localStorage.setItem(key, Apelido.split("*").join("-%-"));
  //}

  window.location.href = "/localizacao/" + id;
}


ngOnInit() {

  

}




}
