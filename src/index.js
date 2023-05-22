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
"OFFICIOUS",
"SCARPERED",
"BALLADEER",
"FORGETFUL",
"PATCHWORK",
"EIDERDOWN",
"CHAUFFEUR",
"FUNICULAR",
"IRASCIBLE",
"COPROLITE",
"ASTRAKHAN",
"VIOLATION",
"VISUALISE",
"GLUTAMATE",
"ACCORDING",
"DRAMATIST",
"QUOTATION",
"INVISIBLE",
"EPONYMOUS",
"TAOISEACH",
"TABLEWEAR",
"EARNESTLY",
"INTERCEPT",
"INVIOLATE",
"PORCELAIN",
"OVERSIGHT",
"CLAMPDOWN",
"ANXIOUSLY",
"BURNISHED",
"DUPLICATE",
"DECATHLON",
"JOCUNDITY",
"NOSTALGIC",
"ALUMINIUM",
"BERKELIUM",
"GERMANIUM",
"LANTHANUM",
"MANGANESE",
"ZIRCONIUM",
"NEODYMIUM",
"TELLURIUM",
"NEPTUNIUM",
"PLUTONIUM",
"AMERICIUM",
"POTASSIUM",
"RUTHENIUM",
"MAGNESIUM",
"STRONTIUM",
"UNUNTRIUM",
"PALLADIUM",
"YTTERBIUM",
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
"ORFLUOSIV",
"SFFCIOOIU",
"EDAPERSCR",
"DERBALAEL",
"GOTFLUFER",
"KPACWHOTR",
"RNWEDIEDO",
"FEUAFRUHC",
"RLFICNUUA",
"SCIERLIAB",
"RECPIOTLO",
"NAKTAHRSA",
"LVOIOATNI",
"AUSLIVIES",
"LUETTMGAA",
"IDANGROCC",
"AARSDMTTI",
"OTTIANQOU",
"ENSLIBIIV",
"EMNOUSYOP",
"EHCAISATO",
"AEEBARTWL",
"NELTSYRAE",
"RPTICEETN",
"NAEOITLVI",
"OINACPRLE",
"GEOHTISVR",
"PLNCOAWDM",
"ANOXSYUIL",
"DNERBSHUI",
"PULTDAICE",
"DCOTLEHNA",
"JCTDIOUYN",
"STLIGACON",
"IMUNIUALM",
"BRLIMEKUE",
"ERNUMGAMI",
"LANUHNTMA",
"GNAASEMNE",
"CZUOINRIM",
"MUYDMNIOE",
"UULLRTMEI",
"PMNNTEUUI",
"UMLNPTOIU",
"AIIRUEMMC",
"AITUOMPSS",
"HNTMUUIER",
"MUAENSGMI",
"SOUNITRMT",
"UTRNIUMUN",
"DAULPAMLI",
"TUBTMRYEI"
]

let dictionary = [];

async function fillTable(word) {
    const cells = document.querySelectorAll(".cells")
    let i = 0
    for (const cell of cells) {
        cell.innerText = word[i];
        i++;
    }
    const data = await fetch("/words.txt");
    const words = await data.text();
    dictionary = words.split("\n");
}

document.querySelector("form").addEventListener("submit", function(e){
    e.preventDefault();
    checkWord();
});

function checkWord() {
    const word = document.getElementById("anagrammed").value;
    const inputField = document.getElementById("anagrammed")
    if (word.length == 0) {
        return
    }
    for (let i= 0; i < dictionary.length; i ++) {
        if (dictionary[i] == word) {
            if (word.length == 9) {
                alert("Extremely nice")
            } else {
                alert("Very nice")
            }
            inputField.select();
            return
        }
    }
        alert("Very bad");
        inputField.select();
}

function getNumberOfDays(date1, date2) {
    const oneDay = 1000 * 60 * 60 * 24;
    const diffInTime = date2.getTime() - date1.getTime();
    const diffInDays = Math.floor(diffInTime / oneDay);
    return diffInDays;
}

function fyShuffle(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    const randIndex = Math.floor(Math.random() * i);
    const temp = arr[randIndex];
    arr[randIndex] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

function shuffle() {
    const originals = ['cell-1','cell-2','cell-3','cell-4','cell-5','cell-6','cell-7','cell-8','cell-9'];
    const cells = originals.map(original => document.getElementsByClassName(original)[0]);
    const shuffled = fyShuffle([...originals]);
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
const beginning = new Date("2023-03-05 00:00:00")
document.addEventListener('DOMContentLoaded', () => {
    const now = new Date()
    days = getNumberOfDays(beginning, now);
    fillTable(scrambleds[days])
}, false);

let shuffleButton = document.getElementById("shuffleButton");
shuffleButton.addEventListener("click", () => {
    shuffle();
}, false);
