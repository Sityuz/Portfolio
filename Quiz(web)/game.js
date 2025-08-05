const question = document.getElementById("question")
const choises = Array.from(document.getElementsByClassName("choise-text"))
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');
const loader = document.getElementById('loader')
const game = document.getElementById('game')


let currentQuestion = {};
let acceptingAnswer = false;
let score = 0;
let questionCounter = 0;
let avaibleQuestion = [];

let questions = [];

let category = localStorage.getItem("category")
let difficulty = localStorage.getItem("difficult")

fetch(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}`)
.then(res =>{
    return res.json();
}).then(loadedQuestions => {
    console.log(loadedQuestions.results)
    questions = loadedQuestions.results.map(loadedQuestions =>{
        const formattedQuestion = {
            question: loadedQuestions.question
        };
        
        const answerChoices = [...loadedQuestions.incorrect_answers];
        formattedQuestion.answer = Math.floor(Math.random()*3)+1;
        answerChoices.splice(formattedQuestion.answer -1, 0, loadedQuestions.correct_answer);

        answerChoices.forEach((choice,index) => {
            formattedQuestion["choice" + (index+1)] = choice;
        })
        return formattedQuestion;
    })
    //questions = loadQuestions
   
    startGame();
})


const CORRECT_BONUS = 10; 
const MAX_QUESTION = 3;

startGame = () =>{
    questionCounter = 0;
    score = 0;
    avaibleQuestion = [...questions];
    getNewQuestion();
    game.classList.remove('hidden')
    loader.classList.add('hidden')
}

getNewQuestion = () => {

    

    if(avaibleQuestion === 0 || questionCounter >= MAX_QUESTION){

        localStorage.setItem('mostRecentScore',score)

        return window.location.assign("/end.html")}
    questionCounter++;

    progressText.innerText = "Question "+ questionCounter+ "/" + MAX_QUESTION;

    progressBarFull.style.width = `${(questionCounter / MAX_QUESTION) * 100 }% `

    const questionIndex = Math.floor(Math.random() * avaibleQuestion.length);
    currentQuestion = avaibleQuestion[questionIndex];
    question.innerText = currentQuestion.question;

    choises.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
    })

    avaibleQuestion.splice(questionIndex,1);
    acceptingAnswer = true;
}

choises.forEach(choice =>{
    choice.addEventListener('click', e => {
        if(!acceptingAnswer) return;

        acceptingAnswer = false;

        const selectedChoise = e.target;
        const selectedAnswer = selectedChoise.dataset["number"];

        const classToApply = 
            selectedAnswer == currentQuestion.answer ?  'correct' : 'incorrect';
            
            if(classToApply === 'correct'){
                incrementScore(CORRECT_BONUS);
            }
        selectedChoise.parentElement.classList.add(classToApply);
        setTimeout( ()=>{
            selectedChoise.parentElement.classList.remove(classToApply);
            getNewQuestion();
            
        },900)
        
    })
})

incrementScore = num =>{
    score +=num;
    scoreText.innerText = score;
}
