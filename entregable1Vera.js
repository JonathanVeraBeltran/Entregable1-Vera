
function agregartarea(){

    const Tareas = {
        Hora: let = parseInt(prompt("Ingrese el horario de la tarea (de 0 a 23)")),
        Minutos: let = parseInt(prompt("Ingrese los minutos (de 0 a 59)")),
        Tarea: let = prompt(`Ingrese la tarea que hará en este horario`),
    }

    console.table (Tareas )

    if((Tareas.Hora > 23) || (Tareas.Hora < 0) || (isNaN(Tareas.Hora))){
        alert("Debe ingresar un horario válido, entre 0 y 23");
    } else if((Tareas.Minutos > 59) || (Tareas.Minutos < 0) || (isNaN(Tareas.Minutos))) {
        alert("Debe ingresar una cantidad de minutos válida, entre 0 y 59");
    } else if((Agenda.includes(Tareas.Hora)) === true && (Agenda.includes(Tareas.Minutos)) === true){
            alert ("Ya tienes una tarea asignada en este horario")
        } else {
            Agenda.push(Tareas.Hora)
            Agenda.push(Tareas.Minutos)
            Agenda.push(Tareas.Tarea)
            alert("La tarea ha sido agregada correctamente")
        }
}

const Agenda = []
let flag = true

    while(flag){
        agregartarea()
    
        flag = confirm("seleccione ACEPTAR para continuar o CANCELAR para finalizar")
    
    
        if(!flag){
            let tareasAMostrar = Agenda.join(" : ")


            alert(`Tu agenda queda de la siguiente manera: ${tareasAMostrar}`)
        }
    }
    console.log(Agenda)



