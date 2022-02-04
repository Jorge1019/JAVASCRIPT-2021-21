import { COMPILER_OPTIONS, Component, DoCheck, OnDestroy, OnInit } from "@angular/core";

@Component ({

selector: "videojuego",
//SE DEBEN PONER COMILLAS INVERTIDAS PARA PONER CODIGO HTML
templateUrl: "./videojuego.component.html"





})
//PARA CREAR EL NOMBRE DE LA CLASE SE UTILIZA LA SINATXIS CAMEL CASE    
export class videojuegoComponent implements OnInit,DoCheck, OnDestroy{
public titulo:string;
public listado:string;

  constructor() {
    this.titulo = "Componente de videojuegos"
    this.listado = "Listado de los videojuegos más populares de la actualidad"
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

}