import { Component } from '@angular/core';
import { Configuracion } from './models/configuracion';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ANGULAR';
  texto="Bonitos dias"
  public descripcion ="";
public mostrar_videojuegos:boolean=true;//creamos una variable publica para poder visualizar y ocultar el componente
public mostrar_zapatillas:boolean=true;
public config:any;

  constructor() {

    this.config = Configuracion;
    this.title=Configuracion.titulo;
    this.descripcion=Configuracion.descripcion;

  }

//creamos un metodo para poder crear y destruir el componente videojuegos
ocultarVideojuegos(valor:boolean){
this.mostrar_videojuegos=valor;



}
ocultarZapatillas(valor2:boolean){
  this.mostrar_zapatillas=valor2;
  
  }

  }
