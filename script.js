let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");



const genCompChoice = () => {
    const options = ["rock", "paper", "scissers"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
    // rock,paper,scissers
}






};

const showWinner = (userWin, userChoice , compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerHTML = userScore;
        msg.innerHTML= `you win! your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green";

    }
    else {
        compScore++;
        compScorePara.innerHTML =compScore;
        msg.innerHTML = `you lost . ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";

    }
};

const playGame = (userChoice) => {
    // generate comp choice
    const compChoice = genCompChoice();
    if (userChoice === compChoice) {
        drawGame();

    }
    else {

        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;

        }

        else if (userChoice === "paper") {
            userWin = compChoice === "scissers" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin ,userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    });
});
