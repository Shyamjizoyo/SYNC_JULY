var quizData = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        A: "<javascript>",
        B: "<js>",
        C: "<script>",
        D: "<scripting>",
        answer: "optionC"
    },
    {
        question: "Which built-in method returns the length of the string?",
        A: "length()",
        B: "size()",
        C: "index()",
        D: "None of the Above",
        answer: "optionA"
    },
    {
        question: "Which built-in method returns the calling string value converted to lower case?",
        A: "toLowerCase",
        B: "toLower()",
        C: "changeCase()",
        D: "None of the above",
        answer: "optionA"
    },
    {
        question: "Which of the following function of Number object returns a string value version of the current number?",
        A: "toFixed()",
        B: "toLocaleString()",
        C: "toString()",
        D: "toPrecision()",
        answer: "optionC"
    },
    {
        question: "Which of the following function of String object causes a string to be displayed in a small font, as if it were in a <small> tag?",
        A: "link()",
        B: "small()",
        C: "sup()",
        D: "sub()",
        answer: "optionB"
    },
    {
        question: "Which of the following function of Array object extracts a section of an array and returns a new array?",
        A: "reverse()",
        B: "shift()",
        C: "slice()",
        D: "some()",
        answer: "optionC"
    }
]

var quiz = document.getElementById("quiz");
var options = document.querySelectorAll(".options");
var question = document.getElementById("question");
var optionA = document.getElementById("optionAValue");
var optionB = document.getElementById("optionBValue");
var optionC = document.getElementById("optionCValue");
var optionD = document.getElementById("optionDValue");

var submitbtn = document.getElementById("submitbtn");

var currentQuestion = 0;
var QuizScore = 0;
var remarks;

loadQuiz();

function loadQuiz(){
    deselect();
    question.innerText = quizData[currentQuestion].question;
    optionA.innerText = quizData[currentQuestion].A;
    optionB.innerText = quizData[currentQuestion].B;
    optionC.innerText = quizData[currentQuestion].C;
    optionD.innerText = quizData[currentQuestion].D;
}

function deselect(){
    options.forEach(options=>options.checked=false)
}

submitbtn.addEventListener('click',()=>{
    var selectedOption;

    options.forEach(options=>{
        if(options.checked){
            selectedOption = options.id;
        }
    })
    
    if(selectedOption == quizData[currentQuestion].answer ){
        QuizScore = QuizScore + 1;
    }
    currentQuestion = currentQuestion + 1;
    if(currentQuestion == quizData.length-1){
        submitbtn.innerText = "SUBMIT";
    }
    if(currentQuestion == quizData.length){
        if(QuizScore == 6){
            remarks = "Outstanding!";
        }
        else if(QuizScore == 5){
            remarks = "Excellent";
        }
        else if(QuizScore == 4){
            remarks = "Good";
        }
        else if(QuizScore == 3){
            remarks = "Average";
        }
        else{
            remarks = "Work Hard";
        }
        document.getElementById('quizdiv').innerHTML = `<h2 class="my-3">Your Score: ${QuizScore}/${quizData.length}</h2><h4>You have answered ${QuizScore} questions correctly out of ${quizData.length} questions.</h4> <h4 class="text-center my-3">Remarks: ${remarks}</h4>`
    }
    else{
        loadQuiz();
    }
})