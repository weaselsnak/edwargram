const words = ["INFLUENCE", "BARGAINED", "ENCIRCLES", "DESPAIRED", "BELITTLES", "CAMPFIRES", "AMBERGRIS", "BARNACLES", "HEADLOCKS", "FESTIVITY", "MANIFESTO", "OBSCENITY", "UNETHICAL", "NIGHTMARE", "SOBRIQUET", "VAINGLORY", "ODALISQUE", "INVOLUTED", "HAMSTRING", "FECUNDITY",
"GARNISHED",
"SYCOPHANT",
"LOQUACITY",
"MONASTERY",
"PACHYDERM",
"PHILANDER",
"SCHNITZEL",
"BIFURCATE",
"CUNEIFORM",
"MISCREANT"]
const scrambleds= ["LCFENUNIE", "IEAANDRBG", "SLCINRECE", "EEIDPADRS", "ELTTLESBI", "ISCPRFAEM", "GMSIERRBA", "AACLRNEBS", "DSHLKOEAC", "YTETIFSVI", "EFAOSINTM", "INTBYESOC", "UILCTAHEN", "EHITRMNGA", "ISQUBRETO", "AILVOYNRG", "SDOLAQEIU", "VNDOIUETL", "TGNHAMIRS", "TUDYFNCIE",
"EDNRSIAGH",
"PYSHTNOAC",
"AYLQTCUIO",
"RONYESATM",
"YMRCPEDAH",
"ERALNPIHD",
"CELSINTHZ",
"ITUCFRAEB",
"CIUFRNMOE",
"RMEATICNS"]

function fillTable(word) {
    const table = document.querySelector("table")
    let count = 0;
    for (let i = 0; i < table.rows.length; i++) {
        for (let j= 0; j < table.rows[i].cells.length; j++) {
            table.rows[i].cells[j].firstChild.innerText = word[count];
            count ++;
        }
    }
}

function checkWord(e) {
    e.preventDefault();
    const word = document.getElementById("anagrammed").value;
    if (word.length == 0) {
        return
    }
    if (word.toLowerCase() === words[days].toLowerCase()) {
        alert("Very nice!")
    } else {
        alert("Very bad");
        const inputField = document.getElementById("anagrammed")
        inputField.select();
    }
}

function getNumberOfDays(date1, date2) {
    const oneDay = 1000 * 60 * 60 * 24;
    const diffInTime = date2.getTime() - date1.getTime();
    const diffInDays = Math.floor(diffInTime / oneDay);
    return diffInDays;
}

let days;
const wordInput = document.getElementById('anagrammed');
const beginning = new Date('2022-07-07')
document.addEventListener('DOMContentLoaded', () => {
    const now = new Date()
    days = getNumberOfDays(beginning, now);
    fillTable(scrambleds[days])
}, false);
