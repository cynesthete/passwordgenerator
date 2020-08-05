// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log("text")

// var special characters && ! @ # 

// Write password to the #password input

function writePassword() {
  var howMuch = prompt ("Specify number of characters");
  if (howMuch < 8) {
    alert("No. 8-128 characters only.");
  }
  console.log(howMuch)
  if (howMuch >=8) {
    var specialChar = prompt("Include special characters? (yes or no)");
    var number = prompt("Include numbers? (yes or no)");
    var lowCase = prompt("Include lower case characters? (yes or no)");
    var upCase = prompt("Include upper case characters? (yes or no)");
    console.log(specialChar);
    console.log(number);
    console.log(lowCase);
    console.log(upCase);
  }
}


//  var password = generatePassword();
//  var passwordText = document.querySelector("#password");

//  passwordText.value = password;

// Decisions based on user input

// one collection of possibilities that starts at 0

// one collection of possibilities that starts at "A"

// ability to designate between upper and lowercase letters

// one collection of possibilities that includes special characters

// If NULL then repeat question

// Prompts: What characters does the password need to contain?



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);