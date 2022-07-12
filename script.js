// Assignment code here
// Character Arrays
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

var speChar = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

var reqCharcters = [];
var holdArray = [];


// User input 
function generatePassword() {
  var finalPass = "";
  var userTotalChar = prompt("How many total characters are needed for your password? Please choose between 8-128");
//verifies numeric entries within range required
  if (parseInt(userTotalChar) < 8) {
    alert("Total number of characters must be at least 8");
    generatePassword();
  }
  else if (parseInt(userTotalChar) > 128) {
    alert("Maximum number of characters is 128");
    generatePassword();
  }
  else if (isNaN(userTotalChar)) {
    alert("Please enter numerical digits only");
    generatePassword();
  }
  else if (userTotalChar === "") {
    alert("Please enter a value");
    generatePassword();
  }
  //verifies requested character types using Booleans
  else {
    var incUpperCase = confirm("Would you like to include Upper Case letters? \nOK for YES \nCancel for NO");

    var incLowerCase = confirm("Would you like to include Lower Case letters? \nOK for YES \nCancel for NO");

    var incNumbers = confirm("Would you like to include numbers? \nOK for YES \nCancel for NO");

    var incSpecialChar = confirm("Would you like to include special characters? \nOK for YES \nCancel for NO");

  };
//creates a new array with requested characters 
  if (incUpperCase) {
    holdArray = holdArray.concat(upperCase);
    reqCharcters.push(upperCase[Math.floor(Math.random() * upperCase.length)]);
  }
  if (incLowerCase) {
    holdArray = holdArray.concat(lowerCase);
    reqCharcters.push(lowerCase[Math.floor(Math.random() * lowerCase.length)]);
  }
  if (incNumbers) {
    holdArray = holdArray.concat(numbers);
    reqCharcters.push(numbers[Math.floor(Math.random() * numbers.length)]);
  }
  if (incSpecialChar) {
    holdArray = holdArray.concat(speChar);
    reqCharcters.push(speChar[Math.floor(Math.random() * speChar.length)]);
  }
 reqCharcters = [...reqCharcters]
  for (var i = 0; i < userTotalChar; i++) {
    var random = Math.floor(Math.random() * holdArray.length); 
    finalPass += holdArray.splice(random, 1);
  }
 
 return finalPass;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
