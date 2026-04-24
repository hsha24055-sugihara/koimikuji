//おみくじの結果を配列で用意
const fortunes = [
    "大吉　💕　素敵な出会いがあるかもしれないヨ！",
    "中吉　(^_-)-☆　少し勇気を出すとよいことが起きるかも",
    "小吉　^^　今日はゆっくり過ごしちゃお",
    "凶；＾；　無理せず慎重に行動してみよー",
];
//ボタンと表示エリアを取得
const button = document.getElementById("omikuji-bt");
const result = document.getElementById("result");

//ボタンがクリックされたときの処理
button.addEventListener("click",function () {
    //ランダムな数字を作る
    const randomNumber = Math.floor(Math.random() * fortunes.length);

    //結果を表示
    result.textContent = fortunes[(randomNumber)];
})
