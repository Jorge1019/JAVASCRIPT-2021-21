let lista1:number[]=[1,2,3,4];

let lista2: Array<String>=["Hola","Que","Tal"];

let cadena:string="";

cadena="Lista de numeros " + lista1+ "<br>Lista de String "+lista2;



//ENUMERACION

enum Animals {cat,lince,dog,shark};

let c:Animals = Animals.cat;

cadena+="<br>c 0 "+c+"<br> Animals[3]= "+Animals[3];
//EL INDICE
cadena += "<br> Animals.shark "+ Animals.shark;

//VARAIBLE QUE SE LE PUEDEN ASIGNAR DOS TIPOS DE DATOS
let mivar:string | number = "Cadena";
mivar=34;
//Esto da error --> mivar=true;

//TIPOS DE DATOS PERSONALIZADOS

type letrasYnumeros = string | number;
let numeros:letrasYnumeros=23;
let letras:letrasYnumeros="Jorge"; 


document.body.innerHTML=cadena;