let cantProd = parseInt(prompt("Ingrese cantidad de productos"))
let precioProd = parseInt(prompt("ingrese el precio del productos"))
let total = precioProd * cantProd

if (isNaN(cantProd) || isNaN(precioProd)){
  console.log("Ingrese valores numericos")
} else if(cantProd > 10 && total >= 20000){
  let descuento = total * 0.85
  console.log("tiene precio con descuento del 15%")
  console.log("Precio inicial "+total)
  console.log("Precio final " + descuento)
} else if(total < 20000 && total > 0) {
  console.log("No cumple los requisitos para el descuento")
  console.log("cantidad de productos "+ cantProd)
  console.log("precio total "+ total)
} else {
  console.log("ingrese valores mayores a 0")
}