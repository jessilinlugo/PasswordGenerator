// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var numbers = "0123456789";
var password = 8;
// var confirmedPass = document.querySelector("#placeholder");

// Add event listener to generate button
generateBtn.addEventListener("click", myFunction);

// User's confirmed character selection goes here
confirmedChars = [];
confirmedPass = [];

// User presses button and runs through variables
function myFunction() {
  password = prompt("Heard you need a password, how long?");
  if (password < 8 || password > 128) {
    return;
  }
  var confirmUpperCase = confirm("WOULD YOU LIKE UPPER CASE LETTERS?");
  if (confirmUpperCase) {
    confirmedChars.push(upperCase);
  }
  var confirmLowerCase = confirm("would you like lower case letters?");
  if (confirmLowerCase) {
    confirmedChars.push(lowerCase);
  }
  var confirmNumbers = confirm("Would you like numbers?");
  if (confirmNumbers) {
    confirmedChars.push(numbers);
  }
  var confirmSpecialChars = confirm("Would you like *special* characters?");
  if (confirmSpecialChars) {
    confirmedChars.push(specialCharacters);
  }

  //this puts all the confirmed prompts into one array
  confirmedChars.join();

  //this logs out the confirmed 
  console.log(confirmedChars.join(""));

  //runs loop the number of times provided by the user
  for (var i = 0; i < password; i++) {
    
  //randomizes the selection from the confirmedChars array
   var finalPass = Math.floor(Math.random * confirmedChars.length)

var myJSON = JSON.stringify(finalPass);

   console.log(`Here is your secure password ${myJSON}`);

  //move the randomized characters into a new, empty array
    // confirmedPass.join(finalPass);

    
  };
}



// function writePassword(length){
//   // var = confirmedPass ="";
//   for (var i = 0; i < length; i++ ){
//     result += confirmedChars(Math.random() * confirmedChars.length)
//   }
//   return confirmedPass = document.querySelector("#password");
// }


// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }