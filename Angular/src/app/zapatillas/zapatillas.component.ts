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





  constructor() {
  
    this.zapatillas = [new Zapatilla ("Jordar Air ","Nike","Azul",200,false)],
                      [new Zapatilla ("Reebok Classic ","Reebok","Verde",120,true)],
                      [new Zapatilla ("Adidas Supreme","Adidas","Blancas",150,true)]
  }

  ngDoCheck(): void {
      
  }
  ngOnInit(): void {
      
  }
  ngOnDestroy(): void {
      
  }

}