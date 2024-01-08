// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var length = parseInt(prompt("How many characters would you like your password to be? (8-128 characters)"));
  
  // Check password length
  while (isNaN(length) || length < 8 || length > 128) {
      alert("Password length must be a number between 8 and 128.");
      length = parseInt(prompt("How many characters would you like your password to be? (8-128 characters)"));
  }

  var hasLowerCased = confirm("Click OK to include lowercase characters.");
  var hasUpperCased = confirm("Click OK to include uppercase characters.");
  var hasNumeric = confirm("Click OK to include numeric characters.");
  var hasSpecial = confirm("Click OK to include special characters.");

  // Check character type selection
  while (!hasLowerCased && !hasUpperCased && !hasNumeric && !hasSpecial) {
      alert("You must select at least one character type.");
      hasLowerCased = confirm("Click OK to include lowercase characters.");
      hasUpperCased = confirm("Click OK to include uppercase characters.");
      hasNumeric = confirm("Click OK to include numeric characters.");
      hasSpecial = confirm("Click OK to include special characters.");
  }

  // Return an object with user input
  return {
      length: length,
      hasLowerCased: hasLowerCased,
      hasUpperCased: hasUpperCased,
      hasNumeric: hasNumeric,
      hasSpecial: hasSpecial
  };
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
  var possibleCharacters = [];
  var finalPassword = "";

  // Add selected character types to pool
  if (options.hasLowerCased) {
      possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
  }
  if (options.hasUpperCased) {
      possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
  }
  if (options.hasNumeric) {
      possibleCharacters = possibleCharacters.concat(numericCharacters);
  }
  if (options.hasSpecial) {
      possibleCharacters = possibleCharacters.concat(specialCharacters);
  }

  // Generate password
  for (var i = 0; i < options.length; i++) {
      finalPassword += getRandom(possibleCharacters);
  }

  return finalPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
