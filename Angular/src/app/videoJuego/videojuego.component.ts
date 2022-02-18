import { COMPILER_OPTIONS, Component, DoCheck, OnDestroy, OnInit } from "@angular/core";
import { videoJuego } from '../models/videojuegos';
@Component ({

selector: "videojuego",
//SE DEBEN PONER COMILLAS INVERTIDAS PARA PONER CODIGO HTML
templateUrl: "./videojuego.component.html"





})
//PARA CREAR EL NOMBRE DE LA CLASE SE UTILIZA LA SINATXIS CAMEL CASE    
export class videojuegoComponent implements OnInit,DoCheck, OnDestroy{
public titulo:string;
public listado:string;

public arrayVideojuego:Array<videoJuego>;
mi_nombre:string="";
mi_compania:string="";
mi_precio:number=0;
mi_online:boolean=true;
mi_stock:boolean=true;
  constructor() {
    this.titulo = "Componente de videojuegos"
    this.listado = "Listado de los videojuegos más populares de la actualidad"
    this.arrayVideojuego=[];
  }
  ngDoCheck(): void {
      
  }
  ngOnInit(): void {
      
  }
  ngOnDestroy(): void {
      
  }
  cambiarTitulo(){
    this.titulo="Nuevo Componente de videojuego";
  }
anadirVideojuego(){
  this.arrayVideojuego.push(new videoJuego(this.mi_nombre,this.mi_compania,this.mi_precio,this.mi_online,this.mi_stock));
}


}