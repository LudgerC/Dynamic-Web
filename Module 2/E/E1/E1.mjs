let scores = [];

const scoreInput = document.getElementById("score");
const addScoreButton = document.getElementById("addScore");
const averageDisplay = document.getElementById("average");
const highestDisplay = document.getElementById("highest");
const scoreList = document.getElementById("scoreList");

addScoreButton.addEventListener("click", function()
{

    let score = parseFloat(scoreInput.value);
    if(!isNaN(score) && score >= 0 && score <= 20)
    {
        scores.push(score);
        updateStates();
        updateScoreList();
        scoreInput.value = "";
    }
    else {
        alert("Voer een geldige score in tussen 0 en 20.")
    }

});

function updateStates()
{
    let sum = scores.reduce((total, num) => total+ num, 0);
    let average = (sum/scores.length).toFixed(2);
    let highest = Math.max(...scores);
    
    averageDisplay.textContent = average;
    highestDisplay.textContent = highest;
}

function updateScoreList()
{
    scoreList.innerHTML ="";
    scores.forEach (score => {
        let li = document.createElement("li");
        li.textContent = score;
        scoreList.appendChild(li);

    });
}

