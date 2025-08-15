let users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 },
];

let IdToupdate = 2;

users.forEach((users) => {
  if (users.age) {
    users.age += 1;
  }
});
console.log(users);