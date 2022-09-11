// Function to assign input value to single box in scoreboard
function setInputValueToElement(input, element) {
    input.addEventListener('keyup', () => {
        element.textContent = input.value;
    });
}

// Function to assign color to single box
function setColorValueToElement(input, element) {
    input.addEventListener('keyup', () => {
        element.style.backgroundColor = input.value;
    });
}

// Function to get the total
function getTotal(inputs, totalField) {
    let inputsArray = [...inputs];
    
    inputsArray.forEach((input) => {
        input.addEventListener('keyup', () => {
            let sum = 0;
            inputsArray.forEach(Deepinput => {

                sum += Number(Deepinput.value);
            });  
            totalField.textContent = sum;
        });
    });
    
}


// Teams color functionality
const teamOneColorController = document.getElementById('team-one-color-controller');
const teamTwoColorController = document.getElementById('team-two-color-controller');
const teamOneColor = document.getElementById('team-one');
const teamTwoColor = document.getElementById('team-two');
setColorValueToElement(teamOneColorController, teamOneColor);
setColorValueToElement(teamTwoColorController, teamTwoColor);


// Teams flags color functionality
const teamOneFlagController = document.getElementById('team-one-flag-controller');
const teamOneFirstFlag = document.querySelector("#team-one .flag");
const teamOneSecondFlag = document.getElementById('teamOneColor');
setColorValueToElement(teamOneFlagController, teamOneFirstFlag);
setColorValueToElement(teamOneFlagController, teamOneSecondFlag);

const teamTwoFlagController = document.getElementById('team-two-flag-controller');
const teamTwoFirstFlag = document.querySelector("#team-two .flag");
const teamTwoSecondFlag = document.getElementById('teamTwoColor');
setColorValueToElement(teamTwoFlagController, teamTwoFirstFlag);
setColorValueToElement(teamTwoFlagController, teamTwoSecondFlag);

// Teams names functionality
const teamOneNameController = document.getElementById('team-one-name-controller');
document.querySelectorAll('.teamOneName').forEach(element => {
    setInputValueToElement(teamOneNameController, element);
});

const teamTwoNameController = document.getElementById('team-two-name-controller');
document.querySelectorAll('.teamTwoName').forEach(element => {
    setInputValueToElement(teamTwoNameController, element);
});


// Teams score functionality
const teamOneScoreController = document.getElementById('team-one-score-controller');
document.querySelectorAll('.teamOneScore').forEach(element => {
    setInputValueToElement(teamOneScoreController, element);
});

const teamTwoScoreController = document.getElementById('team-two-score-controller');
document.querySelectorAll('.teamTwoScore').forEach(element => {
    setInputValueToElement(teamTwoScoreController, element);
});


// Points toggle functionality
function togglePoints(points, color) {
    points.forEach(point => {
        point.addEventListener('click', () => {
            point.style.backgroundColor = color;
            point.addEventListener('dblclick', () => {
                point.style.backgroundColor = "#222";
                
            });
        });

    });
}

const teamOnePoints = document.querySelectorAll('.teamOnePoint');
const teamTwoPoints = document.querySelectorAll('.teamTwoPoint');
togglePoints(teamOnePoints, "#da0037");
togglePoints(teamTwoPoints, "#ffd523");

// Teams scores functionality
function setScoresFromInputsToRow(inputs, row) {
    inputs.forEach((input, i) => {
        input.addEventListener('keyup', () => {
            row[i].textContent = input.value;
        });
    });
}

const teamOneScoresControllers = document.querySelectorAll("#team-one-controller .scores input");
const teamTwoScoresControllers = document.querySelectorAll("#team-two-controller .scores input");
const teamOneScores = document.querySelectorAll(".team-one-rounds .round-score");
const teamTwoScores = document.querySelectorAll(".team-two-rounds .round-score");
setScoresFromInputsToRow(teamOneScoresControllers, teamOneScores);
setScoresFromInputsToRow(teamTwoScoresControllers, teamTwoScores);

// Total functionality
const teamOneTotalScoreField = document.querySelector(".team-one-rounds .total-score");
getTotal(teamOneScoresControllers, teamOneTotalScoreField);

const teamTwoTotalScoreField = document.querySelector(".team-two-rounds .total-score");
getTotal(teamTwoScoresControllers, teamTwoTotalScoreField);

// Game details functionality
const eventName = document.getElementById('event-name');
const eventNameController = document.getElementById('event-name-controller');
const pool = document.getElementById('pool');
const poolController = document.getElementById('pool-controller');
const game = document.getElementById('game');
const gameController = document.getElementById('game-controller');
const roundContainer = document.getElementById('roundContainer');
const roundContainerInput = document.getElementById('roundContainerInput');
setInputValueToElement(eventNameController, eventName);
setInputValueToElement(poolController, pool);
setInputValueToElement(gameController, game);
setInputValueToElement(roundContainerInput, roundContainer);

// Hammer funcionality
const hammers = document.querySelectorAll('.hummer-container input');
const hammersBoxes = document.querySelectorAll('.teamTurn');
const img = document.createElement('img');
img.src = "images/hammer-solid.svg";
hammers.forEach((hammer, i) => {
    hammer.addEventListener('change', () => {
        hammersBoxes[0].innerHTML = "";
        hammersBoxes[1].innerHTML = "";
        hammersBoxes[i].appendChild(img);
    });
});