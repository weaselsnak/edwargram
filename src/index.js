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
"SNOBBIEST",
"DRIZZLING",
"HABITABLE",
"IDENTICAL",
"RACKETEER",
"RAINWATER",
"UNDEFINED",
"PERIMETER",
"TANGERINE",
"DEDICATED",
"MARGARITA",
"HARMONICA",
"FRIVOLOUS",
]

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
"TESBSOBNI",
"DNRZGILZI",
"LETABIHBA",
"AECIDINTL",
"EECTRAREK",
"AANERIRWT",
"NDFNEUDEI",
"PRMREIETE",
"IENTANERG",
"EADTCDEDI",
"ITAMARRGA",
"ONHCARAMI",
"ORFLUOSIV"]

function fillTable(word) {
    const grid = document.querySelector(".grid")
    let i = 0
    for (const cell of grid.children) {
        cell.innerText = word[i];
        i++;
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

function shuffle() {
    const originals = ['order-1','order-2','order-3','order-4','order-5','order-6','order-7','order-8','order-9'];
    const cells = originals.map(original => document.getElementsByClassName(original)[0]);
    const shuffled = [...originals].sort(() => Math.random() - 0.5);

    for (let i=0; i < cells.length; i++) {
        const target = shuffled[i];
        const original = originals[i];
        const cell = cells[i];
        cell.classList.remove(original);
        cell.classList.add(target);
    }
}


let days;
const wordInput = document.getElementById('anagrammed');
const beginning = new Date('2022-07-07')
document.addEventListener('DOMContentLoaded', () => {
    const now = new Date()
    days = getNumberOfDays(beginning, now);
    fillTable(scrambleds[days])
}, false);

let shuffleButton = document.querySelector("button");
shuffleButton.addEventListener("click", () => {
    shuffle();
});
