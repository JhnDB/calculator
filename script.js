function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y === 0) {
        return "Error";
    }
    return x / y;
}

function operate(x, y, operator) {
    x = Number(x);
    y = Number(y);
    let result;
    switch (operator) {
        case "+":
            result = add(x, y);
            break;
        case "-":
            result = subtract(x, y);
            break;
        case "*":
            result = multiply(x, y);
            break;
        case "/":
            result = divide(x, y);
            break;
    }
    if (result != "Error") {
        result = parseFloat(result.toFixed(6));
    }
    updateDisplay(result);
}

function updateDisplay(num) {
    const display = document.querySelector("#display");
    display.textContent = num;
}

let x = "";
let y = "";
let operator = "";

const getNumbers = document.querySelectorAll(".number");
getNumbers.forEach((getNumber) => {
    getNumber.addEventListener("click", (e) => {
        if (operator == "") {
            if (x.length < 8) {
                x += e.target.textContent;
                updateDisplay(x);
            }
        } else {
            if (y.length < 8) {
                y += e.target.textContent;
                updateDisplay(y);
            }
        }
    });
});

const getOperators = document.querySelectorAll(".operator");
getOperators.forEach((getOperator) => {
    getOperator.addEventListener("click", (e) => {
        if (operator != "") {
            operate(x, y, operator);
            x = "";
            y = "";
            operator = "";
        } else {
            operator = e.target.textContent;
            updateDisplay("");
        }
    });
});

const clearDisplay = document.querySelector("#clear");
clearDisplay.addEventListener("click", (e) => {
    x = "";
    y = "";
    operator = "";
    updateDisplay("");
});

const equal = document.querySelector("#equal");
equal.addEventListener("click", (e) => {
    operate(x, y, operator);
    x = "";
    y = "";
    operator = "";
});

const deleteNumber = document.querySelector("#delete");
deleteNumber.addEventListener("click", (e) => {
    if (operator != "") {
        y = y.slice(0, -1);
        updateDisplay(y);
    } else {
        x = x.slice(0, -1);
        updateDisplay(x);
    }
});

const changeSign = document.querySelector("#change-sign");
changeSign.addEventListener("click", (e) => {
    if (operator != "") {
        y *= -1;
        updateDisplay(y);
    } else {
        x *= -1;
        updateDisplay(x);
    }
});

const dot = document.querySelector("#dot");
dot.addEventListener("click", (e) => {
    if (operator != "" && !(y.includes("."))) {
        if (y.length === 0) {
            y = "0.";
        } else {
            y += ".";
        }
        updateDisplay(y);
    } else if (operator == "" && !(x.includes("."))) {
        if (x.length === 0) {
            x = "0.";
        } else {
            x += ".";
        }
        updateDisplay(x);
    }
});