let frutas=["manzanas","peras","fresas"]
let nuevalong=frutas.unshift("moras")
let posicion=frutas.indexOf("fresas")
console.log(posicion)
let copia=frutas.slice();
console.log(copia)
console.log(frutas.join())
function square(number){
    return number*number
}
console.log(square(4));

function saludar(nombre, edad){
    alert("hola mi nombre es "+ nombre + " y tengo "+ edad + " años")
}
saludar("jairo",19);
function valores(a,b,c){
    return (a*b*c)/2
}
var suma=valores(1,2,3)
console.log(valores(1,2,3))
console.log(suma)
var x=function(a,b){
    return a+b
}
var suma=x(1,2)
console.log(suma)
console.log(x(1,2))
function Paises() {
    var result = ''; 
    var i;
    for (i = 0; i < arguments.length; i++) {
       result += arguments[i] + "-";
    }
    return result;
 }
 alert(Paises('Bolivia', 'Ecuador', 'Francia', 'Brasil'));
 
function v(){
    alert(arguments.length)
}
v("12","sdjasjd","dfjdjfdjf","jsdjsdf")
var producto={
    //atributos
    codigo: 5,
    nombre: "Manzana",
    precio: 3500,
    //metodos
    incremento: function (valor){
        this.precio+=valor
    }
}
this.producto.incremento(500);
alert(this.producto.precio);

