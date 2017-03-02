//Pseudocode
//We will have an array where each index of the array is an object (question)
//
//Create a function to find 10 random questions out of the questions array
//      that funntion will push the questions into a new array
//
//Have a loop that cycles through the new array of questions (10 total);
//  each question will pop up in the html display and a timer will countdown from 20
//  
//When an answer is submitted we store the value and compare it to the correct, if correct push it to
//  a correct answer array and if wrong push it to a wrong answer array
//  if an answer is not submitted in the alloted time it goes into the wrong array
//
//After all questions are answers show a score out of 10 how many are correct
//  actually show right/wrong answers
//
//when picking a question to display we will use a function that also manipulates the dom elements
//  of our html file
//

var questionBank = [{
    question: "Who shot Glenn in the season 5 finale?",
    answers: ["Morgan", "Gabriel", "Nicholas", "Carl"],
    imageUrl: "assets/images/glenn-shot.jpg",
    correctAnswer: 2
}, {
    question: "Who shot Carl?",
    answers: ["Glenn", "Dale", "Otis", "Daryl"],
    imageUrl: "assets/images/carl-shot.png",
    correctAnswer: 2
}, {
    question: 'Who said, "We can all live together.  There is enough room for all of us?"',
    answers: ["Hershel", "Rick", "Glenn", "Maggie"],
    imageUrl: "assets/images/live-together.jpg",
    correctAnswer: 1
}, {
    question: "In which US state do all of the episodes take place?",
    answers: ["Florida", "Tennessee", "Virginia", "Georgia"],
    imageUrl: "assets/images/state.jpg",
    correctAnswer: 3
}, {
    question: "Who kills Shane?",
    answers: ["Rick", "A Walker", "Daryl", "Carl"],
    imageUrl: "assets/images/shane.jpg",
    correctAnswer: 0
}, {
    question: "What two characters from the Walking Dead TV Show do not appear in the comic books?",
    answers: ["Daryl and Merle", "Deanna and Aaron", "Glenn and Maggie", "Tyreese and Sasha"],
    imageUrl: "assets/images/comics.jpeg",
    correctAnswer: 0
}, {
    question: "Who kills Otis?",
    answers: ["Hershel", "Walkers", "Shane", "Rick"],
    imageUrl: "assets/images/otis.jpg",
    correctAnswer: 1
}, {
    question: "Who is Milton?",
    answers: ["Andrea's Lover?", "The Governer's brother", "The scientist from Woodbury", "The weapons expert from Woodbury"],
    imageUrl: "assets/images/milton.jpg",
    correctAnswer: 2
}, {
    question: "Who was the first person to call the zombies walkers?",
    answers: ["Andrea", "Shane", "Rick", "Morgan"],
    imageUrl: "assets/images/walkers.jpg",
    correctAnswer: 3
}, {
    question: "What was Hershel's occupation before the zombie apocalypse?",
    answers: ["Pastor", "Teacher", "Veterinarian", "Farmer"],
    imageUrl: "assets/images/hershel.jpg",
    correctAnswer: 2
}];
var triviaQuestions;
//console.log(questionBank);
var initialTimer = 3;
var intervalId;
var counter;
var totalCorrect;
var totalWrong;

//Function used to select 10 questions out of the question bank
function questionSelector() {
    triviaQuestions = [];
    var numberOfQuestions = 10;
    var totalAvailableQuestions = questionBank.length;
    while (triviaQuestions.length < numberOfQuestions) {
        var randomnumber = Math.floor((Math.random() * totalAvailableQuestions));
        if (triviaQuestions.indexOf(randomnumber) > -1) continue;
        triviaQuestions.push(randomnumber);
    }
    startTrivia();

}

//Function to Start the trivia game
function startTrivia() {
    //initialize the total right/wrong variables
    totalCorrect = 0;
    totalWrong = 0;
    counter = 0;
    displayNextQuestion();

}

//Function to display the next quesiton
function displayNextQuestion() {
    var questionToDisplay = $('<h2>').addClass('question').text(questionBank[triviaQuestions[counter]].question);
    var answerButtons = $('<div>').addClass('answers');
    var numberOfAnswers = questionBank[triviaQuestions[counter]].answers.length;
    for (var i = 0; i < numberOfAnswers; i++) {
        var newButton = $('<button>').addClass('answer btn btn-lrg btn-default btn-block').text(questionBank[triviaQuestions[counter]].answers[i])
            .data('index', i).on("click", checkAnswer);
        answerButtons.append(newButton);
    }

    $('#question').empty().append(questionToDisplay, answerButtons);
    intervalId = setTimeout(checkAnswer, 3000);
    console.log(intervalId);
}


//Function to check the answer inputed by the user
function checkAnswer(event) {
    clearTimeout(intervalId);
    console.log("we are inside here");
    console.log(event);
    console.log($(this).data("index"));
    //grab the user choice
    //compare the click event with the correct answer
    //if correct correctanswer++
    //if wrong wronganswer++
    //if you have a next question continue on
    //if you have no questions left display result

}


//Function that resets the timer
var resetTimer = function() {
    initialTimer = 3;
}

//Function that will display and call the run function
var countdownTimer = function() {
    initialTimer--;
    $("#timer").empty().append("Time Remaining: " + initialTimer);
    if (initialTimer < 1) {
        counter++;
        if (counter > triviaQuestions.length - 1) {
            stop();
            alert("Game Over");
        } else {
            console.log(counter);
            $("#question").empty().append(questionBank[triviaQuestions[counter]].question);
            $("#a").empty().append(questionBank[triviaQuestions[counter]].answer1);
            $("#b").empty().append(questionBank[triviaQuestions[counter]].answer2);
            $("#c").empty().append(questionBank[triviaQuestions[counter]].answer3);
            $("#d").empty().append(questionBank[triviaQuestions[counter]].answer4);
            resetTimer();

        }
    }
}




//Function that stops the timer after the 10 questions
var stop = function() {
    console.log("Firing stop function");
    clearInterval(intervalId);
}

//$("#jumbotron").empty().append('<img src =' + questionBank[triviaQuestions[0]].imageUrl + '>');

jQuery(document).ready(function($) {
    console.log("Document Ready");
    $("#start-btn").on("click", function() {
        questionSelector();
        console.log(triviaQuestions);
        $(this).hide();
    });
});
