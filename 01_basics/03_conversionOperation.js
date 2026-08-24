let score = "true"
console.log(typeof score);

let valueInNumber = Number(score);

console.log(typeof valueInNumber);

console.log(valueInNumber); //NaN (Not A Number)


/* 
"33" => 33
"33abc" => NaN
true => 1; false => 0
*/

let isLoggedIn = "jkl";

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);

/* 
1 => true
0 => false
"Faris" => true
"" => false
*/

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(typeof stringNumber);
console.log(stringNumber);