"use strict";

document.querySelector("h1").textContent = "welcome to DOM manipulation";
document.querySelector("h1").style.textAlign = "center";
document.querySelector("h1").style.backgroundColor = "aqua";

document.querySelector(".para").textContent =
  "my name is mubashir, and im learning dom minupluation( not a part of js) its web apis written in javascript thats why we can use it in js!";
document.querySelector(".para").style.backgroundColor = "yellow";
document.querySelector(".para").style.textAlign = "center";

let bulb = document.querySelector("#circle");
let btn = document.querySelector(".btn");
let val = 0;

btn.addEventListener("click", function () {
  if (val === 0) {
    bulb.style.backgroundColor = "yellow";
    btn.innerHTML = "OFF";
    val = 1;
  } else if (val == 1) {
    bulb.style.backgroundColor = "blue";
    btn.innerHTML = "ON";
    val = 2;
  } else {
    bulb.style.backgroundColor = "transparent";
    btn.innerHTML = "blue";
    val = 0;
  }
});

// if (val === 0) {
//   console.log("hi");
//   btn.addEventListener("click", function () {
//     bulb.querySelector.backgroundColor = "transparent";
//     btn.innerHTML = "OFF";
//     val = 1;
//   });
// }
