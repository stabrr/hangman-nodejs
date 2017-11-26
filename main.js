//declatation of variables

var Word = require("./newWord.js");
var NewGame = require("./NewGame.js");
var inquirer = require("inquirer");
var Letter = require("./letter.js");
var lettersLeft = 13;
var currentLetters = [];
var unsolvedWord = [];
var guessedLetter = "";
var lettersGuessed = [];

//function to get letters and check them using inqueirer for input
function getLetters() {
    inquirer.prompt({
        name: "userGuess",
        message: "Guess a lower case letter",
        //failed attempt to validate
        // validate: function(value) {
        //     if (isNaN(value) === false && value.value.match(letters)) {
        //         return true;
        //     } else {
        //         return false;
        //     }
        // }
        //action once letter has been inputted
    }).then(function(answers) {
        //input from inquirer
        guessedLetter = answers.userGuess;
        //constructor of new letter
        var game = new Letter((newGame.currentLetters), unsolvedWord, guessedLetter, lettersGuessed);
        game.checkLetter();
        //update variables
        unsolvedWord = game.unsolvedWord;
        lettersGuessed = game.lettersGuessed;
        //output results of current word unsolved
        console.log("\n" + (unsolvedWord).join(" ") + "\n");
        //check to see if we have a winner
        if ((newGame.currentLetters).toString() == unsolvedWord.toString()) {
            console.log("WINNER");
            lettersLeft = 0;
        }
        //check to see if letter was already guessed
        if (!(game.letterInWord) && (!(game.alreadyGuessed))) {
            lettersLeft--
            console.log("Guesses left: " + (lettersLeft - 1) + "\n");
        }
        //check to see how many wrong guesses are left if still in play get another letter if not loser and start over
        if (lettersLeft > 1) {
            getLetters();
        } else {
            if (lettersLeft == 1) {
                console.log("LOSER");
            }
            startGame();
        }

    })
}

//start function clears out global varables 
function startGame() {
    lettersLeft = 13;
    currentLetters = [];
    unsolvedWord = [];
    lettersGuessed = [];
    //gets new word
    newWord = new Word();
    // console.log("new word is " + newWord.newWord);
    //gets unsolved word
    newGame = new NewGame(newWord.newWord);
    newGame.unsolved();
    // console.log(NewGame);
    unsolvedWord = newGame.unsolvedWord
    console.log("\n" + (unsolvedWord).join(" ") + "\n");

    getLetters();
}

//starts game
startGame();