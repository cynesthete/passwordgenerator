// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log("text")

// var special characters && ! @ # (make an array for each)



// Write password to the #password input

function writePassword() {
  var howMuch = prompt ("Specify number of characters");
  if (howMuch < 8) {
    alert("Not so fast, mortal! 8-128 characters only.");
  }
  // need to be able to negate queries over 128 characters
  if (howMuch > 128) {
    alert("That's too many! 8-128 characters only.");
  }
  // subsequent prompts
  console.log(howMuch)
  if (howMuch >=8) {
    var specialChar = confirm("Include special characters?");
    var number = confirm("Include numbers?");
    var lowCase = confirm("Include lower case characters?");
    var upCase = confirm("Include upper case characters?");
    console.log(specialChar);
    console.log(number);
    console.log(lowCase);
    console.log(upCase);
  }

// letter array

// method for changing letter to uppercase toupper

//  var passwordText = document.querySelector("#password");

//  passwordText.value = password;

// Decisions based on user input

// one collection of possibilities that starts at 0

// check for cases when characters are omitted (parse ent; while loop)

// one collection of possibilities that includes special characters

// If NULL then repeat question

//  var password = generatePassword();

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);