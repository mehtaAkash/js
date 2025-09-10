const accountId = 14453
let accountEmail = "akash@google.com";// can be change
var accountPassword = "12345"; //can be change
accountCity = "Amritsar"
// accountId = 234; const can't be change
/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.log(accountId)
console.log(accountCity)
console.table([accountId,accountEmail,accountPassword,accountCity]);//we can print the multiple value in tabular form
