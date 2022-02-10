import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html',
  styleUrls: ['./zapatillas.component.css']
})
export class ZapatillasComponent implements OnInit,OnDestroy,DoCheck {
public titulo:string="Componente de Zapatillas";
public zapatillas:Array<Zapatilla>; // CREAMOS EL ARRAY 
public marcas:Array<string>;




  constructor() {
    this.marcas = new Array;
    this.zapatillas = [new Zapatilla ("Jordar Air ","Nike","Azul",200,false),
                      new Zapatilla ("Reebok Classic ","Reebok","Verde",120,true),
                      new Zapatilla ("Adidas Supreme","Adidas","Blancas",150,true),
                      new Zapatilla ("Nike Air","Nike","Rojas",300,false)]
  }

  ngDoCheck(): void {
      
  }
  ngOnInit(): void {
   
   

  }
  ngOnDestroy(): void {
      
  }

getMarcas(){

this.zapatillas.forEach((zapatilla,index)=>{

if (this.marcas.indexOf(zapatilla.marca)<0){
  this.marcas.push(zapatilla.marca);
}

}
)
}

}