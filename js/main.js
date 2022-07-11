'use strict'


let nombre = prompt("Por favor, Ingresa tú nombre"); 
let apellido = prompt("Por favor, Ingresa tú apellido"); 

let saludo = alert("Hola " +  nombre + " " + apellido + " " + "Bienvenido a Calculadora Básica Virtual");

   
   let opcion = parseInt(prompt( `Que operación deseas realizar :
   1. Suma 
   2. Resta 
   3. Multiplicación 
   4. División`));




 console.log(opcion);

 if(opcion === 1){

    //suma
    let num1 = parseInt(prompt("Ingresa el primer número"));
    
    while (num1 == null || /\D/.test(num1) || num1 == "") {
      num1 = prompt("Ingrese un número válido ");
   };

   let num2 = parseInt(prompt("ingresa el segundo número"));
   
   while (num2 == null || /\D/.test(num2) || num2 == "") {
      num2 = prompt("Ingrese un número válido ");
   };

   let resultado = num1+num2;
   console.log("resultado de la suma " + resultado); 
   alert("Tú resultado de suma es : " + resultado);

 }else if (opcion === 2){

   
    //resta
    let num1 = parseInt(prompt("Ingresa el primer número"));
    
    while (num1 == null || /\D/.test(num1) || num1 == "") {
      num1 = prompt("Ingrese un número válido ");
   };

   let num2 = parseInt(prompt("ingresa el segundo número"));
   
   while (num2 == null || /\D/.test(num2) || num2 == "") {
      num2 = prompt("Ingrese un número válido ");
   };

   let resultado = num1-num2;
   console.log("resultado de la resta " + resultado); 
   alert("Tú resultado de resta es : " + resultado);

 } else if (opcion ===3){

   //multiplicación
   let num1 = parseInt(prompt("Ingresa el primer número"));
   
   while (num1 == null || /\D/.test(num1) || num1 == "") {
     num1 = prompt("Ingrese un número válido ");
  };

  let num2 = parseInt(prompt("ingresa el segundo número"));
  
  while (num2 == null || /\D/.test(num2) || num2 == "") {
     num2 = prompt("Ingrese un número válido ");
  };

  let resultado = num1*num2;
  console.log("resultado de la multiplicación " + resultado); 
  alert("Tú resultado de multiplicación es : " + resultado);

} else if (opcion === 4){

   //División
   let num1 = parseInt(prompt("Ingresa el primer número"));
   
   while (num1 == null || /\D/.test(num1) || num1 == "") {
     num1 = prompt("Ingrese un número válido ");
  };

  let num2 = parseInt(prompt("ingresa el segundo número"));
  
  while (num2 == null || /\D/.test(num2) || num2 == "") {
     num2 = prompt("Ingrese un número válido ");
  };

  let resultado = num1/num2;
  console.log("resultado de la División " + resultado); 
  alert("Tú resultado de División es : " + resultado);


}
else{
   alert("no ingreso una opción válida ");
}


