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

  //inputResult will give random elements and create password to be on screen
  var inputResult = []

  //computer prompts for password input
  var startQuestion = confirm("Give me some rules with which to make a password for you.");
  if (startQuestion) {
    passwordLength = prompt("Choose how long you want this password. *hint more than 8 less than 128");
    if (passwordLength < 8 || passwordLength > 128) {
      passwordLength = prompt("Try again, remember it needs to be between 8 and 128 characters for your password.");
    }
    else {
      confirm("Ok give me the criteria for your password.");
    }
    var caps = confirm("Do you want capital letters in your password?");
    var lower = confirm("Do you want lower case letters in your password?");
    var numbs = confirm("Do you want numbers in your password?");
    var special = confirm("Do you want any special characters in your password?");

    //once confirmed these will send each var array to the var inputarray for random sampling
    if (caps) {
      Array.prototype.push.apply(inputArray, upperCase);
    }
    if (lower) {
      Array.prototype.push.apply(inputArray, lowerCase);
    }
    if (numbs) {
      Array.prototype.push.apply(inputArray, numbers);
    } 
    if (special) {
      Array.prototype.push.apply(inputArray, specialChara);
    }
  }
  
  function randomArrayShuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
     while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
      }
      return array;
  }
  var inputArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '@', '#', '$', '%', '^', '&', '*'];
  randomArrayShuffle(inputArray);
  
  //loop the random values from var inputResults to create password
  function getRandomIndex(inputArray) {
    return Math.floor(Math.random() * passwordLength.length);
  }
  var passChars = []
  for (var i = 0; i < passwordLength; i++) {
    passChar = inputArray.splice(getRandomIndex(inputArray), 1);
    passChars.push(passChar);
  }
  return passChars.join("");
}


