const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

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
  const inputValue = parseInt(numberInput.value);
  if (!numberInput.value || isNaN(inputValue) || inputValue < 0) {
    alert("Please provide a decimal number greater than or equal to 0");
    return;
  }

  result.innerText = decimalToBinary(inputValue);
  numberInput.value = "";
};

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});
