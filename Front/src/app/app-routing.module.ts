import { LocalizacaoComponent } from './localizacao/localizacao.component';
import { EditClienteComponent } from './edit-cliente/edit-cliente.component';
import { AddClienteComponent } from './add-cliente/add-cliente.component';
import { HomeComponent } from './home/home.component';
import { ClientesComponent } from './clientes/clientes.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path:'' , component: HomeComponent},
  {path: 'clientes', component: ClientesComponent},
  { path:'home' , component: HomeComponent},
  { path:'add-cliente' , component: AddClienteComponent},
  { path:'cliente/:id', component:EditClienteComponent},
  {path: 'localizacao', component: LocalizacaoComponent},
  {path: 'localizacao/:id', component: LocalizacaoComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
