//EJERCICIO I GENERADOR DE HORARIOS
// Constantes
var WORK_HOURS = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "15:00 - 16:00",
    "16:00 - 17:00"
];
let yes;
let no;

// Datos
var myTeam = [
    {
        name: "María",
        availability: new Array(8)
    },
    {
        name: "Pedro",
        availability: new Array(8)
    },
    {
        name: "Esther",
        availability: new Array(8)
    },
    {
        name: "Marcos",
        availability: new Array(8)
    },
];


//RELOAD PAGE --------------------------------------------------------------------
function reloadPage(){
    window.location.reload();
}


////GENERADOR ALEATORIO DE HORARIOS-----------------------------------------------
var getRandom = (a,b) => Math.random() < 0.5 ? a : b;

for (var i=0; i < myTeam.length; i++){
    for (let a = 0; a < WORK_HOURS.length; a++){
        myTeam[i].availability[a] = getRandom("Si", "No");
    }

}

////MOSTRAR POR CONSOLA -----------------------------------------------------------
// BUCLE EXTERNO
var printDisponibilidad = (horario, teamArray) => {
    for (let i = 0; i < teamArray.length; i++) {
        console.log("Coworker name: " + teamArray[i].name);
        console.log("- AVAILABILITY -");
        let teamMember = teamArray[i];
        printWorkHours(horario, teamMember);
        console.log("----------------------");
    }
}                                                

//BUCLE HORARIO + INTERNO
var printWorkHours = (horario, teamMember) => {
    let disponible = true;
    for (let a = 0; a < horario.length; a++) {
        console.log(horario[a] +  ": " + teamMember.availability[a]);
        for(let b= 0; b < horario.length; b++){
            if(teamMember.availability[a] != teamMember.availability[b]){
                disponible = false;
            }
        }
    }
}

//EJECUTAR FUNCION
printDisponibilidad(WORK_HOURS, myTeam);

//1st AVAILABLE  -------------------------------------------------------------------




