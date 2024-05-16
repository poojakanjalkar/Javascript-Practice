// std name in capital

let students = [
  { name: "rahul", rollNumber: 31, marks: 80 },
  { name: "xyz", rollNumber: 31, marks: 69 },
  { name: "xyz", rollNumber: 31, marks: 35 },
  { name: "xyz", rollNumber: 31, marks: 55 },
];

// const stds = students.map((std) => std.name.toUpperCase());
// console.log("++++", stds);

//total marks of stds with marks greater than sixty after 20 marks have been added to those who scored less than 60.

const result = students
  .map((std) => {
    if (std.marks < 60) {
      std.marks += 20;
    }
    return std;
  })
  .filter((std) => std.marks > 60)
  .reduce((acc, curr) => acc + curr.marks, 0);

console.log(result);

//function expression
const square = function (num) {
  return num * num;
};

console.log(square(5));

//first class function

function response(num) {
  return num * num;
}

function displayFunction(fn) {
  console.log("_________", fn(4));
}
displayFunction(response);
