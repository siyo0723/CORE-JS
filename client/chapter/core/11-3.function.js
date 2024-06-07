/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// function sum(...args){

// }

// const sum2 = function (...args){

// }




// 함수 선언 → 화살표 함수 (표현)식
//                   rest parameter
let calcAllMoney  = (...rest) => {
  
  let total = 0;

  // for 문 
  // for(let i = 0; i < rest.length; i++){
  //   total += rest[i];
  // }


  // for...of 문
  // for(let value of rest){
  //   total += value;
  // }

  // forEach  => arrow function
  // rest.forEach(function(item){
  //   total += item;
  // })

  // rest.forEach(item => total += item)


  // reduce => arrow function

  // const result = rest.reduce(function(acc,cur){
  //   return acc + cur
  // },0)

  
  return rest.reduce((acc,cur) => acc + cur,0);

};

const result = calcAllMoney(1000,5000,4500,13000);