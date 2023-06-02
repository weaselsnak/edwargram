import scrambleds from '../src/words.mjs';
import fs from 'fs';

async function getWords() {
    const data = await fs.readFileSync('./scripts/words.txt', 'utf8');
    return data.split("\n")
}

async function solutions(targetWord) {
    let allowedLetters = new Map()
    for (const word of targetWord.toLowerCase()) {
        const count = allowedLetters.get(word) || 0
        allowedLetters.set(word, count + 1);
    }
    const words = await getWords()
    let smallerDict = []
    for (const word of words) {
        if (word == "") {
            continue
        }
        let shouldAddWord = true;
        for (const letter of word) {
            if (!allowedLetters.has(letter)) {
                shouldAddWord = false
                break
            }
        }
        if (shouldAddWord) {
            smallerDict.push(word);
        }
    }
    return smallerDict;
}

scrambleds.forEach(async scramble => {
    const validSolutions = await solutions(scramble);
    fs.writeFileSync(`./static/${scramble}.txt`, validSolutions.join("\n"));
});

