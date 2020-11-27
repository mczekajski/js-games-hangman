import { Quote } from "./Quote.js";

class Game {
  currentStep = 0;
  lastStep = 8;

  quotes = [
    {
      text: "pan tadeusz",
      category: "Utwór literacki",
    },
    {
      text: "janko muzykant",
      category: "Utwór literacki",
    },
    {
      text: "pingwiny z madagaskaru",
      category: "Film",
    },
    {
      text: "wyspa tajemnic",
      category: "Film",
    },
  ];

  constructor({ lettersWrapper, categoryWrapper, wordWrapper, outputWrapper }) {
    this.lettersWrapper = lettersWrapper;
    this.categoryWrapper = categoryWrapper;
    this.wordWrapper = wordWrapper;
    this.outputWrapper = outputWrapper;

    const { text, category } = this.quotes[
      Math.floor(Math.random() * this.quotes.length)
    ];
    this.categoryWrapper.innerHTML = category;
    this.quote = new Quote(text);
  }

  guess(letter, e) {
    e.target.disabled = true;
    if (this.quote.guess(letter)) {
      this.drawQuote();
    } else {
      this.currentStep++;
      document.getElementsByClassName('step')[this.currentStep].style.opacity = 1;
      if (this.currentStep === this.lastStep - 1) {
        this.losing();
      }
    }
  }

  drawLetters() {
    for (let i = 0; i < 26; i++) {
      const label = (i + 10).toString(36);
      const button = document.createElement("button");
      button.innerText = label;
      button.addEventListener("click", (e) => this.guess(label, e));
      this.lettersWrapper.appendChild(button);
    }
  }

  drawQuote() {
    const content = this.quote.getContent();
    this.wordWrapper.innerHTML = content;
    if (!content.includes('_')) {
      this.winning();
    }
  }

  start() {
    document.getElementsByClassName('step')[this.currentStep].style.opacity = 1;
    this.drawLetters();
    this.drawQuote();
  }

  winning() {
    this.wordWrapper.innerHTML = "GRATULACJE! WYGRYWASZ! KONIEC GRY";
    this.lettersWrapper.innerHTML = '';
  }

  losing() {
    this.wordWrapper.innerHTML = "NIESTETY! PRZEGRYWASZ! KONIEC GRY";
    this.lettersWrapper.innerHTML = '';
  }
}

const game = new Game({
  lettersWrapper: document.getElementById("letters"),
  categoryWrapper: document.getElementById("category"),
  wordWrapper: document.getElementById("word"),
  outputWrapper: document.getElementById("output"),
});
game.start();
