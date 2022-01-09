// variables
const guesses = document.querySelector(".guesses");
const result = document.querySelector(".result");
const guessField = document.querySelector(".guessField");
const guessSubmit = document.querySelector(".guessSubmit");

let randomNumber = Math.floor(Math.random() * 100) + 1;
let gameState = 1;
let resetButton;
let keySwitch = true;

const winStreakStats = document.querySelector(".winStreak");
const totalScoreStats = document.querySelector(".totalScore");
const winRateStats = document.querySelector(".winRate");
const bestGameStats = document.querySelector(".bestGame");
const highestWinStreakStats = document.querySelector(".highestWinStreak");

let winStreak = 0;
let totalScore = 0;
let totalGames = 0;
let winRate = 0;
let bestGame = 0;
let highestWinStreak = 0;

let hax = false;

// functions
function runGame() {
  const userGuess = Number(guessField.value);
  console.log(gameState);
  if (gameState === 1) {
    guesses.textContent = "Previous guesses: ";
    guesses.style = "margin: 4px 0 4px 0;";
    guesses.textContent += userGuess;
  } else {
    guesses.textContent += ", " + userGuess;
  }

  if (userGuess === randomNumber) {
    let ordinal;
    switch (gameState) {
      case 1:
        ordinal = "st";
        break;
      case 2:
        ordinal = "nd";
        break;
      case 3:
        ordinal = "rd";
        break;
      default:
        ordinal = "th";
        break;
    }
    result.textContent = `CONGRATULATIONS - You won on your ${gameState}${ordinal} attempt!`;
    result.style = "background-color: lime; color: black";
    // winstreak
    winStreak++;
    if (winStreak > highestWinStreak) {
      highestWinStreak = winStreak;
    }
    // totalscore
    totalScore++;
    // bestround
    if (bestGame === 0) {
      bestGame = gameState;
    } else if (gameState < bestGame) {
      bestGame = gameState;
    }

    endGame();
  } else if (gameState === 10) {
    result.textContent = "GAME OVER - Start a new round.";
    result.style = "background-color: red; color: black";
    if (winStreak > highestWinStreak) {
      highestWinStreak = winStreak;
    }
    winStreak = 0;
    endGame();
  } else {
    if (userGuess < randomNumber) {
      result.textContent = "WRONG - You guessed to low!";
    } else if (userGuess > randomNumber) {
      result.textContent = "WRONG - You guessed to high!";
    }
    result.style = "background-color: red; color: black";
  }
  gameState++;
  guessField.value = "";
  guessField.focus();
}

function endGame() {
  guessField.blur();
  guessField.disabled = true;
  guessSubmit.disabled = true;

  resetButton = document.createElement("button");
  resetButton.textContent = "Restart";
  document.querySelector(".game").append(resetButton);
  resetButton.addEventListener("click", resetGame);
  doKeySwitch();

  totalGames++;
  winRate = Math.round((totalScore / totalGames) * 100);
  saveFile();
  printStats();
}

function resetGame() {
  gameState = 1;

  guesses.textContent = "";
  guesses.style = "";
  result.textContent = "";
  result.style.backgroundColor = "";

  resetButton.parentNode.removeChild(resetButton);
  doKeySwitch();

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();

  randomNumber = Math.floor(Math.random() * 100) + 1;
  if (hax === true) {
    guessField.placeholder = randomNumber;
  }
}

function printStats() {
  let x;

  if (highestWinStreak > 0) {
    if (winStreak !== 1) {
      x = "s";
    } else {
      x = "";
    }
    winStreakStats.textContent = `You won ${winStreak} game${x} in a row!`;
    if (bestGame !== 1) {
      x = "s";
    } else {
      x = "";
    }
    bestGameStats.textContent = `You finished your best round in ${bestGame} turn${x}!`;
    highestWinStreakStats.textContent = `Your highest winstreak was ${highestWinStreak} in a row!`;
  }
  if (totalGames > 0) {
    totalScoreStats.textContent = `You won ${totalScore} out of ${totalGames} games!`;
    winRateStats.textContent = `That's a winrate of ${winRate}%!`;
  }
}

function setInputFilter(textbox, inputFilter) {
  [
    "input",
    "keydown",
    "keyup",
    "mousedown",
    "mouseup",
    "select",
    "contextmenu",
    "drop",
  ].forEach(function (event) {
    textbox.addEventListener(event, function () {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      } else {
        this.value = "";
      }
    });
  });
}

function doKeySwitch() {
  if (keySwitch === true) {
    keySwitch = false;
  } else {
    keySwitch = true;
  }
  if (keySwitch === true) {
    let enter = 13;
    window.onkeydown = function (idk) {
      if (idk.keyCode === enter) {
        document.querySelector("button:last-child").click();
      }
    };
  } else {
    let enter = 13;
    window.onkeydown = function (idk) {
      if (idk.keyCode === enter) {
        guessSubmit.click();
      }
    };
  }
}

function saveFile() {
  if (localStorage.length === 0) {
    localStorage.setItem("winStreak", winStreak);
    localStorage.setItem("totalScore", totalScore);
    localStorage.setItem("totalGames", totalGames);
    localStorage.setItem("winRate", winRate);
    localStorage.setItem("bestGame", bestGame);
    localStorage.setItem("highestWinStreak", highestWinStreak);
    console.log(`created ${localStorage.length} items`);
  } else {
    localStorage.setItem("winStreak", winStreak);
    localStorage.setItem("totalScore", totalScore);
    localStorage.setItem("totalGames", totalGames);
    localStorage.setItem("winRate", winRate);
    localStorage.setItem("bestGame", bestGame);
    localStorage.setItem("highestWinStreak", highestWinStreak);
    console.log(`saved ${localStorage.length} items`);
  }
}

function loadFile() {
  if (localStorage.length !== 0) {
    winStreak = localStorage.getItem("winStreak");
    totalScore = localStorage.getItem("totalScore");
    totalGames = localStorage.getItem("totalGames");
    winRate = localStorage.getItem("winRate");
    bestGame = localStorage.getItem("bestGame");
    highestWinStreak = localStorage.getItem("highestWinStreak");
    console.log(`loaded ${localStorage.length} items`);
  } else {
    console.log(`loaded nothing`);
  }
}

function deleteFile() {
  console.log(`removed ${localStorage.length} items`);
  localStorage.clear();
}

// run
loadFile();
printStats();

setInputFilter(guessField, function (value) {
  return /^\d*$/.test(value) && (value === "" || parseInt(value) <= 100);
});

guessField.focus();

guessSubmit.addEventListener("click", runGame);
doKeySwitch();
