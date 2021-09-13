
const passwordArray = 
[];

var checkLength = function() {
  
  steve = prompt("hOw LoNg dO YoU WaNt It?");

  // validate prompt answer
  if (steve === "" || steve === null) {
    window.alert("Put a number in, IDIOT!");
    return checkLength();
  }
  if(steve <8){
    window.alert("Too low, DUMBASS!");
    return checkLength();
  }
  if(steve >128){
    window.alert("Too high, FOOL!");
    return checkLength();
  }

}


function generatePassword()
{
 passwordArray.length = 0;
  alert("I heard you want a password");
    

    checkLength();
    
    let password = "";
var lowerCaseAdd = confirm("Do you want lowercase?");
 var capitals = confirm("Do you want capitals?");
   var numbers = confirm("Numbers?");
   var symbols = confirm("Symbols?");
   if(lowerCaseAdd)
 {
   passwordArray.push("a", "b", "c", "d", "e",
   "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o",
     "p", "q", "r","s","t","u",
     "v","w","x","y","z");
 }
 if(capitals)
 {
   passwordArray.push("A", "B", "C", "D", "E",
   "F", "G", "H", "I", "J",
    "K", "L", "M", "N", "O",
     "P", "Q", "R","S","T","U",
     "V","W","X","Y","Z");
 }
 if(numbers){
  passwordArray.push("1","2","3","4","5","6","7","8","9","0");
}
if(symbols)
{
  passwordArray.push("!","@","#","$","%","^","&","*",")","?");
}
if(passwordArray.length === 0)
{
  alert("uhh, what do you expect me to do with this? Do you see anything besides letters, numbers, or symbols on your keyboard? Am I a joke to you? Please, select AT LEAST one of the options, you punk clown.")
  generatePassword();
}
password = capsAndLower(password);
 console.log(password);
       return password;

 }

var generateBtn = document.querySelector("#generate");

function capsAndLower(password) {
  for (var i = 1; i <= steve; i++) {
    let generate = passwordArray[Math.floor(Math.random() * passwordArray.length)];
    password += generate;
  }
  return password;
}



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


// Assignment code here
// prompt(how long your password? 8 - 128)
// this would prob be

// do you want it to have capital letters?
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