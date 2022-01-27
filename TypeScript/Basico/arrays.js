var lista1 = [1, 2, 3, 4];
var lista2 = ["Hola", "Que", "Tal"];
var cadena = "";
cadena = "Lista de numeros " + lista1 + "<br>Lista de String " + lista2;
//ENUMERACION
var Animals;
(function (Animals) {
    Animals[Animals["cat"] = 0] = "cat";
    Animals[Animals["lince"] = 1] = "lince";
    Animals[Animals["dog"] = 2] = "dog";
    Animals[Animals["shark"] = 3] = "shark";
})(Animals || (Animals = {}));
;
var c = Animals.cat;
cadena += "<br>c 0 " + c + "<br> Animals[3]= " + Animals[3];
//EL INDICE
cadena += "<br> Animals.shark " + Animals.shark;
document.body.innerHTML = cadena;
