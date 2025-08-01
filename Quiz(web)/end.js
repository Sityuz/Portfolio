const username = document.getElementById('username')
const save = document.getElementById('save');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORE = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () =>{
    
    save.disabled = !username.value;
})

saveHighScore = e =>{
    console.log("Clicked save button")
    e.preventDefault();

    const score = {
         score: mostRecentScore,
         name: username.value
    };
    highScores.push(score)

    highScores.sort((a,b)=>b.score - a.score)

    highScores.splice(5)

    localStorage.setItem("highScores", JSON.stringify(highScores))
    window.location.assign("./")

    console.log(highScores);
}
