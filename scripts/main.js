class CalculatorEngin {
  constructor(num1, num2, operator) {
    this.num1 = "";
    this.num2 = "";
    this.operator = null;
    this.theResult = "";
  }
  setNumber = (number) => {
    if (this.operator === null) {
      this.num1 += number;
    } else {
      this.num2 += number;
    }
  };
  setOperator = (theOperator) => {
    this.operator = theOperator;
  };
  calculate = () => {
    switch (this.operator) {
      case "%":
        this.theResult = Number(this.num1) % Number(this.num2);
        break;
      case "/":
        this.theResult = Number(this.num1) / Number(this.num2);
        break;
      case "*":
        this.theResult = Number(this.num1) * Number(this.num2);
        break;
      case "-":
        this.theResult = Number(this.num1) - Number(this.num2);
        break;
      case "+":
        this.theResult = Number(this.num1) + Number(this.num2);
        break;
      default:
        this.theResult = "there are an error";
        break;
    }
  };
  clearCalc = () => {
    this.num1 = "";
    this.num2 = "";
    this.operator = null;
    calc1.displayResult("");
  };
}
class CalculatorUi {
  constructor(calcEngin, resultEle) {
    this.resultEle = "";
    this.calcEngin = new CalculatorEngin();
  } //end
  init = (e) => {
    let numBtn = document.getElementsByClassName("btn-num");
    let operatorBtn = document.getElementsByClassName("btn-operator");
    this.resultEle = document.querySelector(".resultEle");
    let clearBtn = document.querySelector(".btn-clear");
    let equalBtn = document.querySelector(".btn-equal");
    for (var i = 0; i < numBtn.length; i++) {
      numBtn[i].addEventListener("click", this.onBtnClick);
    }
    for (var i = 0; i < operatorBtn.length; i++) {
      operatorBtn[i].addEventListener("click", this.OnOperatorClick);
    }
    equalBtn.addEventListener("click", this.onEqualClick);
    clearBtn.addEventListener("click", this.onClearClick);
  };
  onBtnClick = (e) => {
    let number = e.target.dataset.number;
    this.calcEngin.setNumber(number);
    if (this.calcEngin.operator === null) {
      this.displayResult(this.calcEngin.num1);
    } else {
      this.displayResult(this.calcEngin.num2);
    }
  }; //end
  OnOperatorClick = (e) => {
    let theOperator = e.target.dataset.operator;
    this.calcEngin.setOperator(theOperator);
    this.displayResult("");
  }; //end
  onEqualClick = () => {
    this.calcEngin.calculate();
    this.displayResult(this.calcEngin.theResult);
  }; ///end

  onClearClick = () => {
    this.calcEngin.clearCalc();
  }; //end
  displayResult = (massage) => {
    this.resultEle.innerHTML = massage;
  }; //end
} /** class end **/
let calc1 = new CalculatorUi();

let onDocumentReady = (CB) => {
  document.addEventListener("DOMContentLoaded", CB);
}; //end
onDocumentReady(calc1.init);
