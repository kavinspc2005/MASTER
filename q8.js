let a = [1, -2, 3, -4, 5];

a.forEach((vale, index) => {
  a[1] = 2;
  a[3] = 4;
});
console.log(a);