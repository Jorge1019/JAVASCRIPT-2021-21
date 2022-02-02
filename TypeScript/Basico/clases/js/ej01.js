var Camisetas = /** @class */ (function () {
    function Camisetas(color, modelo, marca, talla, precio) {
        // métodos del constructor
        this.setColor(color);
        this.setModelo(modelo);
        this.setMarca(marca);
        this.setTalla(talla);
        this.setPrecio(precio);
    }
    //CREAR SETTER Y GETTeR
    Camisetas.prototype.setColor = function (x) {
        this.color = x;
    };
    Camisetas.prototype.getColor = function () {
        return this.color;
    };
    Camisetas.prototype.setModelo = function (x) {
        this.modelo = x;
    };
    Camisetas.prototype.getModelo = function () {
        return this.modelo;
    };
    Camisetas.prototype.setMarca = function (x) {
        this.marca = x;
    };
    Camisetas.prototype.getMarca = function () {
        return this.marca;
    };
    Camisetas.prototype.setTalla = function (x) {
        this.talla = x;
    };
    Camisetas.prototype.getTalla = function () {
        return this.talla;
    };
    Camisetas.prototype.setPrecio = function (x) {
        this.precio = x;
    };
    Camisetas.prototype.getPrecio = function () {
        return this.precio;
    };
    return Camisetas;
}());
