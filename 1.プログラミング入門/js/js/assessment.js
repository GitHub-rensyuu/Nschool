"use strict";
const userNameInput = document.getElementById("user-name");
const assessmentButton = document.getElementById("assessment");
const resultDivided = document.getElementById("result-area");
const tweetDivided = document.getElementById("tweet-area");


// Enterキーを押しても投稿できるようにする
userNameInput.onkeydown = event => {
  if (event.key === 'Enter') {
    assessmentButton.onclick();
  }
};
assessmentButton.onclick = () => {
  const userName = userNameInput.value;
  if (userName.length === 0) {
    return;
  }
  // 診断結果表示エリアの作成
  // <div id="result-area">
  //   <h3>診断結果</h3>
  //   <p>あなたのいいところは声です。あなたの特徴的な声は皆を惹きつけ、心に残ります。</p>
  // </div>
  resultDivided.innerText = "";
  const header = document.createElement("h3");
  header.innerText = "診断結果";
  resultDivided.appendChild(header);

  const paragraph = document.createElement("p");
  const result = assessment(userName);
  paragraph.innerText = result;
  resultDivided.appendChild(paragraph);

  // TODOツイートエリアの作成
  tweetDivided.innerText = "";
  const anchor = document.createElement("a");
  //   https の部分は、URI のスキーム
  // twitter.com の部分は、ホスト名
  // /intent/tweet の部分は、リソース名
  // ? 以降の部分は、クエリ
  const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag=' +
    encodeURIComponent('あなたのいいところ') +
    '&ref_src=twsrc%5Etfw';

  anchor.setAttribute("href", hrefValue);
  anchor.setAttribute("class", "twitter-hashtag-button");
  // tweetの文章
  anchor.setAttribute("data-text", result);
  anchor.innerText = "Tweet #あなたのいいところ";
  tweetDivided.appendChild(anchor);

  const script = document.createElement('script');
  script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
  tweetDivided.appendChild(script);


};
const answers = [
  '{ userName } のいいところは声です。{ userName } の特徴的な声は皆を惹きつけ、心に残ります。',
  '{ userName } のいいところはまなざしです。{ userName } に見つめられた人は、気になって仕方がないでしょう。',
  '{ userName } のいいところは情熱です。{ userName } の情熱に周りの人は感化されます。',
  '{ userName } のいいところは厳しさです。{ userName } の厳しさがものごとをいつも成功に導きます。',
  '{ userName } のいいところは知識です。博識な{ userName } を多くの人が頼りにしています。',
  '{ userName } のいいところはユニークさです。{ userName } だけのその特徴が皆を楽しくさせます。',
  '{ userName } のいいところは用心深さです。{ userName } の洞察に、多くの人が助けられます。',
  '{ userName } のいいところは見た目です。内側から溢れ出る{ userName } の良さに皆が気を惹かれます。',
  '{ userName } のいいところは決断力です。{ userName } がする決断にいつも助けられる人がいます。',
  '{ userName } のいいところは思いやりです。{ userName } に気をかけてもらった多くの人が感謝しています。',
  '{ userName } のいいところは感受性です。{ userName } が感じたことに皆が共感し、わかりあうことができます。',
  '{ userName } のいいところは節度です。強引すぎない{ userName } の考えに皆が感謝しています。',
  '{ userName } のいいところは好奇心です。新しいことに向かっていく{ userName } の心構えが多くの人に魅力的に映ります。',
  '{ userName } のいいところは気配りです。{ userName } の配慮が多くの人を救っています。',
  '{ userName } のいいところはその全てです。ありのままの{ userName } 自身がいいところなのです。',
  '{ userName } のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる{ userName } が皆から評価されています。',
]

// * @param {string} userName//ユーザーの名前
// * @return {string}//診断結果

function assessment(userName) {
  // 全文字のコード番号を取得してそれを足し合わせる。
  let sumOfCharCode = 0;
  for (let i = 0; i < userName.length; i++) {
    sumOfCharCode = sumOfCharCode + userName.charCodeAt(i);
    // sumOfCharCode += userName.sumOfCharCodeAt(i);だと上手くいかない
  }

  // 文字のコード番号の合計を回答の数で割って添え字の数値を求める
  const index = sumOfCharCode % answers.length;
  let result = answers[index].replaceAll('{ userName }', userName);
  // result = result.replaceAll('{ userName }', userName);
  return result;
}

console.log(assessment('太郎'));
// console.log(assessment('太郎'));
// console.log(assessment('太郎'));

// console.log('{userName}のいいところは優しいところです。'.replaceAll('{userName}', '太郎'));

// テストコード
// console.assert(
//   assessment('太郎') ===
//   '太郎 のいいところは決断力です。太郎 がする決断にいつも助けられる人がいます。',
//   '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'
// );

// console.assert(
//   assessment('太郎') === assessment('太郎'),
//   '入力が同じ名前なら同じ診断結果を出力する処理が正しくありません。'
// );

