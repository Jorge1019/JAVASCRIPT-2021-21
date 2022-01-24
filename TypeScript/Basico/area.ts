function area(shape: string, width:number, height:number){


    var area=width*height;

    return "<h1>Soy un "+shape+" con un área de "+area+" cm cuadrados</h1>";


}
document.body.innerHTML = area("Rectángulo",30,15);