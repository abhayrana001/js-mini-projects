function play(user) {
    const choices = ['rock', 'paper', 'scissors'];
    const computer = choices[Math.floor(Math.random() * choices.length)];

    document.getElementById("userChoice").textContent = `You chose: ${capitalize(user)}`;
    document.getElementById("computerChoice").textContent = `Computer chose: ${capitalize(computer)}`;
    let result = "";
    if (user === computer) {
        result = "It's a draw!";
    } else if (
        (user === 'rock' && computer === 'scissors') ||
        (user === 'paper' && computer === 'rock') ||
        (user === 'scissors' && computer === 'paper')
    ) {
        result = "You win! 🎉";
    } else {
        result = "You lose 😢";
    }

    document.getElementById("result").textContent = `Result: ${result}`;
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}