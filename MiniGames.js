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
   "images/anger.jpg",
   "images/happiness.jpg",
   "images/sadness.jpg",
   "images/envy.jpg",
   "images/worry.jpg",
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


//VIDEO QUIZ SECTION
document.addEventListener('DOMContentLoaded', (event) => {

   const video = document.querySelector('#myVideo');
   const questionOneSection = document.querySelector('#questionOneSection');
   const q1Check1 = document.querySelector('#q1Check1');
   const q1Check2 = document.querySelector('#q1Check2');
   const q1Result = document.querySelector('#q1Result');
   const q1resumeButton = document.querySelector('#q1resumeButton');
   const questionTwoSection = document.querySelector('#questionTwoSection');
   const q2Check1 = document.querySelector('#q2Check1');
   const q2Check2 = document.querySelector('#q2Check2');
   const q2Result = document.querySelector('#q2Result');
   const q2resumeButton = document.querySelector('#q2resumeButton');
   const questionThreeSection = document.querySelector('#questionThreeSection');
   const q3Check1 = document.querySelector('#q3Check1');
   const q3Check2 = document.querySelector('#q3Check2');
   const q3Result = document.querySelector('#q3Result');
   const finalScore = this.document.querySelector('#finalScore');
   const q3Button = document.querySelector('#q3Button');
   let i = 0;

   function showQuestions() {
       if ((video.currentTime >= 5) && (video.currentTime <= 5.9)) {
           video.pause();
           video.style.display = 'none';
           questionOneSection.style.display = 'block';
           q1Result.innerHTML = "";
       } else if 
           ((video.currentTime >= 12) && (video.currentTime <= 12.9)) {
           video.pause();
           video.style.display = 'none';
           questionTwoSection.style.display = 'block';
           q2Result.innerHTML = "";
       } else if 
           (video.currentTime >= 19) {
           video.pause();
           video.style.display = 'none';
           questionThreeSection.style.display = 'block';
           q3Result.innerHTML = "";
           finalScore.innerHTML = "";
       };
   };


   function correct1() {
       q1Check1.setAttribute('disabled', '');
       q1Check2.setAttribute('disabled', '');
       q1Result.innerHTML = "CORRECT!";
       i++;
       q1resumeButton.style.display = 'block';
   };

   function incorrect1() {
       q1Check1.setAttribute('disabled', '');
       q1Check2.setAttribute('disabled', '');
       q1Result.innerHTML = "INCORRECT!";
       q1resumeButton.style.display = 'block';
   };
   
   function q1resumeVideo() {
       questionOneSection.style.display = 'none';
       video.style.display = 'block';
       video.currentTime = 6;
       video.play();
   };


   function correct2() {
       q2Check1.setAttribute('disabled', '');
       q2Check2.setAttribute('disabled', '');
       q2Result.innerHTML = "CORRECT!";
       i++;
       q2resumeButton.style.display = 'block';
   };

   function incorrect2() {
       q2Check1.setAttribute('disabled', '');
       q2Check2.setAttribute('disabled', '');
       q2Result.innerHTML = "INCORRECT!";
       q2resumeButton.style.display = 'block';
   };

   function q2resumeVideo() {
       questionTwoSection.style.display = 'none';
       video.style.display = 'block';
       video.currentTime = 13;
       video.play();
   };

   
   function correct3() {
       q3Check1.setAttribute('disabled', '');
       q3Check2.setAttribute('disabled', '');
       q3Result.innerHTML = "CORRECT!";
       i++;
       finalScore.innerHTML = "Your score is " +  i + "/3";
       q3Button.style.display = 'block';
   };

   function incorrect3() {
       q3Check1.setAttribute('disabled', '');
       q3Check2.setAttribute('disabled', '');
       q3Result.innerHTML = "INCORRECT!";
       finalScore.innerHTML = "Your score is " +  i + "/3";
       q3Button.style.display = 'block';
   };


   function playAgain() {
       q1Check1.removeAttribute('disabled', '');
       q1Check2.removeAttribute('disabled', '');
       q2Check1.removeAttribute('disabled', '');
       q2Check2.removeAttribute('disabled', '');
       q3Check1.removeAttribute('disabled', '');
       q3Check2.removeAttribute('disabled', '');
       q1resumeButton.style.display = 'none';
       q2resumeButton.style.display = 'none';
       q3Button.style.display = 'none';
       i = 0;
       questionThreeSection.style.display = 'none';
       video.style.display = 'block';
       video.currentTime = 0;
       video.play();
   };


   video.addEventListener('timeupdate', showQuestions);
   q1Check1.addEventListener('click', correct1);
   q1Check2.addEventListener('click', incorrect1);
   q2Check1.addEventListener('click', correct2);
   q2Check2.addEventListener('click', incorrect2);
   q3Check1.addEventListener('click', correct3);
   q3Check2.addEventListener('click', incorrect3);
   q1resumeButton.addEventListener('click', q1resumeVideo);
   q2resumeButton.addEventListener('click', q2resumeVideo);
   q3Button.addEventListener('click', playAgain);

});
