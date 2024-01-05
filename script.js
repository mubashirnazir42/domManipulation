"use strict";
var btn = document.querySelector(".changed");
var circle = document.querySelector(".circle");
var square = document.querySelector(".square");
let val = Math.trunc(Math.random() * 4);
console.log(val);

console.log();
btn.addEventListener("click", function () {
  if (val === 0) {
    circle.style.backgroundColor = "blue";
    square.style.backgroundColor = "blue";
    console.log(val);
    val = Math.trunc(Math.random() * 4);
  } else if (val === 1) {
    circle.style.backgroundColor = "transparent";
    square.style.backgroundColor = "transparent";
    console.log(val);
    val = Math.trunc(Math.random() * 4);
  } else if (val === 2) {
    circle.style.backgroundColor = "red";
    square.style.backgroundColor = "red";
    console.log(val);
    val = Math.trunc(Math.random() * 4);
  } else if (val === 3) {
    circle.style.backgroundColor = "yellow";
    square.style.backgroundColor = "yellow";
    console.log(val);
    val = Math.trunc(Math.random() * 4);
  } else if (val === 4) {
    circle.style.backgroundColor = "green";
    square.style.backgroundColor = "green";
    console.log(val);
    val = Math.trunc(Math.random() * 4) + 1;
  }
});
