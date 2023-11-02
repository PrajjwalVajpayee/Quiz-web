document.addEventListener('DOMContentLoaded', function () {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const ageinput = document.getElementById('age');
    const signinButton = document.getElementById('signin-button');

    signinButton.addEventListener('click', function () {
        // Get user input values
        const name = nameInput.value;
        const email = emailInput.value;
        const  age= ageinput.value;

        // Check if the fields are not empty
        if (name && email && age) {
            // Save user details in local storage
            const userDetails = {
                name: name,
                email: email,
                age: age
            };

            // Convert to JSON and save in local storage
            localStorage.setItem('userDetails', JSON.stringify(userDetails));

            // Redirect to the instructions page
            redirectToInstructions();
        } else {
            alert('Please fill in all fields.');
        }
    });

    function redirectToInstructions() {
        
        window.location.href = 'instruction.html';
    }
});
const questions = [
   {
       question_id: '0',
       question: 'Which of the following is a browser?',
       options: [
           { option: 'Java' },
           { option: 'Google Chrome' },
           { option: 'Python' },
       ],
       correct_answer: 'Google Chrome'
   },

   {
       question_id: '1',
       question: 'What is the full form of CPU?',
       options: [
           { option: 'Control Processing Unit' },
           { option: 'Combined Processing Unit' },
           { option: 'Central Processing Unit' },
       ],
       correct_answer: 'Central Processing Unit'
       
   },

   {
    question_id: '2',
    question: 'What is the full form of CSS?',
    options: [
        { option: 'Cascade style sheet' },
        { option: 'Cascading Stylesheet' },
        { option: 'cascading sheet' },
    ],
    correct_answer: 'Cascading Stylesheet'
},

   {
       question_id: '3',
       question: 'CSS stands for Cascading Stylesheet',
       options: [
           { option: 'True' },
           { option: 'False' },
       ],
       correct_answer: 'True'
   },
]


const starQuizBtn = document.querySelector(".start-quiz-btn");
const quizContainer = document.querySelector(".quiz-container");
const nextBtn = document.querySelector(".next-btn");
const skipBtn = document.querySelector(".skip-btn");
const quizResultContainer = document.querySelector(".quiz-result-container");
const quizOverlay = document.querySelector(".quiz-overlay");
const quizCloseBtn = document.querySelector(".quiz-close-btn");
const retakeQuizBtn = document.querySelector(".retake-quiz-btn");
const optionsContainer = document.querySelector(".options-container");
const resultHeading = document.querySelector(".result-heading");
const scoreText = document.querySelector(".score-text");
const question = document.querySelector(".question");




let questionNumber = 0;
let totalQuestion = questions.length;
let userAnswer = "";
let userScore = 0;


const init = () => {
   questionNumber = 0;
   userScore = 0;
   nextBtn.innerText = "Next";
}


// Start Button

starQuizBtn.addEventListener('click', () => {
   init();
   quizContainer.classList.add("active");
   quizOverlay.classList.add("active");
   displayQuestions(questionNumber);
})

// skip Button
function toggleSkipButtonVisibility() {
    if (questionNumber === totalQuestion - 1) {
        skipBtn.style.display = "none"; 
    } else {
       
    }
 }
  //      timer
  // Set the time limit to 15 seconds
const timeLimit = 15;
let countdown; // To store the timer interval

function startTimer() {
    const timerElement = document.getElementById("timer");
    let timeLeft = timeLimit; // Start with the time limit
    clearInterval(countdown);
    countdown = setInterval(() => {
        
        if (timeLeft > 0) {
            timerElement.innerText = timeLeft;
            timeLeft--;
        }
        if (timeLeft === 0&&questionNumber<totalQuestion) {
                 // Change the question when time is 0
                 questionNumber++;
                 displayQuestions(questionNumber);
                 timeLeft = timeLimit;
        }    
        if (questionNumber === totalQuestion - 1) {
            skipBtn.style.display="none";   
           nextBtn.innerText = "Finish";
           nextBtn.style.marginLeft="160px";
          }
        if ( timeLeft === 0  ) {
                     // Show the result if it's the last question
                     showResult();
                     clearInterval(countdown);
                 } 
                //  else {
                //      displayQuestions(questionNumber);
                //       // Reset the timer for the next question
                //     //  clearInterval(countdown);
                //  }
             
        
    }, 1000);
}

//        showQuestion


// skip btn
skipBtn.addEventListener("click", () => {
    questionNumber++;
    
    if( userAnswer = ""){
        
    }
    if (questionNumber == totalQuestion - 1) {
        nextBtn.innerText = "Finish";
        skipBtn.style.display="none";
        nextBtn.style.marginLeft="160px";
    
    }
    if (questionNumber < totalQuestion) {

        displayQuestions(questionNumber);
    } else {
        quizResultContainer.classList.add("active");
        showResult();
        quizContainer.classList.remove("active");
    }
 })
// Next Button

nextBtn.addEventListener("click", () => {
   checkAnswer();
   questionNumber++;
   if (questionNumber == totalQuestion - 1) {
     skipBtn.style.display="none";   
    nextBtn.innerText = "Finish";
    nextBtn.style.marginLeft="160px";
   }
   if (questionNumber < totalQuestion) {
       displayQuestions(questionNumber);
   } else {
       quizResultContainer.classList.add("active");
       showResult();
       quizContainer.classList.remove("active");
   }
})
// Close Button
quizCloseBtn.addEventListener("click", () => {
   quizResultContainer.classList.remove("active");
   quizContainer.classList.remove("active");
   quizOverlay.classList.remove("active");
})


// Retake Quiz Button
function redirectToSignup() {
      
    window.location.href = 'index.html';
 }
retakeQuizBtn.addEventListener("click", () => {
   init();
   quizResultContainer.classList.remove("active");
   quizContainer.classList.add("active");
   redirectToSignup();
})


// Store Answer

const storeAnswer = (o) => {
   if (o) {
       userAnswer = o.target.nextElementSibling.innerText;
   } else {
       userAnswer = "";
   }
}


// Check Answer

const checkAnswer = () => {
   if (userAnswer == questions[questionNumber].correct_answer) {
       userScore++;
   } 
}


// Display Questions

const displayQuestions = (qNo) => {
   question.innerText = questions[qNo].question;

   optionsContainer.innerHTML = "";

   questions[qNo].options.forEach((o, oIndex)=> {
       const optionRadioButton = document.createElement("input");
       optionRadioButton.type = "radio";
       let optionId = "option" + oIndex;
       optionRadioButton.id = optionId;
       optionRadioButton.name = "option";
       optionRadioButton.addEventListener("change", storeAnswer);

       const optionLabel = document.createElement("label");
       optionLabel.htmlFor = optionId;
       optionLabel.classList.add("option");
       optionLabel.innerText = o.option;

       optionsContainer.appendChild(optionRadioButton);
       optionsContainer.appendChild(optionLabel);
       startTimer(15);
   })
}

displayQuestions(questionNumber);


// Show the result

function showResult() {
   let percentage = (userScore/totalQuestion) * 100;

   if (percentage >= 60) {
       resultHeading.innerText = "Congratulations "+localStorage.getItem('username')+"!";
   } else {
       resultHeading.innerText = "You can do better "+localStorage.getItem('username');
   }

   scoreText.innerText = `You have scored ${userScore} out of ${totalQuestion}.`;
}