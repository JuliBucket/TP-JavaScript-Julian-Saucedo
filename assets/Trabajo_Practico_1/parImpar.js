let numero = parseInt(prompt("ingrese un numero"))

if(!isNaN(numero)){
  if (numero%2 === 0){
    console.log(numero + " es numero par")
  } else{
    console.log(numero + " es numero impar")
  }
} else{
  console.log("ingrese un valor numerico")
}