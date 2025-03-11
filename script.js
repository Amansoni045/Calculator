let display = document.getElementById("display");

function clearDisplay() {
    display.innerText = "0";
}

function appendNumber(number) {
    if (display.innerText === "0") {
        display.innerText = number;
    } else {
        display.innerText += number;
    }
}

function appendOperator(operator) {
    let lastChar = display.innerText.slice(-1);
    if (['+', '-', '*', '/'].includes(lastChar)) {
        display.innerText = display.innerText.slice(0, -1) + operator;
    } else {
        display.innerText += " " + operator + " ";
    }
}

function appendDecimal() {
    let parts = display.innerText.split(" ");
    if (!parts[parts.length - 1].includes(".")) {
        display.innerText += ".";
    }
}

function calculateResult() {
    try {
        display.innerText = eval(display.innerText.replace("×", "*").replace("÷", "/"));
    } catch (e) {
        display.innerText = "Error";
    }
}
