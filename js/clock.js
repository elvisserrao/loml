
// Verifica e adiciona o 0 caso o campo esteja somente com um digíto
function checkTime(i) {

    if (i<10) {
        i = "0" + i;
    }
    return i;
}

// Mostra hora atual
function startClock () {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();

    m = checkTime(m);
    s = checkTime(s);

    document.getElementById('clock').innerHTML ="Hora atual ==> " + h + ":" + m + ":" + s;
    t = setTimeout(function () {startClock()}, 500);
}

//Função que faz a contagem do tempo decorrido desde 04/07/2019

function countDate () {

    let dateBegin = new Date(2019, 6,4,17,20); // Instância a data e hora inicial
    let datePresent = new Date(); // Instância a data e hora presente
    let diff = new Date(datePresent-dateBegin); // Calcula a diferença do timestamp (em milissegundos)

    let timeElapsed = checkTime(datePresent.getUTCFullYear() - dateBegin.getUTCFullYear()) + " ano(s) ";
    timeElapsed += checkTime(diff.getUTCMonth()) + " mes(es) ";
    timeElapsed += checkTime(Math.abs(datePresent.getUTCDate() - dateBegin.getUTCDate())) + " dia(s) ";
    timeElapsed += checkTime(diff.getUTCHours()) + " Hora(s) ";
    timeElapsed += checkTime(diff.getUTCMinutes()) + " minuto(s) ";
    timeElapsed += checkTime(diff.getUTCSeconds()) + " segundo(s) ";


    // let diffYear = Math.abs(dateBegin.getFullYear() - hoje.getFullYear());
    // let diffMonth = Math.abs(dateBegin.getMonth() - hoje.getMonth());
    // let diffDay = Math.abs(dateBegin.getDate() - hoje.getDate());
    // let diffHours = Math.abs(dateBegin.getHours() - hoje.getHours());
    // let diffMinute = Math.abs(dateBegin.getMinutes() - hoje.getMinutes());
    // let diffSecond = Math.abs(dateBegin.getSeconds() - hoje.getSeconds());
    document.getElementById('date').innerHTML = "Já se passaram ==> " + timeElapsed;
    document.getElementById('date').innerHTML += "<br>Desde ==> " + dateBegin;
    let call = setTimeout(function () {countDate(); startClock();},500 )
}

countDate();
startClock()