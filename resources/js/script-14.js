  function game(userChoice) {
    const choices = ["piedra", "papel", "tijeras"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    if (userChoice === computerChoice) {
      document.getElementById("result").innerHTML = "¡Empate!";
    } else if (
      (userChoice === "piedra" && computerChoice === "tijeras") ||
      (userChoice === "papel" && computerChoice === "piedra") ||
      (userChoice === "tijeras" && computerChoice === "papel")
    ) {
      document.getElementById("result").innerHTML = `¡Ganaste! CodeBot eligió ${computerChoice}.`;
    } else {
      document.getElementById("result").innerHTML = `Perdiste. CodeBot eligió ${computerChoice}.`;
    }
  }
