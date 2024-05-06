let numero1 = parseFloat(prompt('ingrese un numero'));
let numero2 = parseFloat(prompt('otro un numero'));
let numero3 = parseFloat(prompt('un ultimo numero'));
let numeros = [numero1, numero2, numero3];

if(isNaN(numero1) || isNaN(numero2) || isNaN(numero3))
  { console.log("Ingrese valores numericos")}
else{
numeros.sort(function(a, b) {
  return a - b;
})
console.log(numeros)
}

