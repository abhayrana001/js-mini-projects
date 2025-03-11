function play(userChoice) {
    let choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";
    if (userChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You win!";
    } else {
        result = "You lose!";
    }
    document.getElementById("result").textContent = `Computer chose ${computerChoice}. ${result}`;
}