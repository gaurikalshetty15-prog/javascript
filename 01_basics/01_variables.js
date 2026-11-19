const accountId = 144553
let accountEmail ="gaurikalshetty02@gmail.com"
var accountPassword ="12345"
accountCity ="jaipur"
let accountState;

// accountId = 2    // not allowed

accountEmail ="g@auri.com"
accountPassword = "1507"
accountCity = "latur"

console.log(accountId);

console.table({accountId, accountEmail, accountPassword, accountCity,accountState})

/*
prefer not to use var 
because of issue in block scope and functional scope
*/