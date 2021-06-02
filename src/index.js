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

const func4 = (num1, num2) => {
  return num1 + num2;
};

console.log(func4(10, 20));
