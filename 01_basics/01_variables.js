const accountId = 1234;
let accountName = "Shyam";
var accountEmail = "sm2005@gmail.com";   //Not Preferred as it does not have block or functional scope
accountCity = "Kolkata";                 //Not Preferred without let,const,var
accountName = "Soumyadip";
accountEmail = "soumyadip131@yahoo.com";

console.log(accountId);
console.table([accountEmail,accountName,accountId,accountCity]); //used to print in tabular format
