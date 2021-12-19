// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Check input from User
function passwordChar(userCharacters) {
  if (isNaN(userCharacters)) {
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

// Get Selected characters from each char type
function getSelectedCharacters() {
  return allCharacters[Math.floor(Math.random() * allCharacters.length)];
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

  // Check to ensure each char type is used and stops if false
if ([inclNumCharacters, inclLowCaseCharacters, inclUpCaseCharacters, inclSpecCharacters].includes(true))

  // Created an Array to contain character types needed for the password
  var selectCharacters = [];

  // Created an array that will include a one character of each type
  var neededCharacters = [];

  // Create a loop that checks to make sure each character type was included
  if (inclNumCharacters) {
    selectCharacters = selectCharacters.concat(numCharacters);
    neededCharacters.push(
      numCharacters[Math.floor(Math.random() * numCharacters.length)]
    );
  }

  if (inclLowCaseCharacters) {
    selectCharacters = selectCharacters.concat(lowerCaseCharacters);
    neededCharacters.push(
      lowerCaseCharacters[Math.floor(Math.random() * lowerCaseCharacters.length)]
    );
  }

  if (inclUpCaseCharacters) {
    selectCharacters = selectCharacters.concat(upperCaseCharacters);
    neededCharacters.push(
      upperCaseCharacters[Math.floor(Math.random() * upperCaseCharacters.length)]
    );
  }

  if (inclSpecCharacters) {
    selectCharacters = selectCharacters.concat(specCharacters);
    neededCharacters.push(
      specCharacters[Math.floor(Math.random() * specCharacters.length)]
    );
  }

  // For Loop to determine the random characters
  var randomCharacter = [];
  for (var i = 0; i < userCharacters; i++) {
    var character = Math.floor(Math.random() * selectCharacters.length);
    randomCharacter.push(selectCharacters[character]);
  }

  var replace = {};

  // While loop
  while (neededCharacters.length > 0) {
    var replaceChar = Math.floor(Math.random() * randomCharacter.length);
    if (!replace[replaceChar]) {
      // **w3schools** pop removing the last element of the array
      randomCharacter[replaceChar] = neededCharacters.pop();
      replace[replaceChar] = true;
    }
  }
  // **w3schools** join returns the array as a string
  return randomCharacter.join("");

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

