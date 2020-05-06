import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { HomeComponent } from './componentes/home/home.component';


const routes: Routes = [   
  {path: '', component: BienvenidaComponent},
  {path: 'home', component: HomeComponent},

];
  
  
  @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
