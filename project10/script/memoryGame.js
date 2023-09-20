let divArr = [];
let cardsArr = [];

const getRandom = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const flipCard = () => {
  let cardsArr = document.querySelectorAll("img");
  let temp = 0;
  let firstCard = "";
  let index = 0;
  let lock = false;
  let ifWon = 0;
  let attempts = 0;
  document.querySelector(".numAttempts").innerHTML = attempts;

  for (let i = 1; i < 40; i += 2) {
    cardsArr[i].addEventListener("click", () => {
      if (lock == false) {
        cardsArr[i].style.display = "none";
        cardsArr[i - 1].style.display = "block";
        temp++;
        document.querySelector(".numAttempts").innerHTML = attempts;
        if (temp == 1) {
          firstCard = cardsArr[i - 1];
          index = i;
          attempts++;
        } else if (firstCard.src == cardsArr[i - 1].src) {
          temp = 0;
          ifWon++;
        } else {
          lock = true;
          setTimeout(function () {
            cardsArr[index].style.display = "block";
            cardsArr[index - 1].style.display = "none";
            cardsArr[i].style.display = "block";
            cardsArr[i - 1].style.display = "none";
            temp = 0;
            lock = false;
          }, 1500);
        }
      }
      if (ifWon == 10) {
        document.querySelector(".modal1").style.display = "block";
      }
    });
  }
};

const loadBoard = () => {
  for (let item of divArr) {
    item.innerHTML = "";
  }
  let picsCounter = 0;
  let counter = 0;
  while (counter != 20) {
    let rand = getRandom(0, 19);
    if (divArr[rand].innerHTML == "") {
      if (picsCounter < 10) {
        divArr[
          rand
        ].innerHTML = `<img class="cardFace" src="./images/${picsCounter}.jpg">
                    <img class="backCard" src="./images/Card_back_01.svg">`;
        counter++;
        picsCounter++;
      } else {
        picsCounter = 0;
      }
    }
  }
};

window.addEventListener("load", () => {
  divArr = document.querySelectorAll(".col");
  loadBoard();
  flipCard();
  document.querySelector(".modal2").style.display = "block";

  document.querySelector(".btn").addEventListener("click", () => {
    loadBoard();
    flipCard();
  });

  let allClose = document.querySelectorAll(".close");
  for (let item of allClose) {
    item.addEventListener("click", (e) => {
      console.log(
        (e.target.parentElement.parentElement.style.display = "none")
      );
    });
  }
});
