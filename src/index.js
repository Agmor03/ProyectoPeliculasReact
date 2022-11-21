import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//NO OLVIDAR ESTA LINEA QUE SINO NO FUNCIONA
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

//const elemento = <h1>Hola Mundo!!!</h1>;

//--Componente de clase--
//class Mensaje extends React.Component{
//  render(){
//    return <h1>Hola Mundo!! Soy {this.props.nombre}</h1> // elemento JSX
//  }
//}

root.render(
    //<React.StrictMode>
    <App></App>
    //</React.StrictMode>
    //elemento
    //<Mensaje nombre="TOMATO :D"></Mensaje>
);

console.log("Wenas, como estamos?");
var numero; //definido
numero = 5.5; //inicializado
var otronumero = 9.3; //definido e inicializado variable
var resultado = numero + otronumero;
console.log("el resultado de la suma es: " + resultado);
//si se trata de poner una cadena de caracteres antes de resolver la suma los numeros se concatenan
//por lo que hacer esto: console.log("el resultado de la suma es: " + numero + otronumero);
//daria por resultado "59"

console.log("------separacion porque no quiero borrar xd----")
var numero = 5.5;
var otronumero = 9.3;
var resultado = numero / otronumero;
console.log("el resultado de la divicion es: " + resultado);

console.log("------separacion porque no quiero borrar xd----")
var numero = 15;
var otronumero = 7;
var resultado = numero % otronumero;
console.log("el resto/modulo es: " + resultado);

console.log("------separacion porque no quiero borrar xd----")
var numero = 15;
var otronumero = 9;
console.log(numero > otronumero);
console.log("primer numero: " + numero);
console.log("segundo numero: " + otronumero);
if (numero < otronumero) {
    console.log("el primer numero es menor")
} else {
    console.log("el segundo numero es menor")
}

console.log("------separacion porque quiero separarlo xd----")
var vocales = ["a", "e", "i", "o", "u"];
console.log("el tamaño del arreglo es: " + vocales.length);

console.log("------separacion para no perderme OuO----")
function sumar() {
    var a = 12;
    var b = 8;
    var suma = a + b;
    console.log("resultado de a + b = " + suma);
}
sumar(); //siempre hay que llamar a la funcion sino no se visualizara
//console.log(a); //marca error ya que "a" se encuentra dentro del ambito de la funcion y no puede ser llamado afuera de este

console.log("------separacion porque no quiero borrar xd----")
//funcion parametrizada (lo escribo para no olvidarme pipipi)
function sumar2(c, d) {
    var suma = c + d;
    console.log("resultado de c + d = " + suma);
}
sumar2(60, 40);

console.log("ESO ES TODO POR AHORA :D")

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
