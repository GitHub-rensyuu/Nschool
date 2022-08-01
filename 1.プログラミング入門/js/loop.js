// for (let i = 1; i <= 100000; i++) {
//   document.write(i + " ");
// }

// for (let i = 10; i >= 0; i--) {
//   console.log("あと" + i + "日");
// }

for (let i = 1; i <= 100000; i++) {
  // if (i % 3 === 0) {
  //   document.write("Fizz");
  //   return;
  // }
  // if (i % 5 === 0) {
  //   document.write("Buzz");
  //   return;
  // }
  // document.write(i + " ");
  if (i % 15 === 0) {
    document.write("FizzBuzz ");
  } else if (i % 5 === 0) {
    document.write("Buzz ");
  } else if (i % 3 === 0) {
    document.write("Fizz ");
  } else {
    document.write(i + " ");
  }
}