let task = []
const regex = /^\S(.*\S)?$/;

function agregar(element){
  if(regex.test(element)){
    task.push(element)
    alert(`Se agregó la tarea: `+ element)
  } else {
    alert(`No puede ingresar espacios vacios`)
  }
  
}

function eliminar(element){

    if (task.includes(element)){
      for (let i=0; i<task.length; i++){
        console.log(task[i])
        if(task[i]===element){
          task.splice(i, 1)

        }
    }
      alert('Se eliminó la materia: '+ element)
    }else{
      alert('No coincide con ninguna materia')
    }
}

function editarTareas(nombre){
  if (task.includes(nombre)){
      let nuevoNombre = prompt("Escribir nuevo nombre para la materia");
      switch (true) {
          case (nuevoNombre === ''):
              alert('No se puede agregar una materia vacía.')
              break;
          case ((nuevoNombre.charAt(0) == ' ')):
              alert('No se puede agregar una materia con espacios al principio.')
              break;
          case ((nuevoNombre.charAt(nuevoNombre.length - 1) == ' ')):
              alert('No se puede agregar una materia con un espacio al final.')
              break;
          default:
              alert('Se cambió la materia ' + nombre + " --> " + nuevoNombre);
              task[task.indexOf(nombre)] = nuevoNombre;
              break;
  }
      }
      else{
          alert('No existe esa materia')
      }
}


function lista(){
    alert(task())
}

let opcion
while (opcion != 0){
opcion = parseInt(prompt('Ingrese una operacion\n1-Agregar una materia\n2-Eliminar materia\n3-Editar materia\n4-Lista de materias\n0-salir'))
  switch(opcion){
    case 0:
      alert(`Saliendo`)
      break;
    case 1:
      agregar(prompt(`Ingrese una materia`))
      break;
    case 2:
      eliminar(prompt(`Ingrese la materia a eliminar\n${task}`))
      break;
    case 3:
      editarTareas(prompt(`Seleccione la materia que desea cambiar\n${task.join('\n')}`));
      break;
    case 4:
      alert(`La lista de materias es:\n${task.join('\n')}`);
      break;
      default:
        alert('Ingrese un valor válido')
        break;
  }
}