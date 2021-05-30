const screen = document.querySelector(".text");
let tempStorage = 0;
let operatorFlag = 0;

function printInput(input) {
  if (screen.innerText === "0") {
    screen.innerText = input;
  } else {
    screen.innerText += input;
  }
  console.log(`Printed ${input}`);
}

function clearScreen() {
  screen.innerText = "0";
  console.log("Screen set to 0");
}

function resetCalc() {
  tempStorage = 0;
  operatorFlag = 0;
  clearScreen();
  console.log("tempStorage and operatorFlag reset");
}

function removeLastInput() {
  if (screen.innerText.length !== 1) {
    screen.innerText = screen.innerText.substring(
      0,
      screen.innerText.length - 1
    );
    console.log(`Removed one number \n ${screen.innerText.length} left`);
  } else {
    clearScreen();
  }
}

function mathAdd() {
  tempStorage = parseInt(screen.innerText);
  operatorFlag = 1;
  console.log(`${tempStorage} stored.`);
  clearScreen();
}

function mathSubtract() {
  tempStorage = parseInt(screen.innerText);
  operatorFlag = 2;
  console.log(`${tempStorage} stored`);
  clearScreen();
}

function mathMultiply() {
  tempStorage = parseInt(screen.innerText);
  operatorFlag = 3;
  console.log(`${tempStorage} stored`);
  clearScreen();
}

function mathDivide() {
  tempStorage = parseInt(screen.innerText);
  operatorFlag = 4;
  console.log(`${tempStorage} stored`);
  clearScreen();
}

function showResult(x, y) {
  if (operatorFlag === 1) {
    x = tempStorage;
    y = parseInt(screen.innerText);
    screen.innerText = x + y;
    tempStorage = 0;
    console.log(`${x} + ${y} = ${screen.innerText}`);
  } else if (operatorFlag === 2) {
    x = tempStorage;
    y = parseInt(screen.innerText);
    screen.innerText = x - y;
    tempStorage = 0;
    console.log(`${x} - ${y} = ${screen.innerText}`);
  } else if (operatorFlag === 3) {
    x = tempStorage;
    y = parseInt(screen.innerText);
    screen.innerText = x * y;
    tempStorage = 0;
    console.log(`${x} * ${y} = ${screen.innerText}`);
  } else if (operatorFlag === 4) {
    x = tempStorage;
    y = parseInt(screen.innerText);
    screen.innerText = x / y;
    tempStorage = 0;
    console.log(`${x} / ${y} = ${screen.innerText}`);
  }
}

// key mapping
document.querySelector(".buttons").addEventListener("click", function (event) {
  if (event.target.className.includes("number") === true) {
    printInput(event.target.innerText);
  } else if (event.target.className.includes("cancel") === true) {
    resetCalc();
  } else if (event.target.className.includes("back") === true) {
    removeLastInput();
  } else if (event.target.className.includes("add") === true) {
    mathAdd();
  } else if (event.target.className.includes("subtract") === true) {
    mathSubtract();
  } else if (event.target.className.includes("multiply") === true) {
    mathMultiply();
  } else if (event.target.className.includes("divide") === true) {
    mathDivide();
  } else if (event.target.className.includes("equal") === true) {
    showResult();
  } else {
    console.log(`error: don't drag :sadge:`);
  }
});

/*
document.querySelector(".buttons").addEventListener("click", function (event) {
  console.log(event.target);
  if (event.target.className.includes("number") === true) {
    printNumber(event.target.innerText);
    console.log(`Printed ${event.target.innerText}.`);
  } else {
    console.log(`Printed ${event.target.innerText} which isn't a number.`);
  }
});*/
/*
const allButtons = document.querySelectorAll(".button");

for (i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener("click", function (event) {
    if (event.target.className.includes("number") === true) {
      printNumber(event.target.innerText);
      console.log(`selected number ${event.target.innerText}`);
    } else if (event.target === allButtons[0]) {
      document.querySelector(".text").innerText = "0";
      console.log(`canceled succesfully`);
    } else {
      console.log(`error`);
    }
  });
}

// parseInt()
*/
