let numBtn = null;
let operatorBtn = null;
let resultEle = null;
let clearBtn = null;
let equalBtn = null;
(num1 = null), (operator = null), (num2 = null);
document.addEventListener("DOMContentLoaded", function (event) {
  numBtn = document.getElementsByClassName("btn-num");
  operatorBtn = document.getElementsByClassName("btn-operator");
  resultEle = document.querySelector(".resultEle");
  clearBtn = document.querySelector(".btn-clear");
  equalBtn = document.querySelector(".btn-equal");

  for (let i = 0; i < numBtn.length; i++) {
    numBtn[i].addEventListener("click", typeBtn);
    function typeBtn() {
      if (operator === null) {
        var numBtnHTML = numBtn[i].innerHTML;
        var resultEleH = document.createTextNode(numBtnHTML);
        resultEle.append(resultEleH);
        num1 = resultEle.innerHTML;
      } else if (operator != undefined) {
        numBtnHTML = numBtn[i].innerHTML;
        var resultEleH = document.createTextNode(numBtnHTML);
        resultEle.append(resultEleH);
        num2 = resultEle.innerHTML;
      }
    }
  }
  for (let i = 0; i < operatorBtn.length; i++) {
    operatorBtn[i].addEventListener("click", typeOperator);
    function typeOperator() {
      var operatorBtnHTML = operatorBtn[i].innerHTML;
      operator = operatorBtnHTML;
      resultEle.innerHTML = "";
      console.log(operator);
    }
  }

  equalBtn.addEventListener("click", equal);
  function equal() {
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
  clearBtn.addEventListener("click", Clear);
  function Clear() {
    resultEle.innerHTML = "";
  }
});
