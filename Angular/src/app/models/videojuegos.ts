import { ThisReceiver } from "@angular/compiler"
export class videoJuego{
  nombre:string="";
  compania:string="";
  precio:number=0;
  online:boolean=true;
  stock:boolean=true;





  constructor(
    nombre: string, 
    compania: string, 
    precio: number, 
    online: boolean, 
    stock: boolean
) {
    this.nombre = nombre
    this.compania = compania
    this.precio = precio
    this.online = online
    this.stock = stock
  }
  
}