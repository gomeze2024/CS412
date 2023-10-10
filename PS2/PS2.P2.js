function* emitWords (sentence) {
    let sentenceArray = sentence.split(" ");
    yield* sentenceArray;
}

for (word of emitWords("All I know is something like a bird within her sang")) {
    console.log(word);
} 