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


 mi_nombre:string = "";

 mi_marca:string = "";

 mi_color:string= "";

 mi_precio:number= 0;

 mi_stock:boolean=true;


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
anadirZapas(){

this.zapatillas.push(new Zapatilla(this.mi_nombre,this.mi_marca,this.mi_color,this.mi_precio,this.mi_stock));



}
}