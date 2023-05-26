window.onload = init;

function init() {
   console.log("DOM has loaded");
}

//GUESS THE NUMBER GAME SECTION:
document.addEventListener("DOMContentLoaded", (event) => {
   let guessNumber = document.querySelector("#guessNumber");
   guessNumber.addEventListener("click", function focus() {
      document.querySelector("#guessNumberInput").focus();
   });
});

let secretNumber = 8;

function compareNumbers() {
   let userNumber = document.querySelector("#guessNumberInput");
   let feedback = document.querySelector("#guessNumberHint");

   if (userNumber.value === "") {
      feedback.innerHTML = "Please enter a valid number";
   } else if (secretNumber > userNumber.value) {
      feedback.innerHTML = '"' + userNumber.value + '"' + " is <b>too low</b>";
   } else if (secretNumber < userNumber.value) {
      feedback.innerHTML = '"' + userNumber.value + '"' + " is <b>too high</b>";
   } else if (secretNumber == userNumber.value) {
      feedback.innerHTML = secretNumber + "!" + " is <b>CORRECT!</b>";
   }

   generateP.innerHTML = "";
}

function resetNumber() {
   let generateP = document.querySelector("#generateP");
   let userNumber = document.querySelector("#guessNumberInput");
   let feedback = document.querySelector("#guessNumberHint");

   generateP.innerHTML += "...New Number Generated " + "<br>";
   secretNumber = Math.round(Math.random() * 10);
   userNumber.value = " ";
   feedback.innerHTML = "...";
}

//TYPE THE WORDS GAME SECTION:
document.addEventListener('DOMContentLoaded', (event) => {
   let typeWord = document.querySelector("#typeWord");
   typeWord.addEventListener('click', function focus() {
      document.querySelector("#typeWordInput").focus();
   });
});

const wordBank = [
   "hello",
   "hi",
   "greetings",
   "salutations",
   "hola"
];

function generateWord() {
   let typeWordInput = document.querySelector("#typeWordInput");
   let typeWordFeedback = document.querySelector("#typeWordFeedback");
   let randomWord = document.querySelector("#randomWord");
   let randomEc = Math.floor(Math.random() * wordBank.length);

   randomWord.innerHTML = wordBank[randomEc];
   typeWordInput.value = "";
   typeWordFeedback.innerHTML = "Result...";
}

function compareWords() {
   if (typeWordInput.value == "") {
      typeWordFeedback.innerHTML = "Nothing has been typed!";
   } else if (typeWordInput.value == randomWord.innerHTML) {
      typeWordFeedback.innerHTML = "Nicely done!";
   } else {
      typeWordFeedback.innerHTML = "Oops! There is a typo...";
   }
}

//DESCRIBE THE EMOTIONS GAME SECTION:
document.addEventListener('DOMContentLoaded', (event) => {
   let describreEmotion = document.querySelector('#describeEmotion');
   describreEmotion.addEventListener('click', function focus() {
      document.querySelector('#describeEmotionInput').focus();
   });
});

const imagesBank = [
   "docs/assets/anger.jpg",
   "docs/assets/happiness.jpg",
   "docs/assets/sadness.jpg",
   "docs/assets/envy.jpg",
   "docs/assets/worry.jpg",
];
const answersBank = [
   "anger",
   "happiness",
   "sadness",
   "envy",
   "worry"
];
const hintsBank = [
   "5 letters",
   "9 letters",
   "7 letters",
   "4 letters",
   "5 letters",
];

let image = document.querySelector(".images");
let result = document.querySelector(".describeEmotionsResults");
let i = 0;

window.addEventListener("keydown", function (event) {
   if (event.code === "ArrowRight") {
      next();
   } else if (event.code === "ArrowLeft") {
      previous();
   } else if (event.code === "Enter") {
      reviewAnswer();
   }
});

function next() {
   let image = document.querySelector(".images");
   let result = document.querySelector(".describeEmotionsResults");

   if (i >= imagesBank.length - 1) {
      return false;
   }
   i++;
   image.setAttribute("src", imagesBank[i]);
   result.setAttribute("id", answersBank[i]);
   document.querySelector("#describeEmotionsHint").innerHTML = "Hint: " + hintsBank[i];
   document.querySelector(".inputs").value = "";
   result.innerHTML = "Result...";
}

function previous() {
   let image = document.querySelector(".images");
   let result = document.querySelector(".describeEmotionsResults");

   if (i <= 0) {
      return false;
   }
   i--;
   image.setAttribute("src", imagesBank[i]);
   result.setAttribute("id", answersBank[i]);
   document.querySelector("#describeEmotionsHint").innerHTML = "Hint: " + hintsBank[i];
   document.querySelector(".inputs").value = "";
   result.innerHTML = "Result...";
}

function reviewAnswer() {
   let typeWordInput = document.querySelector(".inputs").value.toLowerCase();
   let answer = document.querySelector(".describeEmotionsResults").id;
   let result = document.querySelector(".describeEmotionsResults");

   if (typeWordInput == answer) {
      result.innerHTML = "CORRECT!";
   } else if (typeWordInput == "") {
      result.innerHTML = "Nothing has been written";
   } else {
      result.innerHTML = "Nope! Try again...";
   }
}