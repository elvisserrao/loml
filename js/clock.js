
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
                } else {
                    monthElapsed = 11 - Math.abs(monthElapsed);
                    daysElapsed = lastDayOfMonth.getUTCDate() -1;
                }
            } else {
                monthElapsed = 12 - Math.abs(monthElapsed);
                daysElapsed = Math.abs(datePresent.getUTCDate() - dateBegin.getUTCDate());
            }
        }
    } else if (datePresent.getUTCMonth() > dateBegin.getUTCMonth()) {
            if (datePresent.getUTCHours() < 20) {
                if (datePresent.getUTCDate() !== dateBegin.getUTCDate()) {
                    daysElapsed -= 1;
                } else {
                    monthElapsed = datePresent.getUTCMonth() - dateBegin.getUTCMonth() - 1;
                    daysElapsed = lastDayOfMonth.getUTCDate() -1;
                }
            } else if (datePresent.getUTCHours() === 20) {
                if (datePresent.getUTCMinutes() < 18) {
                    if (datePresent.getUTCDate() !== dateBegin.getUTCDate()) {
                        daysElapsed -= 1;
                        monthElapsed = datePresent.getUTCMonth() - dateBegin.getUTCMonth();
                    } else {
                        monthElapsed = datePresent.getUTCMonth() - dateBegin.getUTCMonth() - 1;
                        daysElapsed = lastDayOfMonth.getUTCDate();
                    }
                } else {
                    monthElapsed = datePresent.getUTCMonth() - dateBegin.getUTCMonth();
                    daysElapsed = Math.abs(datePresent.getUTCDate() - dateBegin.getUTCDate());;
                }
            } else {

                if (datePresent.getUTCDate() !== dateBegin.getUTCDate()) {
                    daysElapsed -= 1;
                    monthElapsed = datePresent.getUTCMonth() - dateBegin.getUTCMonth();
                } else {
                    monthElapsed = datePresent.getUTCMonth() - dateBegin.getUTCMonth() - 1;
                    daysElapsed = lastDayOfMonth.getUTCDate();
                }
            }

    } else {
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

    yearElapsed = `<div class="col"><p>${yearElapsed}</p><p>Ano(s)</p></div>`;
    monthElapsed = `<div class="col"><p>${monthElapsed}</p><p>Meses</p></div>`;
    daysElapsed = `<div class="col"><p>${daysElapsed}</p><p>Dia(s)</p></div>`;

    var hoursElapsed = `<div class="col"><p>${checkTime(diff.getUTCHours())}</p> <p>Hora(s)</p></div>`;
    var minutesElapsed = `<div class="col"><p>${checkTime(diff.getUTCMinutes())}</p> <p>Minuto(s)</p></div>`;
    var secondsElapsed = `<div class="col"><p>${checkTime(diff.getUTCSeconds())}</p> <p>Segundo(s)</p></div>`;

    timeElapsed = `${yearElapsed} ${monthElapsed} ${daysElapsed} ${hoursElapsed} ${minutesElapsed} ${secondsElapsed}`;

    document.querySelector('#dateElapsed').innerHTML = timeElapsed;
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

countDate();