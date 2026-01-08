let marks = [85, 72, 64, 49, 90, 33, 55, 78];

let passCount = 0;
let failCount = 0;

for (let i = 0; i < marks.length; i++) {

  let point = marks[i];
  let grade = "";

  if (point >= 80) {
    grade = "A+";
    passCount++;
  }
  else if (point >= 60) {
    grade = "B";
    passCount++;
  }
  else if (point >= 50) {
    grade = "C";
    passCount++;
  }
  else {
    grade = "F";
    failCount++;
  }

  console.log("Student " + (i + 1) + ": " + point + " => " + grade);
}

console.log("Total Students:", marks.length);
console.log("Passed:", passCount);
console.log("Failed:", failCount);
