class Camisetas{
//COLOR CADENA DE CARACTERES
private color:string;
//MODELO CADENA DE CARACTERES
private modelo:string;
//MARCA CADENA DE CARACTERES
private marca:string;

//TALLA CADENA DE CARACTERES 
private talla:string;

//PRECIO NUMERICO
private precio:number;

  constructor(
    color: string, 
    modelo: string, 
    marca: string, 
    talla: string, 
    precio: number
) {
    this.color = color
    this.modelo = modelo
    this.marca = marca
    this.talla = talla
    this.precio = precio
  }


//CREAR SETTER Y GETTeR
public setColor(x: string): void {
    this.color = x;
}
public getColor() {
    return this.color;
}
public setModelo(x: string): void {
    this.modelo = x;
}
public getModelo() {
    return this.modelo;
}
public setMarca(x: string): void {
    this.marca = x;
}
public getMarca() {
    return this.marca;
}
public setTalla(x: string): void {
    this.talla = x;
}
public getTalla() {
    return this.talla;
}
public setPrecio(x: number): void {
    this.precio = x;
}
public getPrecio() {
    return this.precio;
}
}