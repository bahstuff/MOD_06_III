//EJERCICIO I GENERADOR DE HORARIOS

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

// Datos --------------------------------------------------------------------------
var myTeam = [
    {
        name: "María",
        availability: [],
    },
    {
        name: "Pedro",
        availability: []
    },
    {
        name: "Esther",
        availability: []
    },
    {
        name: "Marcos",
        availability: []
    },
];


//RELOAD PAGE --------------------------------------------------------------------
var reloadPage = () => {
    window.location.reload();
}

//GENERADOR ALEATORIO DE HORARIOS-------------------------------------------------
var getRandom = (a,b) => Math.random() < 0.5 ? a : b;



//PRINT ALL ----------------------------------------------------------------------
var printAll = (hoursArray, teamArray) =>{
    for(let i = 0; i < teamArray.length; i++){
        let teamMember = teamArray[i];
        printName(teamMember);
        workAvailability(hoursArray, teamMember);
    }
}

//PRINT NAMES --------------------------------------------------------------------
var printName = (teamMember) => {
    console.log("---------------------")
    console.log("Coworker name: " + teamMember.name.toUpperCase());
    console.log("AVAILABILITY : " );
}

//PRINT WORKHOURS -----------------------------------------------------------------
var workAvailability = (hoursArray, teamMember) =>{
    for(let i = 0; i < hoursArray.length; i++){
        teamMember.availability[i] = getRandom(true,false);
        console.log(hoursArray[i] + ": " + teamMember.availability[i]);
    }
}

printAll(WORK_HOURS,myTeam);

//CHECK AVAILABILITY --------------------------------------------------------------
var checkAvailability = (hoursArray, teamMember) =>{
    var arrayAvailab = [];
    for(let i=0; i < hoursArray.length; i++){
        let check = true;
        for(let j= 0; j < teamMember.length; j++){
            arrayAvailab.push(teamMember[j].availability[i]);
            if(arrayAvailab[j]===false){
                check = false;
            }
        }
        if(check === true){
            document.getElementById("availableHour").innerText = hoursArray[i];
        }
        arrayAvailab = [];
    }
}

checkAvailability(WORK_HOURS,myTeam);


//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------
//EJERCICIO 2 ******************
console.log("EJERCICIO 2")

var  BILLETES  = [200, 100, 50, 20, 10, 5];
var MONEDAS_EUROS = [2, 1];
var MONEDAS_CENTS = [50, 20, 10, 5, 2, 1];

var calcularCambio = () =>{
    var importe = document.getElementById("count").innerValue;
    var entregado = document.getElementById("cash").innerValue;
    console.log(importe, entregado);
}


