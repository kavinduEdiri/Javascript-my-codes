  function calc(num1,num2){
  		let total=num1+num2;
      console.log(total);
  }
  
  
  calc(10,20);

========================================

let calc=(num1=10,num2=20)=>num1 +num2;

let num1=50;
let num2=60;

console.log(calc());
console.log(calc(num1,num2));