// let classes = ["A組", "B組", "C組", "D組"];

// for (let grade = 1; grade < 4; grade++) {
//   for (let i = 0; i < classes.length; i++) {
//     document.write('<p>' + grade + '年' + classes[i] + '</p>');
//   }
// }

// let cats = ["みけ", "たま", "くろ"];
// for (let i = 0; i < cats.length; i++) {
//   console.log(cats[i]);
// }

// let scores = [23, 56, 88, 33, 78, 20, 55, 67, 78];
// let maxScore = 0;
// for (let i = 0; i < scores.length; i++) {
//   if (maxScore < scores[i]) {
//     maxScore = scores[i];
//   }
// }

// console.log("最高得点は" + maxScore + "点です！");
// console.log(`最高得点は ${Math.max(...scores)}点です！`);

let moji = ["あ", "い", "う", "え", "お"];
for (let i = 0; i < moji.length; i++) {
  for (let j = 0; j < moji.length; j++) {
    document.write('<p>' + moji[i] + moji[j] + '</p>');
  }
}