//varaibles and constant...
const accountId = 133442;
let accountEmail = "faris@gmail.com";
var accountPassword = "12345";
accountCity = "Islamabad"; //not preferred
let accountState; //undefined

//accountId = 2; not allowed 
accountEmail = "faris@example.com";
accountPassword = 123123;
accountCity = "Lahore";

console.log(accountId);

/*
Prefer not to use var why?
because of issue in block scope and functional scope!
*/ 
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
