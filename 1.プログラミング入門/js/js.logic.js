// let age = 15;
// let result = null;
// if (age >= 18) {
//   result = "成年";
// } else {
//   result = "未成年";
// }
// document.write(result);

// let age = 65;
// let isMember = true;
// let result = null;
// if(age >= 60 && isMember){
//   result = "シニア会員割引の対象です";
// } else{
//   result = "シニア会員割引の対象ではありません";
// }
// document.write(result);

// let isCalc = true;
// if(isCalc){
//   let w = 3;
//   let h = 10;
//   let area = (w * h) / 2;
//   document.write(area);
// }

// let number = 3;
// if (number % 3 === 0) {
//   console.log(`サァン!`);
// } else {
//   console.log(number);
// }

let age = 16;
let isCustomer = true;
let result = null;
if (age <= 15) {
  result = "800円";
} else if (isCustomer === true) {
  result = "1000円";
} else {
  result = "1800円";
}
document.write(result);

