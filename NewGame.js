//constructor for start of game

function NewGame(currentWord) {
    this.startNewGame = false;
    this.currentWord = currentWord;
    this.unsolvedWord = [];
    //splits word so you can look at each letter
    this.currentLetters = this.currentWord.split("");
    // console.log(currentLetters);
    this.blanks = this.currentLetters.length;
    // console.log(blanks);
    //creates the underscores for the unsolved puzzle
    this.unsolved = function() {
        for (var i = 0; i < this.blanks; i++) {
            this.unsolvedWord.push("_");
        };

    };
}



module.exports = NewGame;