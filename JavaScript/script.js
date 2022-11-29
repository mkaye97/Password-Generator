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
var charSetMain = {
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

  // Confirms if the password should include upper case leters.
  var capCheck = window.prompt("Should your password use upper case letters? (Enter 'Y' for Yes, or 'N' for No)");
  capCheck = capCheck.toUpperCase();
  var capConfirm = (capCheck === confirmation[0] || capCheck === confirmation[1]);

  // Cancels criteria questions and displays alert for invalid entry.
  if (capConfirm === false) {
     window.alert("Invalid entry.");
      return;
  }
 
  // Confirms if the password should include lower case leters.
  var lowCheck = window.prompt("Should your password use lower case letters? (Enter 'Y' for Yes, or 'N' for No)");
  lowCheck = lowCheck.toUpperCase();
  var lowConfirm = (lowCheck === confirmation[0] || lowCheck === confirmation[1]);
  
  // Cancels criteria questions and displays alert for invalid entry.
  if (lowConfirm === false) {
  window.alert("Invalid entry.");
  return;
  }
  
  // Confirms if the password should include numbers.
  var numCheck = window.prompt("Should your password use numbers? (Enter 'Y' for Yes, or 'N' for No)");
  numCheck = numCheck.toUpperCase();
  var numConfirm = (numCheck === confirmation[0] || numCheck === confirmation[1]);
  
  // Cancels criteria questions and displays alert for invalid entry.
  if (numConfirm === false) {
  window.alert("Invalid entry.");
  return;
  }

  // Confirms if the password should include special characters.
  var specCheck = window.prompt("Should your password use special characters? (Enter 'Y' for Yes, or 'N' for No)");
  specCheck = specCheck.toUpperCase();
  var specConfirm = (specCheck === confirmation[0] || specCheck === confirmation[1]);
    
  // Cancels criteria questions and displays alert for invalid entry.
  if (specConfirm === false) {
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
