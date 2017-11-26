function Letter(word, unsolvedWord, guessedLetter, lettersGuessed) {
    this.word = word;
    this.unsolvedWord = unsolvedWord;
    this.guessedLetter = guessedLetter;
    this.letterInWord = false;
    this.alreadyGuessed = false;
    this.lettersGuessed = lettersGuessed;
    this.checkLetter = function() {
        console.log("\n");
        this.letterInWord = false;
        this.alreadyGuessed = false;
        for (var i = 0; i < this.word.length; i++) {
            if (this.guessedLetter == this.word[i]) {
                this.letterInWord = true;
                this.unsolvedWord[i] = this.guessedLetter;
            }
        }
        if (!this.letterInWord) {
            // console.log("this hit here");
            this.notInWord();
        }
        // else {
        // console.log((this.unsolvedWord).join(" "));
        // }
    };
    this.notInWord = function() {

        // console.log("letttersGuessed= " + (this.lettersGuessed));
        for (var i = 0; i <= this.lettersGuessed.length; i++) {
            // console.log((this.guessedLetter) + " " + (this.lettersGuessed[i]));
            if (this.guessedLetter == this.lettersGuessed[i]) {
                this.alreadyGuessed = true;
                // console.log("true" + this.lettersGuessed);
            }
        }
        if (!(this.alreadyGuessed)) {

            (this.lettersGuessed).push(this.guessedLetter);
            // console.log("argh: " + (this.lettersGuessed).join(" "));
            // console.log("fuck");
        }


    }
}



module.exports = Letter;