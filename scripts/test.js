document.addEventListener("DOMContentLoaded", function (event) {
  const btn = document.getElementsByClassName("btn");
  const result = document.querySelector(".result");
  const clear = document.querySelector(".btn-clear");

  function displayResult() {
    for (let i = 0; i < btn.length; i++) {
      btn[i].addEventListener("click", function () {
        var btnValue = btn[i].innerHTML;
        var y = document.createTextNode(btnValue);
        result.appendChild(y);
      });
    }
  }
  displayResult();
  btn[16].addEventListener("click", calc);
  function calc() {
    var num1 = Number(result.children[0].innerHTML);
    var num2 = result.children[1].innerHTML;
    var num3 = Number(result.children[2].innerHTML);
    var num4 = "";
    if (num2 == "+") {
      num4 = num1 + num3;
    } else if (num2 == "*") {
      num4 = num1 * num3;
    } else if (num2 == "-") {
      num4 = num1 - num3;
    } else if (num2 == "/") {
      num4 = num1 / num3;
    } else if (num2 == "%") {
      num4 = num1 % num3;
    }
    result.innerHTML = num4;
  }
  clear.addEventListener("click", Clear);
  function Clear() {
    result.innerHTML = "";
  }
});

// calcBtn[i].addEventListener("click", function () {
//   var btnHtml = calcBtn[i].innerHTML;
//   result.innerHTML = btnHtml;
// });

for (var i = 0; i < calcBtn.length; i++) {
  debugger;
  calcBtn[i].addEventListener("click", displayNum());
  function displayNum() {}
}
