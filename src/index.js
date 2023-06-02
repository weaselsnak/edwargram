import scrambleds from './words.mjs';

let dictionary = [];

async function fillTable(word) {
    const cells = document.querySelectorAll(".cells")
    let i = 0
    for (const cell of cells) {
        cell.innerText = word[i];
        i++;
    }
    const data = await fetch(`${word}.txt`);
    const words = await data.text();
    dictionary = words.split("\n");
}

document.querySelector("form").addEventListener("submit", function(e){
    e.preventDefault();
    checkWord();
});

function checkWord() {
    const word = document.getElementById("anagrammed").value.toLowerCase();
    const inputField = document.getElementById("anagrammed")
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
