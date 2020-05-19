const a = 211;
let b = a - 5;
console.log(a, b);

// let이 꼭 필요한게 아니라면 const 쓰기

//변수명은 lower case로 쓰고 띄어쓰기할때 대문자 쓰기
const daysOfWeek = ["Mon", "Tus", "Wen", "Thr", "Fri", "Sat", "Sun", true, 13, a, b];
console.log(daysOfWeek);

//object는 {}
const yoonInfo = {
  name:"Yoon",
  age:22,
  gender:"male"
}
console.log(yoonInfo.age);
yoonInfo.age = 25;
console.log(yoonInfo.age);
// yoonInfo라는 object가 const라도 내부의 변수는 변경 가능하다!!
//object 내부에 배열도 가능, object를 배열로 나열 가능.
//array와 object 내부에 콤마(,) 까먹지 말기

function sayHello(name, age){
  return `Hello ${name} you are ${age} years old`;
}

console.log(sayHello("Yoon", 22));


const calculator = {
  plus: function(a, b){
    return a + b;
  },
  minus: function(a, b){
    return a - b > 0 ? a - b : b - a;
  }
}
const plus = calculator.plus(5, 10);
const minus = calculator.minus(1, 10);
console.log(plus);
console.log(minus);