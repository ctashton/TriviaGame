// This is a placeholder variable for the interval time setting to be declared later...
var intervalId;
// setting timeLeft to 0
var timeLeft = 0;
// Placeholder for the current question string
var currentQuestion = "";
// Set gameStart to false,
var gameStart = false;
// array of questions to be answered.
var questions = [ 
    { // object holding the question, answers, and the correct answer.
        question: "In what year did Vanilla Ice release 'Ice Ice Baby'?",
        answers: {
            a: '1994', 
            b: '1991', 
            c: '1996', 
            d: '1990' 
        },
        correctAnswer: 'd'
    },
    { // object holding the question, answers, and the correct answer.
            question: "In which year did Alanis Morissette release 'Ironic'?",
            answers: {
                a: '1998', 
                b: '1994', 
                c: '1996', 
                d: '1992'
            },
            correctAnswer: 'c'

    },
    { // object holding the question, answers, and the correct answer.
        question: "The 1996 hit 'Killing Me Softly With His Song' was created by which music group?",
        answers: {
            a: 'TLC', 
            b: 'Fugees', 
            c: 'Salt-N-Pepa', 
            d: 'En Vogue' 
        },
        correctAnswer: 'b'
    },
    { // object holding the question, answers, and the correct answer.
        question: "The band Less Than Jake originated in which city?",
        answers: {
            a: 'Gainesville, Florida', 
            b: 'Chicago, Illinois', 
            c: 'Anaheim, California', 
            d: 'Dayton, Ohio' 
        },
        correctAnswer: 'a'
    },
    { // object holding the question, answers, and the correct answer.
        question: "Who was not a member of the boy band N*SYNC?",
        answers: {
            a: 'Joey Fatone', 
            b: 'JC Chasez', 
            c: 'AJ McLean', 
            d: 'Chris Kirkpatrick' 
        },
        correctAnswer: 'c'
    },
    { // object holding the question, answers, and the correct answer.
        question: "Which of the following is NOT a song from Nirvana's album 'Nevermind'?",
        answers: {
            a: 'Smells Like Teen Spirit', 
            b: 'Lithium', 
            c: 'Come as You Are', 
            d: 'About a Girl' 
        },
        correctAnswer: 'd'
    },
    { // object holding the question, answers, and the correct answer.
        question: "In what year did Public Enemy release the album 'Fear of a black planet?'",
        answers: {
            a: '1994', 
            b: '1990', 
            c: '1992', 
            d: '1991' 
        },
        correctAnswer: 'b'
    },
    { // object holding the question, answers, and the correct answer.
        question: "Which of the following is NOT an album by Blink-182?",
        answers: {
            a: 'Dookie', 
            b: 'Cheshire Cat', 
            c: 'Buddha', 
            d: 'Dude Ranch' 
        },
        correctAnswer: 'a'
    },
    { // object holding the question, answers, and the correct answer.
        question: "Which album did the American Singer 'Beck' release in 1999?",
        answers: {
            a: 'Odelay', 
            b: 'Mellow Gold', 
            c: 'Mutations', 
            d: 'Midnite Vultures' 
        },
        correctAnswer: 'd'
    },
    { // object holding the question, answers, and the correct answer.
        question: "The 1995 Hit 'Wonderwall' was released by which band?",
        answers: {
            a: 'The Chemical Brothers', 
            b: 'Radiohead', 
            c: 'Oasis', 
            d: 'Smashing Pumpnkins' 
        },
        correctAnswer: 'c'
    },
];



//  questionnaire function.  This will be used to create the quiz.
function  questionnaire() {
    $("#timeremaining").html("<h1>Time Remaining: " + timeLeft +"</h1>"); 

    // if the game has started
    if (gameStart = true){ 
        timeLeft = 25;
        // variable output array to hold question information
        var output = [];
        // var to hold radio button selections
        var answers;
        // for loop that cycles through the indices of our questions array
        for (let i = 0; i < questions.length; i++) {
            // setting answers to an array
            answers = [];
            // for every letter in the location of our current question[index].answers object
            for(letter in questions[i].answers){
                //push the following into our answers array
                answers.push(
                    // label html
                    '<label>'
                        // create radio buttons for questions using html, and letter object from current question
                        + '<input type="radio" name="question' + i + '" value="' + letter + '"> ' + letter + ': ' + questions[i].answers[letter] + '  '
                    + '</label>'
                );
            }
            // push the following to our output variable
        output.push(
            // create div for our current question and answers
            '<div class="question">' + questions[i].question + '</div>' + '<div class="answers">' + answers.join('') + '</div>'
        )
        }
    }
    // join everything we just did to our div id questionsbox
    $('#questionsbox').html(output.join(''))
}
// this is the timeupfunction
function timeUp() {
    if (timeLeft > -1){
        $("#timeremaining").html("<h1>Time Remaining: " + timeLeft + "</h1>"); 
        timeLeft--;
    } else {
        scoreKeeper()
        // alert("Times Up!")
        reset()
    }
}
// this is the function that tracks score and outputs it after the time is up
function scoreKeeper(){
    var gatherAnswers = document.querySelectorAll('.answers')
    var userAnswer = '';
    var totalCorrect = 0;
    var totalWrong = 0
    
    for (let i = 0; i < questions.length; i++) {
        userAnswer = (gatherAnswers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
        if(userAnswer === questions[i].correctAnswer){
            totalCorrect++;
        } else {totalWrong++}
        $('#questionsbox').html("<h3>Total Correct: " + totalCorrect + "<br>Total Wrong: " + totalWrong)
        reset()
}
};
// this is the reset function
function reset() {
    // clear our interval counter
    clearInterval(intervalId)
    // game is no longer started
    gameStart = false;
    // timeLeft value to 25
    timeLeft = 25;

    //$("#startbox").html(startButton)
   // $("#timeremaining").html("<h1>Time Remaining: </h1>"); 
    $("#startbox").show("#startGame")

    // DONE: Change the "display" div to "00:00."
   // $("#timeremaining").text(timeLeft);
    // $("#questions").html(startButton);
};

$(document).ready(function(){

$("#startGame").on("click", function(){
    if (!gameStart) {
     $("#startbox").hide("#startGame")
             // assigning the  setInterval method to intervalId
             intervalId = setInterval(timeUp, 1000);
                    //alert("this works!")
                    gameStart = true;
                    questionnaire();
}});
});