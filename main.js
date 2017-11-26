var Word = require("./newWord.js");
var NewGame = require("./NewGame.js");
var inquirer = require("inquirer");
var Letter = require("./letter.js");
var lettersLeft = 13;
var currentLetters = [];
var unsolvedWord = [];
// var letters = /^[a-z]+$/;
var guessedLetter = "";
var lettersGuessed = [];

// var newWord = new Word();
// console.log("new word is " + newWord.newWord);
// var NewGame = new NewGame(newWord.newWord);

function getLetters() {
    inquirer.prompt({
        name: "userGuess",
        message: "Guess a lower case letter",
        // validate: function(value) {
        //     if (isNaN(value) === false && value.value.match(letters)) {
        //         return true;
        //     } else {
        //         return false;
        //     }
        // }

    }).then(function(answers) {
        guessedLetter = answers.userGuess;
        var game = new Letter((NewGame.currentLetters), unsolvedWord, guessedLetter, lettersGuessed);
        game.checkLetter();
        // console.log(game);
        unsolvedWord = game.unsolvedWord;
        lettersGuessed = game.lettersGuessed;
        console.log("\n" + (unsolvedWord).join(" ") + "\n");
        // console.log("letters Already guessed: " + game.lettersGuessed);
        if ((NewGame.currentLetters).toString() == unsolvedWord.toString()) {
            console.log("WINNER");
            lettersLeft = 0;
        }
        if (!(game.letterInWord) && (!(game.alreadyGuessed))) {
            // console.log("game already guessed= " + game.alreadyGuessed)
            // console.log("wrong");
            lettersLeft--
            console.log("Guesses left: " + (lettersLeft - 1) + "\n");
        }

        if (lettersLeft > 1) {
            // console.log("guess another letter");
            getLetters();
        } else {
            if (lettersLeft == 1) {
                console.log("LOSER");
            }
            startGame();
        }

    })
}

function startGame() {
    newWord = new Word();
    console.log("new word is " + newWord.newWord);
    NewGame = new NewGame(newWord.newWord);
    NewGame.unsolved();
    // console.log(NewGame);
    unsolvedWord = NewGame.unsolvedWord
    console.log("\n" + (unsolvedWord).join(" ") + "\n");

    getLetters();
}
startGame();