class CalculatorUi {
  constructor(num1, num2, operator, resultEle) {
    this.num1 = "";
    this.num2 = "";
    this.operator = null;
    this.resultEle = "";
  } //end
  init = () => {
    let documentReady = (e) => {
      let numBtn = document.getElementsByClassName("btn-num");
      let operatorBtn = document.getElementsByClassName("btn-operator");
      calcEngn.resultEle = document.querySelector(".resultEle");
      let clearBtn = document.querySelector(".btn-clear");
      let equalBtn = document.querySelector(".btn-equal");
      for (var i = 0; i < numBtn.length; i++) {
        numBtn[i].addEventListener("click", calcEngn.onBtnClick);
      }
      for (var i = 0; i < operatorBtn.length; i++) {
        operatorBtn[i].addEventListener("click", calcEngn.OnOperatorClick);
      }
      equalBtn.addEventListener("click", calcEngn.onEqualClick);
      clearBtn.addEventListener("click", calcEngn.onClearClick);
    };
    document.addEventListener("DOMContentLoaded", documentReady);
  };

  onBtnClick = (e) => {
    debugger;
    let number = e.target.dataset.number;
    if (this.operator === null) {
      this.num1 += number;
      this.displayResult(this.num1);
    } else {
      this.num2 += number;
      this.displayResult(this.num2);
    }
  }; //end

  OnOperatorClick = (e) => {
    debugger;
    this.operator = e.target.dataset.operator;
    this.displayResult("");
  }; //end

  onClearClick = () => {
    debugger;
    this.num1 = "";
    this.num2 = "";
    this.operator = null;
    this.displayResult("");
  }; //end

  displayResult = (massage) => {
    this.resultEle.innerHTML = massage;
  }; //end
} /** class end **/

let calcEngn = new CalculatorEngine();
class CalculatorEngine {
  constructor(calcEng) {
    this.calcEngn;
  }
  onEqualClick = () => {
    debugger;
    switch (this.operator) {
      case "%":
        let modulus = Number(this.num1) % Number(this.num2);
        this.displayResult(modulus);
        break;
      case "/":
        let divide = Number(this.num1) / Number(this.num2);
        this.displayResult(divide);
        break;
      case "*":
        let multiple = Number(this.num1) * Number(this.num2);
        this.displayResult(multiple);
        break;
      case "-":
        let subtraction = Number(this.num1) - Number(this.num2);
        this.displayResult(subtraction);
        break;
      case "+":
        let summation = Number(this.num1) + Number(this.num2);
        this.displayResult(summation);
        break;
      default:
        let defaultMsg = "there are an error";
        this.displayResult(defaultMsg);
        break;
    }
  }; ///end
} /* class end */
let calcUI = new CalculatorUi();

let onDocumentReady = (CB) => {
  document.addEventListener("DOMContentLoaded", CB);
}; //end
onDocumentReady(calcEngn.init);
