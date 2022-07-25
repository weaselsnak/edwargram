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
"MISCREANT",
"BANDOLIER",
"CHAFFINCH",
"HABENERAS",
"BANDONEON",
"BUSHWHACK",
"PIPSQUEAK",
"QUANTISER",
"DEATHBLOW",
"LACHRYMAL",
"EARTHWORM",
"WATERFOWL",
"WUTHERING",
"SEPULCHRE",
"PANEGYRIC",
"EMBEZZLED",
"FRAMEWORK",
"EQUIVOQUE",
"TRENCHANT",
"TRAPEZIUM",
"THUMBNAIL",
"LAZYBONES",
"PORCUPINE",
"PHALANGER",
"CHIHUAHUA",
"CASSOWARY",
"ALBATROSS",
"PADEMELON",
"CHAMELEON",
"ARMADILLO",
"BUTTERFLY",
"BARRACUDA",
"DACHSHUND",
"ANGLEFISH",
"BINTURONG",
"RAZORBACK",
"WOODCHUCK",
"BULLFINCH",
"QUICKSAND",
"EXECUTRIX",
"HATCHBACK",
"HAPHAZARD",
"KILOJOULE",
"MULTIPLEX",
"QUINTUPLE",
"HOLLYHOCK",
"GENUFLECT",
"WHISTLING",
"WHIFFLING",
"FROGMOUTH",
"BILLABONG",
"TERMAGANT",
"SUNDOWNER",
"SNOBBIEST"]

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
"RMEATICNS",
"ERDANLBIO",
"NHAHCICFF",
"EEAABSRNH",
"NBOEANDNO",
"KWCBSAUHH",
"KPISEPAQU",
"UIQSNRTEA",
"ETAWHOLBD",
"RMYALCLAH",
"RERMWOHTA",
"WWOLRTFAE",
"RGWEIHUNT",
"LERHCSEUP",
"NYAEPCGRI",
"BZEDEMELZ",
"FOEARMWRK",
"EOQVEUQIU",
"TNCREHATN",
"AZRPETMIU",
"UTLNBAHIM",
"ZLEASOBYN",
"RPNEOCUPI",
"GAPLHRAEN",
"UCHIHUAHA",
"WRSCYOSAA",
"ASATOBLSR",
"LDOEMPAEN",
"ANLOHMCEE",
"ALMORDAIL",
"TYBFELRUT",
"RBACRAAUD",
"HCDSDANUH",
"FANHGLSIE",
"NURNTGIOB",
"AABCOZKRR",
"CWODOCUHK",
"CLFBUNIHL",
"SUIKACQDN",
"CRIEUTXXE",
"HABKCCHAT",
"DHRHPAZAA",
"OLKIEOLUJ",
"PTIMUELXL",
"IQTLPENUU",
"CHLOYLKHO",
"NTCUFEGLE",
"LHSNWIIGT",
"IIHFNWLGF",
"FORUGHOTM",
"BIBALNGOL",
"RAETNTMGA",
"SONUDWREN",
"TESBSOBNI"]

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
