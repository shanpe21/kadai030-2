// let sei = ("浦住");
// let mei = ("峻平");


// alert( sei +" " + mei )

// let a = "1"
// let b = 100
// let add = a + b
// alert(add) ;

// let a = 1 ;
// a +=10 ;
// a +=10 ;
// alert(a);

// const a = 8;
// if(a===10){
//     alert("10だよ");
// }
// else if(a===12){
//     alert("12だよぉ");
// }
// else if(a>10){
//     alert("10より大きいよ");
// }

// const b =19;
// if(b!= 8 ){
//     alert("8以外です");
// }
// else{
//     alert("8です");
// }

// function strfnc(){
// var str = "関数を知らない";
// alert(str);
// }

// strfnc();
// strfnc();
// strfnc();



// console.log("test");
// console.log("test2");
// console.log("test3");



// // 足し算する関数
// function add(a1,a2,en){
//     if(en==="+"){
//         var n = a1 + a2 ;
//         return n ;
//     }
//     if(en==="-"){
//         var n = a1 - a2 ;
//         return n ;
//     }
// }
// var t = add(20,15,"-")
// alert(t);

// 必ず少数の何かの数字を計算してくれる//
// const r = Math.random();
// alert(r);


//じゃんけんのロジック「1-3をランダムで出す」
// const r1 = Math.ceil(Math.random()*3 + 1);
// const r2 = Math.ceil(Math.random()*3 + 1);


//プレイヤー1の出し手
// if(r1===1){
//     alert("グー");
// }
// else if(r1===2){
//     alert("チョキ");
//     }
// else if(r1===3){
//     alert("パー");
// }

// //プレイヤー２の出し手
// if(r2===1){
//     alert("グー");
// }
// else if(r2===2){
//     alert("チョキ");
//     }
// else if(r2===3){
//     alert("パー");
// }

// if(r1=r2){
//     alert("アイコ");
// }
// else if(){

// }

// function rand(n){
//     var r =Math.floor(Math.random()*n+1);
//     return r ;
// }

// var t = rand(5);
// $("#rand").html(t);

// ドキュメントの呼び出し

// const a1 = document.querySelector(".title-sub");
//     a1.style.color="#ff0000";
//     a1.style.fontSize="50px";
//     // a1.innerHTML="書き替わる";


// ボタンの練習

// const btn = document.querySelector("#startButton");
// btn.onclick = function(e){
//     alert("クリックしました");
// }

// function rand(n){
//     var r =Math.floor(Math.random()*n+1);
//     return r ;
// }


$("#startButton").on("click",function(){
// 乱数処理
const r = Math.ceil(Math.random()*40);

// if分

let view = "";

// ブーケをプレゼント
if(r==1){
    view = "ブーケを一つプレゼント"
}
else if(r>=2 && r<=6){
    view = "偶然配達無料体験チケット";
}

else if(r>=7 && r<=16){
    view = "お好きなお花をもう一本！";
}

else if(r>=17 && r<=40){
    view= "ハズレです〜"
}


$(".result").html(view);

});


