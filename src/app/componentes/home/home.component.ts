import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  expression = false;
lista = [{name:"Matias", perfil: 1}, {name:"Pepe", perfil:3}]
  constructor() { }

  ngOnInit(): void {
  }

}
