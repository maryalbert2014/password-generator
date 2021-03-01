// Assignment Code
var specialcharecter = ["!","@"]
var numbercharecter = ["1","2"]
var lowercharecter = ["a","b"]
var uppercharecter = ["A","B"]

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
