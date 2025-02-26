const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");
const animationContainer = document.getElementById("animation-container");
const animationData = [
  {
    inputVal: 5,
    addElDelay: 1000,
    text: 'decimalToBinary(5) returns "10" + 1 (5 % 2). Then it pops off the stack.',
    showMsgDelay: 15000,
    removeMsgDelay: 20000,
  },

  {
    inputVal: 2,
    addElDelay: 1500,
    text: 'decimalToBinary(2) returns "1" + 0 (2 % 2) and gives that value to the stack below. Then it pops off the stack.',
    showMsgDelay: 10000,
    removeMsgDelay: 15000,
  },
  {
    inputVal: 1,
    addElDelay: 2000,
    text: "decimalToBinary(1) returns '1' (base case) and gives that value to the stack below. Then it pops off the stack.",
    showMsgDelay: 5000,
    removeMsgDelay: 10000,
  },
];

const showAnimation = () => {
  result.innerText = "Call Stack Animation";
  animationData.forEach(
    ({ inputVal, text, addElDelay, showMsgDelay, removeMsgDelay }) => {
      setTimeout(() => {
        animationContainer.innerHTML += `<p id="${inputVal}" class="animation-frame"> DecimalToBinary( ${inputVal} )</p>`;
      }, addElDelay);

      setTimeout(() => {
        document.getElementById(inputVal).textContent = text;
      }, showMsgDelay);
      setTimeout(() => {
        document.getElementById(inputVal).remove();
      }, removeMsgDelay);
    }
  );
  setTimeout(() => {
    result.textContent = decimalToBinary(5);
  }, 20000);
};

const decimalToBinary = (input) => {
  //1st  way create input array where you push each input value
  // then quotients array to push each quotient value
  //and finaly a remainder array to push each remainder
  //then assign quotient to input to start again the loop
  //finaly reverse the remainder array and call join() to
  //convert array into string

  // const inputs = [];
  // const quotients = [];
  // const remainders = [];

  // if (input === 0) {
  //   result.innerText = "0";
  //   return;
  // }

  // while (input > 0) {
  //   const quotient = Math.floor(input / 2);
  //   const remainder = input % 2;

  //   inputs.push(input);
  //   quotients.push(quotient);
  //   remainders.push(remainder);
  //   input = quotient;
  // }

  // console.log("Inputs: ", inputs);
  // console.log("Quotients: ", quotients);
  // console.log("Remainders: ", remainders);

  // result.innerText = remainders.reverse().join("");

  //END

  //Refactor while loop
  //create an empty string assign it to a variable
  // inside the while loop, append that variable to the result
  // of remainder of input (input%2) and assign it to same var
  // var = input%2 + var;
  // divide input by 2 and assign it to same var holding input value
  //input = input/2
  //the display the result on screen;

  // let binary = "";

  // if (input === 0) {
  //   binary = "0";
  // }

  // while (input > 0) {
  //   binary = (input % 2) + binary;
  //   input = Math.floor(input / 2);
  // }

  // result.innerText = binary;

  //END

  //3rd way using recursive;
  // seek the base case and
  // then call the function itself passing input value -1 as param to get
  //the min val  closed to the base case;

  if (input === 0 || input === 1) {
    return String(input);
  } else {
    return decimalToBinary(Math.floor(input / 2)) + (input % 2);
  }
};

const checkUserInput = () => {
  const inputInt = parseInt(numberInput.value);
  if (!numberInput.value || isNaN(inputInt) || inputInt < 0) {
    alert("Please provide a decimal number greater than or equal to 0");
    return;
  }
  if (inputInt === 5) {
    showAnimation();
    return;
  }

  result.innerText = decimalToBinary(inputInt);
  numberInput.value = "";
};

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});
