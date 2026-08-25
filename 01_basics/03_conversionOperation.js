let score = "true"
//console.log(typeof score);

let valueInNumber = Number(score);

// console.log(typeof valueInNumber);

// console.log(valueInNumber); //NaN (Not A Number)


/* 
"33" => 33
"33abc" => NaN
true => 1; false => 0
*/

let isLoggedIn = "jkl";

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(typeof booleanIsLoggedIn);
// console.log(booleanIsLoggedIn);

/* 
1 => true
0 => false
"Faris" => true
"" => false
*/

let someNumber = null;
let stringNumber = String(someNumber);
// console.log(typeof stringNumber);
// console.log(stringNumber);

/*
33 => "33"
true => "true"
null => "null"
*/

//===================== Operations ===============================

let value = 5;
let negValue = -value;
// console.log(negValue);

/* 
Basic operations
    console.log(2 + 2);
    console.log(2 - 2);
    console.log(2 * 2);
    console.log(2 ** 2);
    console.log(2 / 2);
    console.log(2 % 2);
*/
let str1 = "Hello ";
let str2 = "Faris";
let str3 = str1 + str2;
//console.log(str3);

//to primitive case
// console.log(1 + "2"); //12
// console.log("1" + 2); //12
// console.log(1 + 2 + "2"); //32
// console.log(1 + "2" + 2); //122
// console.log("1" + 2 + 2); //122

// console.log(+true);
// console.log(+"");

//foucus on code readablity don't do it complex thing
let num1 , num2 ,num3;
 num1 = num2 = num3 = 2 + 3; //confusion bad coding 

 let counter = 100;
 ++counter;
 console.log(counter);
 
 //Link to study: 
 // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

 









