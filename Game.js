const word = ['aztecs', 'tritons', 'knights', 'toreros']

var alphabet = [
    "a", "b", "c",
    "d", "e", "f",
    "g", "h", "i",
    "j", "k", "l",
    "m", "n", "o",
    "p", "q", "r",
    "s", "t", "u",
    "v", "w", "x",
    "y", "z"
];

var randNum = Math.floor(Math.random() * word.length); 

function displayGuesses(number) {
document.getElementById("guesses-left").innerHTML = 10;
} 
document.getElementById("word-blanks").innerHTML = underScore;
guessesLeft = 10;

document.getElementById("word-guesses").innerHTML = wrongLetter;
  
document.onkeyup = function (event) {
  var keyComman = event.key;
  keyCommand = keyCommand.toUpperCase();
  if (keyCommand in alphabet) {
    correctTimesInAnswer = 0;
    answerSoFar = "";
}
  
 // Win, Lose alerts
 function winLose(){
   if(winCounter === randomNum.length){
     alert('Winner!!');
 }
 else if(guessLeft === 0){
   alert('GAME OVER!!');
 } 
  
  