// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Check input from User
function passwordChar(userCharacters) {
  if (Number.isNaN(userCharacters)) {
    alert("Valid Number must be entered");
    return false;
  } else if (Number.parseInt(userCharacters) <8) {
    alert("Password needs be at least 8 characters");
    return false;
  } else if (Number.parseInt(userCharacters) >=128) {
    alert("Password can not exceed 128 characters");
    return false;
  }
  return true;
}

// Need to prompt user to provide password options
function generatePassword() {
  var userCharacters = prompt(
    "How many characters should the password include?"
  );
  var passwordIncld = passwordChar(userCharacters);
  if (passwordIncld) {
    
    var inclNumCharacters = confirm(
      "Numbers Characters Confirmed"
    );
    
    var inclLowCaseCharacters = confirm(
      "Lower Case Characters Confirmed"
    );
    
    var inclUpCaseCharacters = confirm(
      "Upper Case Characters Confirmed"
    );
    
    var inclSpecCharacters = confirm(
      "Special Characters Confirmed"
    );
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

// Numeric Characters Array
var numCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Lowercase Characters Array
var lowerCaseCharacters = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Uppercase Characters Array
var upperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Special Characters Array
var specCharacters = ["@", "(", ")", "{","}", "[", "]", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", "~", "-", "_", "."]

