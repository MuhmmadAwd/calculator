//decrale resultEle here because i use it 12 before document ready
let resultEle = null;
let num1 = "";
let operator = null;
let num2 = "";

function onBtnClick(e) {
  let number = e.target.innerHTML;
  if (operator === null) {
    num1 += number;
    resultEle.innerHTML = num1;
  } else {
    num2 += number;
    resultEle.innerHTML = num2;
  }
}

function OnOperatorClick(e) {
  operator = e.target.innerHTML;
  resultEle.innerHTML = "";
}

function onEqualClick() {
  switch (operator) {
    case "%":
      resultEle.innerHTML = Number(num1) % Number(num2);
      break;
    case "/":
      resultEle.innerHTML = Number(num1) / Number(num2);
      break;
    case "*":
      resultEle.innerHTML = Number(num1) * Number(num2);
      break;
    case "-":
      resultEle.innerHTML = Number(num1) - Number(num2);
      break;
    case "+":
      resultEle.innerHTML = Number(num1) + Number(num2);
      break;
    default:
      resultEle.innerHTML = "there are an error";
      break;
  }
}

function onClearClick() {
  num1 = "";
  num2 = "";
  operator = null;
  resultEle.innerHTML = "";
}

function onDocumentReady(CB) {
  document.addEventListener("DOMContentLoaded", CB);
}

document.addEventListener("DOMContentLoaded", documentReady);
function documentReady(e) {
  let numBtn = document.getElementsByClassName("btn-num");
  let operatorBtn = document.getElementsByClassName("btn-operator");
  resultEle = document.querySelector(".resultEle");
  let clearBtn = document.querySelector(".btn-clear");
  let equalBtn = document.querySelector(".btn-equal");

  for (var i = 0; i < numBtn.length; i++) {
    numBtn[i].addEventListener("click", onBtnClick);
  }

  for (var i = 0; i < operatorBtn.length; i++) {
    operatorBtn[i].addEventListener("click", OnOperatorClick);
  }

  equalBtn.addEventListener("click", onEqualClick);

  clearBtn.addEventListener("click", onClearClick);
}
onDocumentReady(documentReady);
