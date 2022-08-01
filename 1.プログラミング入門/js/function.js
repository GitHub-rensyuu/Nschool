// let myBirthTime = new Date("1982-12-17 12:30");//誕生日

// function updateParagraph() {
//   let now = new Date();//今の日時
//   let seconds = (now.getTime() - myBirthTime.getTime()) / 1000;//生まれてからの経過日時.getTime() でミリ秒
//   // document.getElementById("birth-time").innerText = "生まれてから" + seconds + "秒経過。";
//   document.getElementById("birth-time").innerText = `生まれてから${seconds}秒経過。`;
// }

// // 50ミリ秒で呼び出し
// setInterval(updateParagraph, 50);

// function areaOfCircle(r) {
//   let area = r * r * 3.14;
//   return `<p>半径 5cmの円の面積は${area}です。</p>`;
//   // return {area};
// }
// document.write(areaOfCircle(5));
// document.write(areaOfCircle(10));
// document.write(areaOfCircle(15));
// document.write('<p>半径 5cmの円の面積は ' + areaOfCircle(5) + 'です。</p>');
// document.write('<p>半径 10cmの円の面積は ' + areaOfCircle(10) + 'です。</p>');
// document.write('<p>半径 15cmの円の面積は ' + areaOfCircle(15) + 'です。</p>');

function collatz(n) {
  if (n === 1) {
    console.log("終了");
  } else if (n % 2 === 0) {
    collatz(n / 2);
  } else {
    collatz(n * 3 + 1);
  }
}
