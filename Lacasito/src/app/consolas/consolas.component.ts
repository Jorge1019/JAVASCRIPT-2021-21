import { Component, OnInit } from '@angular/core';
import { Consolas } from 'src/models/consolas';
@Component({
  selector: 'consolas',
  templateUrl: './consolas.component.html',
  
})
export class ConsolasComponent implements OnInit {

public listaConsolas:Array<Consolas>;

public mi_nombre:string="";
public mi_marca:string="";
public mi_precio:number=0;
public mi_stock:boolean=true;

  constructor() {
    this.listaConsolas=[];
    this.listaConsolas.push(new Consolas ("PlayStation 5","Sony",500,false) );

    this.listaConsolas.push(new Consolas ("Xbox Series X","Microsoft",400,true) );

    this.listaConsolas.push(new Consolas ("Nintendo Switch","Nintendo",300,true) );
   }

  ngOnInit(): void {
  }

anadirConsola(){

this.listaConsolas.push(new Consolas(this.mi_nombre,this.mi_marca,this.mi_precio,this.mi_stock));


this.mi_nombre=""
this.mi_marca=""
this.mi_precio=0
this.mi_stock=true


}






}
