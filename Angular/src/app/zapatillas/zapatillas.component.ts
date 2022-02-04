import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'zapatillas',
  templateUrl: './zapatillas.component.html',
  styleUrls: ['./zapatillas.component.css']
})
export class ZapatillasComponent implements OnInit,OnDestroy,DoCheck {
public titulo:string="Componente de Zapatillas";
  constructor() { }

  ngDoCheck(): void {
      
  }
  ngOnInit(): void {
      
  }
  ngOnDestroy(): void {
      
  }

}