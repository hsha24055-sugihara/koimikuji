const fortunes =[
//おみくじの結果を配列で用意
    "ちょー大吉　（＞＜）　相手から連絡が！！",
    "大吉　(*'▽')　素敵な出会いがあるかもしれないヨ！",
    "中吉　(^_-)-☆　少し勇気を出すとよいことが起きるかも",
    "小吉　^^　今日はゆっくり過ごしちゃお",
    "凶　；＾；　無理せず慎重に行動してみよー",
];
//ボタンと表示エリアを取得
const button = document.getElementById("omikuji-bt");
const omikujiimg = document.getElementById("omikuji-img")
const result = document.getElementById("result");
const advice = document.getElementById("advise");

omikujiimg.innerHTML = "<img src='happy.png'>"

//ボタンがクリックされたときの処理
button.addEventListener("click",function () {
    //ランダムな数字を作る
    const randomNumber = Math.floor(Math.random() * fortunes.length);
    const resultTaxt =  fortunes[(randomNumber)];

    //結果を表示
    result.textContent  = fortunes[(randomNumber)];

    if (resultTaxt.includes("ちょー大吉")) {
        result.style.color = "red";
        advice.textContent = ほんとにその返信でいいのかもう一回考えてみよー;
    }else if (resultTaxt.includes("大吉")) {
        result.style.color = "pink"
        advice.textContent = ちょーかわいく身だしなみを整えておこー;
    }else if (resultTaxt.includes("中吉")) {
        result.style.color = "gray"
        advice.textContent = さりげなくアピールしてみよー;
    }else if (resultTaxt.includes("小吉")) {
        result.style.color = "blue"
        advice.textContent =散歩に行ってみると何か起きる気がする;
    }else if (resultTaxt.includes("凶")) {
        result.style.color = "black"
        advice.textContent = 音楽を聴きながら寝てみると落ち着くヨ;
    }
});
