/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onclick = function() {
  var suit = ["heart", "club", "spade", "diamond"];
  var value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  var card = document.querySelector(".card");
  var cardValue = document.querySelector("h1");

  for (let key in suit) {
    if (card.classList.contains(suit[key])) {
      card.classList.remove(suit[key]);
    }
  }

  card.classList.add(suit[getRndInteger(0, suit.length - 1)]);
  cardValue.innerHTML = value[getRndInteger(0, value.length - 1)];
};
