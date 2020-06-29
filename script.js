// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Add a function that will prompt the user for input for writing a password.
function generatePassword() {
  //Variables for each user input
  var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var specialChara = ['!', '@', '#', '$', '%', '^', '&', '*'];

  //User tells how long password should be
  var passwordLength = 0;

  //inputArray will have elements from the 4 variable above
  var inputArray = [];

  //inputResult will give random elements
  var inputResult = []

  //computer prompts for password input
  var startQuestion = confirm("Give me some rules with which to make a password for you.");
  if (startQuestion) {
    passwordLength = prompt("Choose how long you want this password. *hint more than 8 less than 128");
  }
}


