let word = prompt("Enter a Five letter word:");
let encoded = "";
for (let i = 0; i < word.length; i++) {
    encoded += String.fromCharCode(word.charCodeAt(i) - 1);
}
console.log(encoded);