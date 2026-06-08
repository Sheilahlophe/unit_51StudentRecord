// Personal Details
const studentName = 'Sheila Hlophe'; // Use const if the value will never change
console.log(studentName);
console.log(typeof studentName);

const studentID = 'SD-2025-001';
console.log(studentID);
console.log(typeof studentID);

const age = 18;
console.log(age);
console.log(typeof age);

let = gradeLevel = 11; //use let if the value might change 
console.log(gradeLevel);
console.log(typeof gradeLevel);

const isEnrolled = true;
console.log(isEnrolled);
console.log(typeof isEnrolled);

let homeTown = 'Nelspruit';
console.log(homeTown);
console.log(typeof homeTown);

const guardianName = 'Hlengiwe Xaba';
console.log(guardianName);
console.log(typeof guardianName);

let previousSchool; //declared but no value yet
console.log(previousSchool)
console.log(typeof previousSchool)

//Subject Marks declaration
let marksMaths = 65
let marksEnglish = 80
let marksScience = 71
let marksGeography = 60
let marksComputer = 85

const totalMarks = marksMaths + marksEnglish + marksScience + marksGeography + marksComputer;
console.log(`Total marks: ${totalMarks}`);

const averageMark = totalMarks / 5;
console.log(`Average: ${averageMark}`);

const highestMark = Math.max(marksMaths, marksEnglish, marksScience, marksGeography, marksComputer);
console.log(`Highest mark: ${highestMark}`);

const lowestMark = Math.min (marksMaths, marksEnglish, marksScience, marksGeography, marksComputer);
console.log(`Lowest mark: ${lowestMark}`);

const markRange = highestMark - lowestMark;
console.log(`Mark range: ${markRange}`);

const roundedAverage = Math.round(averageMark);
console.log(`Rounded average: ${roundedAverage}`);

//Mark update after rewrite
console.log('Maths before rewrite:' + marksMaths);
marksMaths += 8;
console.log('Maths after rewrite:' + marksMaths);

//Recalculate with new maths mark
let newTotal = marksMaths + marksEnglish + marksScience + marksGeography + marksComputer;
console.log(`New total:  ${newTotal}`);

let newAverage = newTotal / 5;
console.log(`New average: ${newAverage}`);

//comparisons
const isPassing = averageMark >= 50;
console.log(`isPassing: ${isPassing}`);

const isDux = averageMark >= 75;
console.log(`isDux: ${isDux}`);

const needsSupport = averageMark < 40;
console.log(`needsSupport: ${needsSupport}`);

const hasPerfectScore = highestMark === 100;
console.log(`hasPerctScore: ${hasPerfectScore}`);

const isOfage = age >= 18;
console.log(`isOfage: ${isOfage}`);

const isHighSchool = gradeLevel >= 8 && gradeLevel <= 12;
console.log(`isHighSchool ${isHighSchool}`);

const canGetPrice     = isPassing && isDux;
console.log(`canGetPrice: ${canGetPrice}`);

const needIntervene   = needsSupport || lowestMark < 40;
console.log(`needIntervene: ${needsSupport}`);

const notPassing      = !isPassing;
console.log(`notPassing: ${notPassing}`);

const fullEligibility = isEnrolled && isHighSchool && isPassing;
console.log(`fullEligibility: ${fullEligibility}`);

// Final Student Report
console.log('================================');
console.log(`STUDENT: ${studentName.toUpperCase()}`);
console.log(`ID: ${studentID}`);
console.log('================================');

console.log(`Age: ${age}`);
console.log(`Grade Level: ${gradeLevel}`);
console.log(`Home Town: ${homeTown}`);
console.log(`Enrolled: ${isEnrolled}`);
console.log(`Guardian: ${guardianName}`);

console.log('--- SUBJECT MARKS ---');
console.log(`Maths: ${marksMaths}`);
console.log(`English: ${marksEnglish}`);
console.log(`Science: ${marksScience}`);
console.log(`Geography: ${marksGeography}`);
console.log(`Computer: ${marksComputer}`);

console.log('--- ACADEMIC SUMMARY ---');
console.log(`Total Marks: ${totalMarks}`);
console.log(`Average: ${averageMark}`);
console.log(`Rounded Average: ${roundedAverage}`);
console.log(`Highest Mark: ${highestMark}`);
console.log(`Lowest Mark: ${lowestMark}`);
console.log(`Mark Range: ${markRange}`);

console.log('--- STATUS ---');
console.log(`isPassing: ${isPassing}`);
console.log(`isDux: ${isDux}`);
console.log(`needsSupport: ${needsSupport}`);
console.log(`fullEligibility: ${fullEligibility}`);

console.log('--- DATA TYPES ---');
console.log(`studentName is a: ${typeof studentName}`);
console.log(`age is a: ${typeof age}`);
console.log(`isEnrolled is a: ${typeof isEnrolled}`);
console.log('================================');
