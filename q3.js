let students = [
  { name: "Alice", grade: "A" },
  { name: "Bob", grade: "B" },
  { name: "Charlie", grade: "C" },
];

let idTofind = 2;

students.forEach((students) => {
  if (students.grade) {
    students.grade = "A+";
  }
});
console.log(students);