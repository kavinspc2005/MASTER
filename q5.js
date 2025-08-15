let a = [1, 2, 3];
sum = 1;
a.forEach((value, index) => {
  a[index] = value + 1;
});
console.log(a);