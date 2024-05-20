let task = []

function agregar(element){
  if(element){

  }
}

function eliminar(element){
    for (let i=0; i<task.length; i++){
        console.log(task[i])
        if(task[i]===element){
            task.splice(i,1)  
        }
    }
}
//prompt = Tuculo Tuculo == ' '
function editar(posicion, element){{
    task.splice(posicion, 1, element)
  }
}

function lista(){
    console.log(task)
}

let opcion
while (opcion != 0){
opcion = parseInt(prompt('Ingrese una operacion\n1-Agregar una materia\n2-Eliminar materia\n3-Editar materia\n4-Lista de materias\n0-salir'))
  switch(opcion){
    case 1:
        agregar (prompt('Ingrese el nombre de la tarea que desea añadir'))
      break;
    case 2:
      eliminar(prompt(`ingrese la tarea a eliminar\n${task}`))
      break;
    case 3:
      editar(prompt(`ingrese la tarea que desea editar\n${task}`), prompt(`Ingrese el valor que quiere colocar`))
      break;
    case 4:
      alert((`La lista tareas es:\n${task}`))
      break;
      default:
        alert('Ingrese una opción válida.')
  }
}