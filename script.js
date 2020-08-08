// Assignment Code

//global variables
var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var capLet = ["A", "B", ];
var lowLet = ["a", "b", "c",];
var specChar = ["!", "@", "#", "$", "%", ];

var generateBtn = document.querySelector("#generate");
console.log("text")

// var special characters && ! @ # (make an array for each)
function generatePassword() {
  var howMuch = parseInt(prompt("Specify number of characters"));
  if (howMuch < 8) {
    alert("Not so fast, mortal! 8-128 characters only.");
    return;
  }
  // need to be able to negate queries over 128 characters
  if (howMuch > 128) {
    alert("That's too many! 8-128 characters only.");
    return;
  }
  // subsequent prompts
  console.log(howMuch)
  var specialChar = confirm("Include special characters?");
  var number = confirm("Include numbers?");
  var lowCase = confirm("Include lower case characters?");
  var upCase = confirm("Include upper case characters?");
  console.log(specialChar);
  console.log(number);
  console.log(lowCase);
  console.log(upCase);

  if (specialChar === false && number === false && lowCase === false && upCase === false) {
    alert("You must at least one type of character to create a password");
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
    --
  }
  if (lowCase === true) {
    passwordOptions = passwordOptions.concat(lowLet);
    --
  }
  if (upCase === true) {
    passwordOptions = passwordOptions.concat(capLet);
    --
  }

  for (var i = 0; i < howMuch; i++) {
    passwordStore.push(passwordOptions[Math.floor(Math.random() * passwordOptions.length)])
  }
  //insurance at index of zero (replacing index at pw store w inde at insurance, ensure one type of every character asked for)
  for (var i = 0; i < insurance.length; i++) {
    passwordStore[i]=insurance[i];
  }
  // intial getRandom element from array using JS
  //var item = items[Math.floor(Math.random() * items.length)];
  console.log(passwordStore);
  return passwordStore.join("");
}


// Write password to the #password input

function writePassword() {


  // letter array

  // method for changing letter to uppercase toupper

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  // check for cases when characters are omitted (parse ent; while loop)

  // If NULL then repeat question

  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);