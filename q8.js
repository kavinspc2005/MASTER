let n = parseInt(prompt("Enter how many odd numbers to sum:"));
let sum = 0;
for (let i = 1; i <= (2 * n - 1); i += 2) {
    sum += i;
}
console.log(sum)