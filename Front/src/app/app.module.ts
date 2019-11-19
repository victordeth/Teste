import { ClientesService } from './Services/clientes.service';
import { GlobalService } from './Services/global.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientesComponent } from './clientes/clientes.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AddClienteComponent } from './add-cliente/add-cliente.component';
import { LocalizacaoService } from './Services/localizacao.service';
import { EditClienteComponent } from './edit-cliente/edit-cliente.component';
import { LocalizacaoComponent } from './localizacao/localizacao.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    HomeComponent,
    AddClienteComponent,
    EditClienteComponent,
    LocalizacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    GlobalService,
    ClientesService,
    LocalizacaoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
