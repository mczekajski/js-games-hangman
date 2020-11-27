class Game {
  constructor({
    lettersWrapper,
    categoryWrapper,
    wordWrapper,
    outputWrapper,
  }) {
    this.lettersWrapper = lettersWrapper;
    this.categoryWrapper = categoryWrapper;
    this.wordWrapper = wordWrapper;
    this.outputWrapper = outputWrapper;
  }

  start() {
    for (let i = 0; i<26; i++) {
        const label = (i+10).toString(36);
        const button = document.createElement('button');
        button.innerText = label;
        this.lettersWrapper.appendChild(button);
    }
  }
}
