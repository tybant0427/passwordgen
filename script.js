var numOfChar = 8;
var choiceArr = [];

var numberArr = ['1','2','3','4','5','6','7','8','9','0'];
var lowCaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppCaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var specCharArr = ['~','!','@','#','$','%','^','&','*','?'];


// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var truePrompts = getPrompts();   //true or false based on user input
  var passwordText = document.querySelector("#password");

  if (truePrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;}
  else {
    passwordText.value = "";
  }

}

function generatePassword() {
//Password should generate after prompts are answered 
    var password = "";
    for(var i = 0; i < numOfChar; i++) {
        var randomInd = Math.floor(Math.random() * choiceArr.length);
        password = password + choiceArr[randomInd];
  }
  return password;
}

function getPrompts() {
    choiceArr = [];

    numOfChar = parseInt(prompt("How many characters would you like in your password?"));

    if(isNaN(numOfChar) || numOfChar < 8 || numOfChar > 128) { //these variables should all be false 
      alert("Length of password has to be numerical, 8 - 128 digits.");
      return false;
    }
    if(confirm("Would you like any numbers in your password?")) {
      choiceArr = choiceArr.concat(numberArr);
    }

    if(confirm("Would you like any lowercase letters in your password?")) {
      choiceArr = choiceArr.concat(lowCaseArr);
    }

    if(confirm("Would you like any uppercase letters in your password?")) {
      choiceArr = choiceArr.concat(uppCaseArr);
    }

    if(confirm("Would you like any special characters in your password?")) {
      choiceArr = choiceArr.concat(specCharArr);
    }
      return true;
    }