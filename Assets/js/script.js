// Assignment code here
// prompt(how long your password? 8 - 128)
// this would prob be

// do you want it to have capital letters?
const lowerCase = 
[];
// an array filled with every capital letter?

//do you want it to have lower case letters?
// const capital =
// ["A", "B", "C", "D", "E",
// "F", "G", "H", "I", "J",
//  "K", "L", "M", "N", "O",
//   "P", "Q", "R","S","T","U",
//   "V","W","X","Y","Z"];
//do you want numbers?
//an array with 0-9
// const numbers =[
// "1","2","3","4","5","6","7","8","9","0"

// ];
// const symbols =[
//   "!","@","#","$","%","^","&","*",")","?"
  
//   ];

// let lowerCaseandCapitals = [].concat(lowerCase,capital);

// let lowercaseCapitalsAndSymbols = [].concat(lowerCase, capital,numbers);

// let lowerCaseandSymbols = [].concat(lowerCase, symbols)

// let lowercaseAndNumbers = [].concat(lowerCase, numbers);

// let lowerCaseNumbersSymbols = [].concat(lowerCase, numbers, symbols)

// let all = [].concat(lowerCase, capital, numbers, symbols);




//do you want any of these: *&^$@%!^
//an array with all the symbols

//ok
//one sec
//pw appears in box


//this collects user input for password
// 
var checkLength = function() {
  
  steve = prompt("how long should we make it?");

  // validate prompt answer
  if (steve === "" || steve === null) {
    window.alert("You need to provide a valid answer! Please try again.");
    // use return to call it again and stop the rest of this function from running
    
    return checkLength();
  }
  if(steve <8){
    window.alert("Ytoo low.");
    // use return to call it again and stop the rest of this function from running
    
    return checkLength();
  }
  if(steve >128){
    window.alert("too high.");
    // use return to call it again and stop the rest of this function from running
    
    return checkLength();
  }

}


function generatePassword()
{
 lowerCase.length = 0;
  alert("I heard you want a password");
    

    checkLength();
    
    let password = "";
var lowerCaseAdd = confirm("do you want lowercase?");
 var capitals = confirm("do you want capitals?");
   var numbers = confirm("numbers?");
   var symbols = confirm("symbols?")
   if(lowerCaseAdd)
 {
   lowerCase.push("a", "b", "c", "d", "e",
   "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o",
     "p", "q", "r","s","t","u",
     "v","w","x","y","z");
 }
 if(capitals)
 {
   lowerCase.push("A", "B", "C", "D", "E",
   "F", "G", "H", "I", "J",
    "K", "L", "M", "N", "O",
     "P", "Q", "R","S","T","U",
     "V","W","X","Y","Z");
 }
 if(numbers){
  lowerCase.push("1","2","3","4","5","6","7","8","9","0");
}
if(symbols)
{
  lowerCase.push("!","@","#","$","%","^","&","*",")","?");
}
if(lowerCase.length === 0)
{
  alert("whoops, no value")
  generatePassword();
}
 //find out how to make it not save the values

 
password = capsAndLower(password);

//  symbols = confirm("symbols");


 console.log(password);
       return password;

 }
 
 











// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function capsAndLower(password) {
  for (var i = 1; i <= steve; i++) {
    let generate = lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += generate;
  }
  return password;
}
// function justLower(password) {
//   for (var i = 0; i <= cunt; i++) {
//     let generate = capital[Math.floor(Math.random() * capital.length - 1)];
//     password += generate;
//   }
//   return password;
// }
// function capsAndLowerAndNumbers(password) {
//   for (var i = 0; i <= cunt; i++) {
//     let generate = lowercaseCapitalsAndSymbols[Math.floor(Math.random() * lowercaseCapitalsAndSymbols.length - 1)];
//     password += generate;
//   }
//   return password;
// }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  //this creates a variable and sets it it equal to
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//here lies the code that I tried, but didn't use. Still curious if .concacting these strings would have
// more efficient. I also get the feeling that I could have made this in a better