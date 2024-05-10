let nota1 = parseInt(prompt("ingrese la nota del PRIMER trimestre"))
let nota2 = parseInt(prompt("ingrese la nota del SEGUNDO trimestre"))
let nota3 = parseInt(prompt("ingrese la nota del TERCER trimestre"))
let promedio = (nota1+nota2+nota3)/3

// if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3)){
//   console.log("Ingrese un valor válido")
// } 
// else {
//   switch (true){
//     case 1 || 2 || 3:
//       console.log(promedio)
//       console.log("Nota insuficiente")
//       break;
//     case 4 || 5:
//       console.log(promedio)
//       console.log("Nota regular")
//       break;
//     case 6 || 7:
//       console.log(promedio)
//       console.log("Nota buena")
//       break;
//       case 8 || 9:
//         console.log(promedio)
//       console.log("Nota muy buena")
//       break;
//       case 10:
//         console.log(promedio)
//       console.log("Nota sobresaliente")
//       break;
//   default:
//     console.l0og(promedio)
//     console.log("No se pudo calcular el promedio")
//   }
// }


switch (true){
  case isNaN(nota1) || isNaN(nota2) || isNaN(nota3):
    console.log("Ingrese un valor válido")
    break;
  case promedio >= 1 && promedio <=3 :
    console.log(promedio)
    console.log("Nota insuficiente")
    break;
  case promedio >3 && promedio <=5:
    console.log(promedio)
    console.log("Nota regular")
    break;
  case promedio >=6 && promedio <=7:
    console.log(promedio)
    console.log("Nota Buena")
    break;
  case promedio >=8 && promedio <= 9:
    console.log(promedio)
    console.log("Nota muy buena")
    break;
  case promedio === 10:
    console.log(promedio)
    console.log("Nota sobresaliente")
    break;
  default:
    console.log('default');
    break;
}
