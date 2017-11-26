//constructor to get a random word.
function Word() {
    this.wordList = ['hammer', 'plaster', 'painting', 'drilling', 'repairs', 'toilet', 'electrician', 'contractor', 'hangman', 'bathroom', 'nails', 'drywall', 'garage', 'ceiling'];
    this.newWord = this.wordList[Math.floor(Math.random() * this.wordList.length)];
}
module.exports = Word;