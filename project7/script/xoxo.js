let whoPlayNow;
let popup = document.querySelector("#popup");
let xCounter = 0;
let oCounter = 0;

const ifEndGame = () => {
  let whoWonTheGame;
  let cells = document.querySelectorAll("#gamerDiv > div");

  if (!cells || cells.length !== 9) {
    return;
  }
  //*check vertical

  for (let i = 0; i <= 2; i++) {
    if (
      cells[i].innerHTML == cells[i + 3].innerHTML &&
      cells[i + 3].innerHTML == cells[i + 6].innerHTML &&
      cells[i].innerHTML
    ) {
      whoWonTheGame = cells[i].innerHTML;
    }
  }

  //*check horizontal
  for (let i = 0; i < 9; i += 3) {
    if (
      cells[i].innerHTML == cells[i + 1].innerHTML &&
      cells[i + 1].innerHTML == cells[i + 2].innerHTML &&
      cells[i].innerHTML
    ) {
      whoWonTheGame = cells[i].innerHTML;
    }
  }
  //*check diagonal
  let i = 0;
  if (
    cells[i].innerHTML == cells[i + 4].innerHTML &&
    cells[i + 4].innerHTML == cells[i + 8].innerHTML &&
    cells[i].innerHTML
  ) {
    whoWonTheGame = cells[i].innerHTML;
  }
  i = 2;
  if (
    cells[i].innerHTML == cells[i + 2].innerHTML &&
    cells[i + 2].innerHTML == cells[i + 4].innerHTML &&
    cells[i].innerHTML
  ) {
    whoWonTheGame = cells[i].innerHTML;
  }
  //*check if game end and someone won or even

  if (whoWonTheGame) {
    popup.style.display = "block";
    setTimeout(() => {
      popup.style.display = "none";
      newGame();
    }, 1000);
    if (whoWonTheGame == "x") {
      document.querySelector(".playerX").innerHTML = ++xCounter;
    } else {
      document.querySelector(".playerO").innerHTML = ++oCounter;
    }
    popup.innerHTML = `${whoWonTheGame} won the game`;
  } else {
    for (let cell of cells) {
      if (!cell.innerHTML) {
        return;
      }
    }
    popup.style.display = "block";
    setTimeout(() => {
      popup.style.display = "none";
      newGame();
    }, 1000);
    popup.innerHTML = "no one won the game";
  }
};

const handleClickXO = (myE) => {
  if (myE.target.innerHTML != "") {
    return;
  }
  myE.target.innerHTML = whoPlayNow;
  whoPlayNow == "x" ? (whoPlayNow = "o") : (whoPlayNow = "x");

  ifEndGame();
};

const initPageLoad = () => {
  let cells = document.querySelectorAll("#gamerDiv > div");
  for (let myDiv of cells) {
    myDiv.addEventListener("click", handleClickXO);
  }
};

const newGame = () => {
  whoPlayNow = "x";
  let cells = document.querySelectorAll("#gamerDiv > div");
  for (let cell of cells) {
    cell.innerHTML = "";
  }
  popup.style.display = "none";
};

window.addEventListener("load", () => {
  initPageLoad();
  newGame();
  document.getElementById("playAgainBtn").addEventListener("click", () => {
    newGame();
  });

  document.querySelector(".resetScore").addEventListener("click", () => {
    document.querySelector(".playerX").innerHTML = "0";
    document.querySelector(".playerO").innerHTML = "0";
    xCounter = 0;
    oCounter = 0;
  });
});
