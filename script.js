let guess = document.querySelector(".guess").value;
var btncheck = document.querySelector(".check");
let msg = document.querySelector(".message");
let number = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").value = number;

btncheck.addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  let msg = document.querySelector(".message");
  if (!guess) {
    msg.innerHTML = "no number 🛑";
  } else if (guess === number) {
    msg.innerHTML = "correct Answer";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").textContent = number;
  } else if (guess > number) {
    msg.innerHTML = "high number";
  } else if (guess < number) {
    msg.innerHTML = "lowNumber";
  }
});
