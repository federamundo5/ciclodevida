import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { App2Component } from './app2/app2.component';
import {FormsModule } from '@angular/forms';
import { LoginComponent } from './componentes/login/login.component';
import { ErrorComponent } from './componentes/error/error.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { HomeComponent } from './componentes/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    App2Component,
    LoginComponent,
    ErrorComponent,
    BienvenidaComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
