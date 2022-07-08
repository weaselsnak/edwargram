let words = ["INFLUENCE", "BARGAINED", "ENCIRCLES", "DESPAIRED", "BELITTLES", "CAMPFIRES", "AMBERGRIS", "BARNACLES", "HEADLOCKS","FESTIVITY"]
let scrambleds= ["LCFENUNIE", "IEAANDRBG", "SLCINRECE", "EEIDPADRS", "ELTTLESBI", "ISCPRFAEM", "GMSIERRBA", "AACLRNEBS", "DSHLKOEAC", "YTETIFSVI"]

function fillTable(word) {
    table = document.querySelector("table")
    let count = 0;
    for (let i = 0; i < table.rows.length; i++) {
        for (let j= 0; j < table.rows[i].cells.length; j++) {
            table.rows[i].cells[j].innerText = word[count];
            count ++;
        }
    }
}

function checkWord() {
    word = document.getElementById("anagrammed").value
    if (word.length == 0) {
        return
    }
    console.log(days);
    if (word.toLowerCase() === words[days].toLowerCase()) {
        alert("Very nice!")
    } else {
        alert("Very bad");
        document.getElementById("anagrammed").value = "";
    }
}

function getNumberOfDays(date1, date2) {
    const oneDay = 1000 * 60 * 60 * 24;
    const diffInTime = date2.getTime() - date1.getTime();
    const diffInDays = Math.round(diffInTime / oneDay);
    return diffInDays;
}

let days;
const wordInput = document.getElementById('anagrammed');
const beginning = new Date('2022-07-07')
document.addEventListener('DOMContentLoaded', function() {
    let now = new Date()
    days = getNumberOfDays(beginning, now);
    fillTable(scrambleds[days])
}, false);
