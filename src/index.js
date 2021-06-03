/**
 * const,letの変数宣言
 */

// var vall = "var変数";
// console.log(vall);

// vall = "var変数を上書き";
// console.log(vall);

// var vall = "var変数を再宣言";
// console.log(vall);

// let val2 = "let変数";
// console.log(val2);

// val2 = "let変数を上書き";
// console.log(val2);

// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

//val3 = "const変数を上書き";

//const val3 = "const変数を再宣言";

//constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "ワイ",
//   age: 27
// };

// val4.name = "わし";
// val4.address = "三重";
// console.log(val4);

//constで定義した配列はプロパティの変更が可能
// const val5 = ["cat", "dog"];
// val5[0] = "pig";
// val5.push("bird");

// console.log(val5);

/**
 * テンプレートリテラル
 */

// const name = "拓也";
// const age = 27;

// const message = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message);

/**
 * アロー関数
 */

//従来のやり方

// function func1(str) {
//   return str;
// }

// const func1 = function (str) {
//   return str;
// };

// console.log(func1("func1です。"));

//アロー関数

// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

//1行で省略可能
// const func3 = (str) => str;
// console.log(func3("func3です"));

// const func4 = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(func4(10, 20));

//分割代入

// const myprofile = {
//   name: "わに",
//   age: 108
// };

// const message1 = `名前は${myprofile.name}です。年齢は${myprofile.age}歳です。`;
// console.log(message1);

// const { name, age } = myprofile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myprofile = ["わに", 108];

// const message3 = `私の名前は${myprofile[0]}です。年齢は${myprofile[1]}歳です。`;
// console.log(message3);

// const [name, age] = myprofile;
// const message4 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message4);

//デフォルト値、引数

// const SayHello = (name = "ゲスト") => console.log(`こんにちは!${name}さん!`);
// SayHello("わに");

//スプレッド構文

//配列
// const arr1 = [9, 2];

// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1,2,3,4,5];
// const [num1,num2,...arr3] = arr2;

// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr4);
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

//mapやfilterを使った構文
//const nameArr = ["ぼく", "わに", "くま"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番は${nameArr[index]}です。`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

//nameArr.map((name, index) => console.log(`${index + 1}番は${name}です`));

//filter
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "ぼく") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

//参考演算子
//ある条件　？ :trueのとき :falseのとき

// const vall = 1 > 0 ? "trueです。" : "falseです";
// console.log(vall);

//const num = 1300;
//console.log(num.toLocaleString());

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "OK";
// };
// console.log(checkSum(50, 0));

//論理演算子
// const flag1 = false;
// const flag2 = true;

// if (flag1 || flag2) {
//   console.log("1か2はtrueになります");
// }

// if (flag1 && flag2) {
//   console.log("1も２もtrueになります");
// }

// ||は左側がfalseなら右側を返す
// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);

// &&は左側がtrueなら右側を返す
// const num2 = null;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);
