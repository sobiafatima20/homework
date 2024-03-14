//9-3-2024
//Home Work 1

let a : number = 5;
let b : number = 2;
let c : number;
//      6     5      1   0     5    3    2
c = ++a + a++ + --b + b-- + a + b++ + b;
console.log(c)

//Home work 2

let num1 : number = 2;
let num2 : number = 4;
//addition
console.log(num1 + num2);
//subtraction
console.log(num1 - num2);
//multiplication 
console.log(num1 * num2);
//division
console.log(num1 / num2);
//exponential
console.log(num1 ** num2);
//module
console.log(num1 % num2);

//BMI calculator

let weightInKg = 50;
let heightInMeters = 1.56;
let bmi =  weightInKg / (heightInMeters * heightInMeters)
console.log(`Your BMI is ${bmi}`);