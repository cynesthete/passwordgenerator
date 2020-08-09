// Assignment Code

//global variables
var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var capLet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowLet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "=", "-", "_", "`", "~", "<", ">", ",", ".", "?"];

// Generate Button Query Selector
var generateBtn = document.querySelector("#generate");
console.log("text")

// Generate pw function
function generatePassword() {
// Specify number of characters
  var howMuch = parseInt(prompt("Specify number of characters"));
// negate queries under 8 characters
  if (howMuch < 8) {
    alert("Not so fast, mortal! 8-128 characters only.");
    return;
  }
  // negate queries over 128 characters
  if (howMuch > 128) {
    alert("That's too many! 8-128 characters only.");
    return;
  }
  // confirms
  console.log(howMuch)
  var specialChar = confirm("Include special characters?");
  var number = confirm("Include numbers?");
  var lowCase = confirm("Include lower case characters?");
  var upCase = confirm("Include upper case characters?");
  console.log(specialChar);
  console.log(number);
  console.log(lowCase);
  console.log(upCase);
// Make it such that user must use at least one type of character
  if (specialChar === false && number === false && lowCase === false && upCase === false) {
    alert("You must use at least one type of character to create a password");
    return;
  }

  // empty arrays
  var passwordStore = [];
  var passwordOptions = [];
  var insurance = [];

  //conditional statements
  if (specialChar === true) {
    passwordOptions = passwordOptions.concat(specChar);
    insurance.push(specChar[Math.floor(Math.random() * specChar.length)]);
  }
  if (number === true) {
    passwordOptions = passwordOptions.concat(num);
    insurance.push(num[Math.floor(Math.random() * num.length)]);
  }
  if (lowCase === true) {
    passwordOptions = passwordOptions.concat(lowLet);
    insurance.push(lowLet[Math.floor(Math.random() * lowLet.length)]);
  }
  if (upCase === true) {
    passwordOptions = passwordOptions.concat(capLet);
    insurance.push(capLet[Math.floor(Math.random() * capLet.length)]);
  }
// for loop + add elements to eo array
  for (var i = 0; i < howMuch; i++) {
  passwordStore.push(passwordOptions[Math.floor(Math.random() * passwordOptions.length)]);
  }

// insurance at index of zero 
// (replacing index at pw store w index at insurance, 
// ensure one type of every character asked for)
  for (var i = 0; i < insurance.length; i++) {
  passwordStore[i] = insurance[i];
}

// return string + concatenate
  return passwordStore.join("");
}

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);