// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log("text")

// var special characters && ! @ # 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Prompt for pw length

// Decisions based on user input

// one collection of possibilities that starts at 0

// If NULL then repeat question

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);