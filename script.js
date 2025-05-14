let screen = document.querySelector("#result");
let btn = document.querySelectorAll(".btn");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function (e) {
    let btntext = e.target.innerText;
    if (btntext == "×") {
      btntext = "*";
    }
    if (btntext == "÷") {
      btntext = "/";
    }
    if (btntext == "−") {
      btntext = "-";
    }
    screen.value += btntext;
  });
}

function sin() {
  result.value = Math.sin(result.value);
}

function cos() {
  result.value = Math.cos(result.value);
}

function tan() {
  result.value = Math.tan(result.value);
}

function pow() {
  result.value = Math.pow(result.value, 2);
}

function sqrt() {
  result.value = Math.sqrt(result.value, 2);
}

function log() {
  result.value = Math.log(result.value);
}

function pi() {
  result.value = 3.14159265359;
}

function e() {
  result.value = 2.71828182846;
}

function rad() {
  result.value = result.value * (Math.PI / 180);
}

function deg() {
  result.value = result.value * (180 / Math.PI);
}

function percent() {
  result.value = result.value / 100;
}

function exp() {
  let val = Number(result.value);
  result.value = Math.exp(val);
}

function inv() {
  result.value = 1 / result.value;
}

function ln() {
  let val = Number(result.value);
  if (val <= 0) {
    result.value = "Invalid Input";
  } else {
    result.value = Math.log(val);
  }
}

function fact() {
  let num = Number(result.value);
  if (num < 0) {
    result.value = "Invalid";
    return;
  }
  let f = 1;
  for (let i = 1; i <= num; i++) {
    f *= i;
  }
  result.value = f;
}

function backspc() {
  result.value = result.value.substr(0, result.value.length - 1);
}

let previousAnswer = 0;

function evaluate() {
  let expression = result.value;
  if (isNaN(eval(expression))) {
    result.value = "Error";
  } else {
    result.value = eval(expression);
    previousAnswer = result.value; // Store the result for "ans" function
  }
}

function ans() {
  result.value += previousAnswer; // Appends previous answer to the current input
}
