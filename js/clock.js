
// Verifica e adiciona o 0 caso o campo esteja somente com um digíto
function checkTime(i) {

    if (i<10) {
        i = "0" + i;
    }
    return i;
}

// Mostra hora atual
function startClock () {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    m = checkTime(m);
    s = checkTime(s);
    today = h + ":";
    today += m + ":";
    today += s;

    document.getElementById('clock').innerHTML ="Hora atual ==> " + today;
    var call = setTimeout(function () {startClock()},500 );
}

//Função que faz a contagem do tempo decorrido desde 04/07/2019

function countDate () {

    var dateBegin = new Date(2019,6,4,17,18); // Instância a data e hora inicial
    var datePresent = new Date(); // Instância a data e hora presente
    var diff = new Date(datePresent.getTime()-dateBegin.getTime() ); // Calcula a diferença do timestamp (em milissegundos)

    var yearElapsed = datePresent.getUTCFullYear() - dateBegin.getUTCFullYear();
    var monthElapsed = datePresent.getUTCMonth() - dateBegin.getUTCMonth();
    var daysElapsed = Math.abs(datePresent.getUTCDate() - dateBegin.getUTCDate());

    var lastDayOfMonth = new Date(datePresent.getUTCFullYear(), datePresent.getUTCMonth(), datePresent.getUTCDate()-datePresent.getUTCDate() );

    if ( datePresent.getUTCDate() < dateBegin.getUTCDate()) {
        monthElapsed -= 1;
        daysElapsed = lastDayOfMonth.getUTCDate() - daysElapsed;
    }

    if (datePresent.getUTCMonth() < dateBegin.getUTCMonth()) {
        yearElapsed -= 1;
        if (datePresent.getUTCHours() < 20) {

            if (datePresent.getUTCDate() !== dateBegin.getUTCDate()) {
                daysElapsed -= 1;
            } else {
                yearElapsed -=1;
                monthElapsed = 12 - Math.abs(monthElapsed);
                daysElapsed = lastDayOfMonth.getUTCDate() -1;
            }

        } else if (datePresent.getUTCHours() === 20) {
            if (datePresent.getUTCMinutes() < 18) {
                if (datePresent.getUTCDate() !== dateBegin.getUTCDate()) {
                    daysElapsed -= 1;
                    // monthElapsed = 12 - Math.abs(monthElapsed);
                } else {
                    console.log("parou aqui");
                    monthElapsed = 11 - Math.abs(monthElapsed);
                    daysElapsed = lastDayOfMonth.getUTCDate() -1;
                }
            } else {
                monthElapsed = 12 - Math.abs(monthElapsed);
                daysElapsed = Math.abs(datePresent.getUTCDate() - dateBegin.getUTCDate());
            }
        }
    } else if (datePresent.getUTCMonth() >= dateBegin.getUTCMonth()) {


            if (datePresent.getUTCHours() < 20) {

                if (datePresent.getUTCDate() !== dateBegin.getUTCDate()) {
                    daysElapsed -= 1;
                } else {
                    yearElapsed -=1;
                    monthElapsed = 12 - Math.abs(monthElapsed);
                    daysElapsed = lastDayOfMonth.getUTCDate() -1;
                }

            } else if (datePresent.getUTCHours() === 20) {
                if (datePresent.getUTCMinutes() < 18) {
                    if (datePresent.getUTCDate() !== dateBegin.getUTCDate()) {
                        daysElapsed -= 1;
                        monthElapsed = datePresent.getUTCMonth() - dateBegin.getUTCMonth();
                    } else {
                        console.log("parou aqui");
                        yearElapsed -=1;
                        monthElapsed = 12 - 1;
                        daysElapsed = lastDayOfMonth.getUTCDate();
                    }
                } else {
                    monthElapsed = datePresent.getUTCMonth() - dateBegin.getUTCMonth();
                    daysElapsed = Math.abs(datePresent.getUTCDate() - dateBegin.getUTCDate());;
                }
            }

    }



    // if (datePresent.getUTCHours() < 20) {
    //
    //         if (datePresent.getUTCDate() !== dateBegin.getUTCDate()) {
    //             daysElapsed -= 1;
    //         } else {
    //
    //             monthElapsed -= 1;
    //             daysElapsed = lastDayOfMonth.getUTCDate();
    //         }
    //
    // } else if (datePresent.getUTCHours() === 20) {
    //     if (datePresent.getUTCMinutes() < 18) {
    //         if (datePresent.getUTCDate() !== dateBegin.getUTCDate()) {
    //             daysElapsed -= 1;
    //         } else {
    //             console.log("parou aqui");
    //             monthElapsed -= 1;
    //             daysElapsed = lastDayOfMonth.getUTCDate();
    //         }
    //     }
    // }


    //
    // console.log("Minutos");
    // console.log(dateBegin.getUTCMinutes());
    // console.log(datePresent.getUTCMinutes());
    // console.log("Horas");
    // console.log(dateBegin.getUTCHours());
    // console.log(datePresent.getUTCHours());

    yearElapsed += " ano(s) ";
    monthElapsed += " meses ";
    daysElapsed += " dia(s) ";


    var hoursElapsed = checkTime(diff.getUTCHours()) + " Hora(s) ";
    var minutesElapsed = checkTime(diff.getUTCMinutes()) + " minuto(s) ";
    var secondsElapsed = checkTime(diff.getUTCSeconds()) + " segundo(s) ";





    timeElapsed = yearElapsed + monthElapsed + daysElapsed + hoursElapsed + minutesElapsed + secondsElapsed;

    document.getElementById('dateElapsed').textContent = "Já se passaram ==> " + timeElapsed;
    document.getElementById('date').textContent = "Desde ==> " + dateBegin;
    // document.getElementById('teste').innerHTML = "TESTE ==> " + yearElapsed + monthElapsed + daysElapsed;
    var call = setTimeout(function () {countDate()},500 );
}

function checkDay() {
    let dateBegin = new Date(2019,6,4,17,18);
    let datePresent = new Date();
    let diff = new Date(datePresent.getTime()-dateBegin.getTime() );

    if (datePresent.getUTCDate() < dateBegin.getUTCDate()) {
        let m = datePresent.getUTCMonth() - 1;
        while (m) {

        }
    }
}

startClock();
countDate();