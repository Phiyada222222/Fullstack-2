function censorStr(sentence, wordToCensor) {
    const regex = new RegExp(wordToCensor, 'gi');
    const censoredSentence = sentence.replace(regex, '****');
    return censoredSentence;
}

const originalSentence = "JavaScript is the best programming language. I love JavaScript!";
const cleanPost = censorStr(originalSentence, "JavaScript");

console.log(cleanPost); 