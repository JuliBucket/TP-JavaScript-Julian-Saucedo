let edad = prompt("ingrese su edad")

if(isNaN(edad)){
  console.log("ingrese un valor valido")
} else if (edad >= 0 && edad <= 12){
  console.log("usted es considerado niño")
} else if (edad >= 13 && edad <= 19){
  console.log("usted es considerado adolescente")
} else if (edad >= 20 && edad <= 59){
  console.log("usted es considerado adulto")
} else if (edad >= 60 && edad <= 125){
  console.log("usted es considerado adulto mayor")
} else{
  console.log("Ingrese un valor mayor a 0 y menor a 125")
}