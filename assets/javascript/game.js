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
    question: "Who was the actor inside the C-3PO costume?",
    answers: ["Anthony Hopkins", "Kenny Baker", "Anthony Daniels", "Harrison Ford"],
    imageUrl: "assets/images/c3po.jpg",
    correctAnswer: 2
}, {
    question: "What happened to Luke Skywalker's right hand after Darth Vader cut it off with a lightsaber?",
    answers: ["It presumably fell into Bespin's orbit and was never seen again", "Luke abondoned it in the carbon-freezing chamber while fighting Darth Vader", "Luke's friend abroad the Millennium Falcon were able to retrieve it", "Darth Vader kept it"],
    imageUrl: "assets/images/lukes-hand.jpg",
    correctAnswer: 0
}, {
    question: 'Whose "foul stench" did Leia say she recognized on the Death Star?',
    answers: ["Darth Vader", "The Emperor", "Dianoga", "Grand Moff Tarkin"],
    imageUrl: "assets/images/princess-leia-foul-smell.jpg",
    correctAnswer: 3
}, {
    question: "Who adopted Leia at birth?",
    answers: ["Bail Antilles and Ona Antilles", "Bail Organa and Breha Organa", "Owen Lars and Beru Lars", "Obi-Wan Kenobi"],
    imageUrl: "assets/images/baby-leia.png",
    correctAnswer: 1
}, {
    question: "What is Princess Leia's last name?",
    answers: ["Fisher", "Organa", "Antilles", "Amidala"],
    imageUrl: "assets/images/leia-last-name.jpg",
    correctAnswer: 1
}, {
    question: 'Who said, "Adventure.  Excitement.  A Jedi craves not these things."?',
    answers: ["Qui-Gon Jinn", "Obi-Wan Kenobi", "Luke Skywalker", "Yoda"],
    imageUrl: "assets/images/the-force.jpg",
    correctAnswer: 3
}, {
    question: "What's Chewbacca's home planet?",
    answers: ["Bespin", "Kashyyk", "Endor", "Mustafar"],
    imageUrl: "assets/images/chewbacca.jpg",
    correctAnswer: 1
}, {
    question: "What actor physically played Darth Maul?",
    answers: ["Peter Serafinowicz", "Viggo Mortensen", "Ray Parker, Jr.", "Ray Park"],
    imageUrl: "assets/images/darth-maul.jpg",
    correctAnswer: 3
}, {
    question: "Who cut off half of Anakin Skywalker's right arm with a lightsaber?",
    answers: ["Darth Maul", "Obi-Wan Kenobi", "Count Dooku", "General Greivous"],
    imageUrl: "assets/images/anakin-skywalker.jpg",
    correctAnswer: 2
}, {
    question: "What did Luke Skywalker's uncle, Owen, operate on Tatooine?",
    answers: ["Droid repair service", "Speeder repair garage", "Cantina", "Moiusture Farm"],
    imageUrl: "assets/images/luke-farm.jpeg",
    correctAnswer: 3
}, {
    question: "Who did Ewan McGregor's uncle, Denis Lawson, play in the original 'Star Wars' trilogy?",
    answers: ["Lobot", "Bib Fortuna", "Boba Fett", "Wedge Antilles"],
    imageUrl: "assets/images/ewan.jpg",
    correctAnswer: 3
}, {
    question: "Why did Jabba the Hutt send bounty hunters after Han Solo?",
    answers: ["The Empire promised Jabba a handsome reward", "Chewbacca used to be Jabba's slave", "Han killed Greedo", "Han dumped the cargo he was smuggling for Jabba"],
    imageUrl: "assets/images/han-jabba.jpg",
    correctAnswer: 3
}, {
    question: "Who plays Chewbacca?",
    answers: ["Kenny Baker", "David Prowse", "Peter Mayhew", "Rice Baker"],
    imageUrl: "assets/images/chewie-actor.jpeg",
    correctAnswer: 2
}, {
    question: "Who is the only non-Jedi/Sith character to use a lightsaber in the original trilogy?",
    answers: ["Princess Leia", "Han Solo", "Lando Carlissian", "Boba Fett"],
    imageUrl: "assets/images/lightsabers.jpg",
    correctAnswer: 1
}, {
    question: "What fatal flaw did the rebels exploit to destroy the first Death Star?",
    answers: ["Unstable nuclear reactor core", "Unstable hypermatter reactor", "Incomplete structural support", "Exposed thermal exhaust port"],
    imageUrl: "assets/images/deathstar.png",
    correctAnswer: 3
}, {
    question: "What micro-organisms are said to be conductors of the Force?",
    answers: ["Force ghosts", "Chlorimidians", "Mitochondria", "Midichlorians"],
    imageUrl: "assets/images/the-force1.jpg",
    correctAnswer: 3
}, {
    question: "Whose DNA was used in the creation of the Clone Army?",
    answers: ["Count Dooku", "Boba Fett", "Anakin Skywalker", "Jango Fett"],
    imageUrl: "assets/images/clone-army.jpg",
    correctAnswer: 3
}, {
    question: "Where did Darth Vader reveal himself to be Luke's father?",
    answers: ["Dagobah", "The Death Star", "Endor", "Cloud City"],
    imageUrl: "assets/images/vader.jpg",
    correctAnswer: 3
}, {
    question: "When Luke, Leia, and Han Solo are stuck in the trash compactor, what else is in there with them?",
    answers: ["Gundark", "Dianoga", "Anooba", "Wampa"],
    imageUrl: "assets/images/trash.jpg",
    correctAnswer: 1
}, {
    question: "Who was the actor inside R2-D2?",
    answers: ["David Prowse", "Kenny Baker", "Michael Winslow", "There wasn't an actor inside R2-D2"],
    imageUrl: "assets/images/r2d2.jpeg",
    correctAnswer: 1
}, {
    question: "What was Anakin Skywalker's mom's name?",
    answers: ["Shmi", "Lakshmi", "Beru", "Smee"],
    imageUrl: "assets/images/shmi.jpeg",
    correctAnswer: 0
}, {
    question: "Who played Darth Vader on the set of the movie?",
    answers: ["David Prowse", "Peter Mayhew", "Anthony Daniels", "James Earl Jones"],
    imageUrl: "assets/images/darth-vader.jpeg",
    correctAnswer: 0
}, {
    question: "At the beginning of Episode IV: A New Hope, Princess Leia and her ship are carrying what?",
    answers: ["The main council of the Rebel Alliance", "Untaxed death sticks", "The secret plans to the Death Star", "Escaped prisoners from the Empire"],
    imageUrl: "assets/images/leia-r2.jpg",
    correctAnswer: 2
}, {
    question: "Which two actors have appeared in all the Star Wars films to date (2015)?",
    answers: ["Anthony Daniels and Kenny Baker", "Frank Oz and Harrison Ford", "Mark Hamill and Carrie Fisher", "Peter Mayhew and Anthony Daniels"],
    imageUrl: "assets/images/actors.jpg",
    correctAnswer: 0
}, {
    question: 'Complete the classic line: "Thats no moon its a......"',
    answers: ["Spaceship", "Time Machine", "Droid", "Space Station"],
    imageUrl: "assets/images/x-wing.jpg",
    correctAnswer: 3
}, {
    question: "In the very opening scene of Episode IV: A New Hope, how many engines does the ship carrying Princess Leia have?",
    answers: ["Twelve", "Eleven", "Fourteen", "Ten"],
    imageUrl: "assets/images/leia-ship.jpg",
    correctAnswer: 1
}, {
    question: "What’s on the menu for breakfast with Luke’s Aunt Beru?",
    answers: ["Blue milk", "Red butter", "Purple cereal", "Green toast"],
    imageUrl: "assets/images/breakfast.jpg",
    correctAnswer: 0
}, {
    question: "Which two characters in A New Hope say the line “I have a bad feeling about this”, or a variation on it?",
    answers: ["Obi-Wan and Luke", "Luke and Leia", "Han and Luke", "Han and Obi-Wan"],
    imageUrl: "assets/images/troopers.png",
    correctAnswer: 2
}, {
    question: "When the Millenium Falcon arrives on the Death Star, Han and Luke steal Stormtrooper uniforms. Whose does Luke’s belong to?",
    answers: ["TK-421", "DLT-19", "THX-1138", "TD-4388"],
    imageUrl: "assets/images/luke-han.jpg",
    correctAnswer: 0
}, {
    question: "During the attack on the first Death Star, what is Luke’s call sign?",
    answers: ["Red Nine", "Rogue One", "Red Five", "Red Leader"],
    imageUrl: "assets/images/luke-pilot.jpg",
    correctAnswer: 2
}, {
    question: "What does the acronym in TIE fighter stand for?",
    answers: ["Twin Ion Engine", "Total Imperial Evil", "The Imperial Engine", "Twin Imperial Engine"],
    imageUrl: "assets/images/tie-fighter.jpg",
    correctAnswer: 0
}, {
    question: "Which Captain receives a battlefield promotion to Admiral when Vader Force-chokes his boss before the Battle of Hoth?",
    answers: ["Ozzel", "Veers", "Rieekan", "Piett"],
    imageUrl: "assets/images/choke.jpg",
    correctAnswer: 3
}, {
    question: "Lando’s Cloud City hangs in the atmosphere above which world?",
    answers: ["Bespin", "Tatooine", "Endor", "Yavin"],
    imageUrl: "assets/images/lando.jpg",
    correctAnswer: 0
}, {
    question: "Who is the lead singer of Jabba the Hutt’s house band?",
    answers: ["Droopy McCool", "Sy Snootles", "Max Reebo", "Joh Yowza"],
    imageUrl: "assets/images/jabba-band.jpg",
    correctAnswer: 1
}, {
    question: "When Princess Leia dresses as a bounty hunter to rescue Han in Return Of The Jedi, what name does she use?",
    answers: ["Bossk", "Boba Fett", "Boushh", "IG-88"],
    imageUrl: "assets/images/leia-hunter.jpg",
    correctAnswer: 2
}, {
    question: "What do the Ewoks threaten to do to Han Solo?",
    answers: ["Roast him over a spit", "Hang him upside down over a scorpion pit", "Burn him at the stake", "Crush him under a log"],
    imageUrl: "assets/images/ewoks.jpg",
    correctAnswer: 0
}, {
    question: "On what planet does Jabba the Hutt live?",
    answers: ["Coruscant", "Tattooine", "Bespin", "Alderaan"],
    imageUrl: "assets/images/jabba.jpeg",
    correctAnswer: 1
}, {
    question: "Which Steven Spielberg character appears in the Imperial Senate in Phantom Menace?",
    answers: ["E.T.", "A velociraptor", "Shark from Jaws", "Indiana Jones"],
    imageUrl: "assets/images/senate.jpg",
    correctAnswer: 0
}, {
    question: "How did Han Solo first acquire the Millennium Falcon?",
    answers: ["He assmebled it from scrap", "He won it in a card game", "He stole it from the Empire", "He salvaged a derelict"],
    imageUrl: "assets/images/millenium-falcon.jpeg",
    correctAnswer: 1
}, {
    question: "What species is Jar Jar Binks?",
    answers: ["Naboo", "Toydarian", "Gungan", "Neimoidian"],
    imageUrl: "assets/images/jarjar.jpeg",
    correctAnswer: 2
}, {
    question: "Under what title does Christopher Lee’s Count Dooku operate?",
    answers: ["Darth Maul", "Darth Sidious", "Darth Tyrannus", "Darth Plagueis"],
    imageUrl: "assets/images/count-dooku.png",
    correctAnswer: 2
}, {
    question: "How many languages does C-3PO claim to speak?",
    answers: ["Around 800,000", "Approximately 6,000,000", "About 10,000,000,000", "Roughly 9000"],
    imageUrl: "assets/images/r2c3.jpg",
    correctAnswer: 1
}, {
    question: "What is the order that results in the massacre of the Jedi by the Clone troopers in Revenge Of The Sith?",
    answers: ["Order 84", "Order 426", "Order 1138", "Order 66"],
    imageUrl: "assets/images/order66.png",
    correctAnswer: 3
}, {
    question: "What are Yoda’s first instructions when he arrives at the Battle of Genosha?",
    answers: ["If Dooku escapes, rally more systems to his cause he will", "To the forward command center take me", "Attack those Federation starships, quickly", "Around the survivors a perimter create"],
    imageUrl: "assets/images/genosha.jpg",
    correctAnswer: 3
}, {
    question: "Who directed The Empire Strikes Back?",
    answers: ["Lawrence Kasdan", "George Lucas", "Irvin Kershner", "Gary Kuntz"],
    imageUrl: "assets/images/empire.jpg",
    correctAnswer: 2
}, {
    question: "What is Admiral Ackbar’s first name?",
    answers: ["Gial", "Adair", "Tamson", "Moff"],
    imageUrl: "assets/images/ackbar.jpg",
    correctAnswer: 0
}, {
    question: "In Empire Strikes Back, according to C-3P0, what are the odds of surviving an asteroid field?",
    answers: ["3,720-1", "4,548-1", "3,862-1", "4,610-1"],
    imageUrl: "assets/images/asteroid.jpg",
    correctAnswer: 0
}, {
    question: "Who had his arm cut off in the Cantina?",
    answers: ["Brea Tonnika", "Baniss Keeg", "Ponda Baba", "Bom Vimdin"],
    imageUrl: "assets/images/cantina.jpg",
    correctAnswer: 2
}];
var triviaQuestions;
var initialTimer = 21;
var intervalId;
var counter;
var totalCorrect;
var totalWrong;
var clickButtonAudio = new Audio("assets/soundclips/Swing02.wav");
var introAudio = new Audio("assets/soundclips/star-wars-theme-song.mp3");
var countdownAudio = new Audio("assets/soundclips/imperial_march.mp3");

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

//Function to display the next question
function displayNextQuestion() {
    countdownAudio.currentTime = 0;
    countdownAudio.play();
    initialTimer = 21;
    console.log(questionBank[triviaQuestions[counter]].question);
    console.log(questionBank[triviaQuestions[counter]].correctAnswer);
    var questionToDisplay = $('<h2>').addClass('question').text(questionBank[triviaQuestions[counter]].question);
    var answerButtons = $('<div>').addClass('answers');
    var numberOfAnswers = questionBank[triviaQuestions[counter]].answers.length;
    for (var i = 0; i < numberOfAnswers; i++) {
        var newButton = $('<button>').addClass('answer btn btn-lrg btn-default btn-block').text(questionBank[triviaQuestions[counter]].answers[i])
            .data('index', i).on("click", checkAnswer);

        answerButtons.append(newButton);
    }

    $(".jumbotron").css('background-image', 'url(' + questionBank[triviaQuestions[counter]].imageUrl + ')');
    $('#question').empty().append(questionToDisplay, answerButtons);

    // console.log(questionBank[triviaQuestions[counter]].imageUrl);
    run();
}


//Function to check the answer inputed by the user
function checkAnswer(event) {
    countdownAudio.pause();
    clickButtonAudio.play();
    clearTimeout(intervalId);
    $("#timer").empty();
    //grab the user choice
    //compare the click event with the correct answer
    //if correct correctanswer++
    //if wrong wronganswer++
    //if you have a next question continue on (displayNextQuestion), else
    //if you have no questions left display result (stop function)
    var userGuess = $(this).data("index");
    console.log(userGuess);
    if (userGuess == questionBank[triviaQuestions[counter]].correctAnswer) {
        totalCorrect++;
        // console.log("you have" + totalCorrect + "correct");
    } else {
        totalWrong++;
        //console.log("you have" + totalWrong + "wrong");
    }
    counter++;
    if (counter < 10) {
        displayNextQuestion();
    } else {
        stop();
    }
}

//Function to run and display the 20 second timer
function questionTimer() {
    initialTimer--;
    $("#timer").empty().append("Time Remaining: " + initialTimer + " seconds");
    if (initialTimer === 0) {
        counter++;
        clearTimeout(intervalId);
        displayNextQuestion();
    }
}

//Function to call the questionTimer every second so that it countsdown
function run() {
    intervalId = setInterval(questionTimer, 1000);
}


//Function that stops the timer after the 10 questions
function stop() {
    console.log("Firing stop function");
    clearInterval(intervalId);
    introAudio.currentTime = 0;
    introAudio.play();
    $(".question").hide();
    $(".answers").hide();
    $("#timer").empty().append("You got " + totalCorrect + " out of 10 correct");
    $("#reset-btn").show().on("click", function() {
        $("#timer").empty()
        questionSelector();
        $(this).hide();
        introAudio.pause();
    })

}

jQuery(document).ready(function($) {
    console.log("Document Ready");
    $("#reset-btn").hide();
    introAudio.play();
    $("#start-btn").on("click", function() {
        questionSelector();
        console.log(triviaQuestions);
        $(this).hide();
        introAudio.pause();
    });
});
