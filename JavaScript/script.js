// Assignment Code
var generateBtn = document.querySelector("#generate");

// Character sets for password
var stringLow = "abcdefghijklmnopqrstuvwxyz";
var stringCap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var stringNum = "1234567890";
var stringSpecChars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~" + '"';

// Values for window prompts
var confirmation = ["Y", "N"];

// Character sets as arrays
var charSet = {
  arrLettersLow: stringLow.split(''),
  arrLettersCap: stringCap.split(''),
  arrNumbers: stringNum.split(''),
  arrSpecChars: stringSpecChars.split('')
}

// Sets password length
function generatePassword() {
  var passLength = window.prompt("How many characters should your password have? (Minimum: 8 Characters, Maximum: 128 Charachters)");
  var largeCriteria = (passLength < 8);
  var smallCriteria = (passLength > 128);

  // Cancels criteria questions and displays alert for invalid entry.
  if (largeCriteria || smallCriteria) {
    window.alert("Invalid entry.");
    return;
  }

  // Confirms if the password should include Capital leters.
  var capCheck = window.prompt("Should your password use capital letters? (Enter 'Y' for Yes, or 'N' for No)");
  capCheck = capCheck.toUpperCase();
  var capTrue = (capTrue === confirmation[0]);
  var capFalse = (capFalse === confirmation[1]);

  // Cancels criteria questions and displays alert for invalid entry. Need to debug to find why an error is returned in Console.
  if (!capTrue && !capFalse) {
    window.alert("Invalid entry.");
    return;
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

