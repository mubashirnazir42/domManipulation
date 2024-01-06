let guess = document.querySelector(".guess").value;
var btncheck = document.querySelector(".check");
let msg = document.querySelector(".message");

btncheck.addEventListener("click", function () {
  //   document.querySelector(".number").value = Math.trunc(Math.random() * 20);
  document.querySelector(".number").value = 14;
  let generatedNumber = document.querySelector(".number").value;
  let guess = Number(document.querySelector(".guess").value);
  let msg = document.querySelector(".message");

  if (guess === generatedNumber) {
    msg.innerHTML = "correct Answer";
    document.querySelector("body").style.backgroundColor = "green";
  } else if (guess > generatedNumber) {
    msg.innerHTML = "high number";
  } else if (guess < generatedNumber) {
    msg.innerHTML = "lowNumber";
  }

  console.log(guess, generatedNumber);
});
