/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let domaintype = ["com", "net", "US", "io"];

  var storeD = [];

  for (let i = 0; i <= pronoun.length - 1; i++) {
    for (let j = 0; j <= adj.length - 1; j++)
      for (let k = 0; k <= noun.length - 1; k++)
        for (let l = 0; l <= domaintype.length - 1; l++)
          if (domaintype[l] == "com") {
            storeD.push(pronoun[i] + adj[j] + "." + noun[k]);
          } else {
            storeD.push(pronoun[i] + adj[j] + noun[k] + "." + domaintype[l]);
          }
  }
  console.log(storeD);

  var domain = document.querySelector(".domain");
  for (var i = 0; i < storeD.length; i++)
    domain.innerHTML += "<li>" + storeD[i] + "</li>";
};

// var arr = ["mouse","cat","dog"];
// var holder = document.getElementById("holder");
// for(var i=0; i < arr.length; i++)
//   holder.innerHTML += "<p>"+arr[i]+"</p><br>";
