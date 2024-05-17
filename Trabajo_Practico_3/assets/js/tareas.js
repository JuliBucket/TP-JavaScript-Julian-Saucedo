let task = []

function agregar(name){
  task.push(name)
}

agregar('matematica')
agregar('ingles')
agregar('algoritmo')
agregar('tlp')

function eliminar(elemento){
  for (let i=0; i<task.length; i++){
    console.log(task[i])
    if(task[i]===elemento){
      task.splice(i,1)
    }
  }
}

eliminar('ingles')
task