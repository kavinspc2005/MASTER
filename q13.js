let count = parseInt(prompt("How many numbers?"));
let smallest = parseFloat(prompt("Enter number 1:"));
for (let i = 2; i <= count; i++) {
  let numInput = parseFloat(prompt(i));
  if (numInput < smallest) {
    smallest = numInput;
  }
}
console.log(smallest);