let array = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8],
];
let sum = 0;

let add = array.map((value, index) => (sum += value));
console.log(sum);