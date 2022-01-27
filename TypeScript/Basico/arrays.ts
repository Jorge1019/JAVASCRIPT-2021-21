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







document.body.innerHTML=cadena;