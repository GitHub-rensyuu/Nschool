let game = {
  startTime: null,
  // idがdisplayAreaのところを書き換える
  displayArea: document.getElementById("display-area"),

  start: function () {
    // 今の日時を取得
    game.startTime = Date.now();
    // 何かキーが押されたらstopを実行する
    document.body.onkeydown = game.stop;
  },

  stop: function () {
    // 今の日時を取得
    let currentTime = Date.now();
    let seconds = (currentTime - game.startTime) / 1000;

    if (9.5 <= seconds && seconds <= 10.5) {
      game.displayArea.innerText = seconds + "秒でした。すごい。";
    } else {
      game.displayArea.innerText = seconds + "秒でした。残念。"
    }
  }
};



// ダイアログ表示
if (confirm("OKを押して10秒だと思ったら何かキーを押して下さい")) {
  //TODOスタート処理
  game.start();
}


// let catObj = {
//   name: ["茶マル", "chamalu"],
//   age: 11,
//   feature: "毛並みが茶色くて、丸っこい猫です。",
//   interests: ["食事", "昼寝", "夜の散歩"],
//   bio: function () {
//     console.log(`${catObj.name[0]}は${catObj.age}歳の${catObj.feature}`);
//   },
//   greeting: function () {
//     console.log(`にゃおーにゃおにゃお！(${catObj.interests[0]}と${catObj.interests[1]}が大好きな${catObj.name[0]}だよ！)`);
//   }
// }

// catObj.bio();
// catObj.greeting();