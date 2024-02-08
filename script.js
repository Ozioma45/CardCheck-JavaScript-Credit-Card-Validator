/* document
  .getElementById("cardNumber")
  .addEventListener("input", function (event) {
    let input = event.target;
    let value = input.value.replace(/\s/g, ""); // Remove existing spaces
    let formattedValue = "";

    for (let i = 0; i < value.length; i++) {
      if (i % 4 === 0 && i !== 0) {
        formattedValue += " ";
      }
      formattedValue += value[i];
    }

    input.value = formattedValue;
  });

//Validation Script
const inputs = document.querySelectorAll("input");

const patterns = {
  holderName: /^\S+ \S+ \S+$/,
};

//validation function
function validate(field, regex) {
  //console.log(regex.test(field.value));
  if (regex.test(field.value)) {
    console.log("Regex is valid");
  } else {
    console.log("Regex is not valid");
  }
}

inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    //console.log(e.target.name);
    validate(e.target, patterns[e.target.name]);
  });
});
 */

// Regex patterns for validation
const patterns = {
  holderName: /^\S+ \S+ \S+$/,
  visaCardNumber: /^4[0-9]{12}(?:[0-9]{3})?$/,
  mastercardNumber: /^5[1-5][0-9]{14}$/,
};

// Function to validate input fields
function validate(field, regex) {
  if (regex.test(field.value)) {
    console.log("Regex is valid");
  } else {
    console.log("Regex is not valid");
  }
}

// Event listener for card type selection
document.querySelectorAll('input[name="cardType"]').forEach((input) => {
  input.addEventListener("change", (e) => {
    const selectedCardType = e.target.value;
    if (selectedCardType === "visa") {
      patterns.cardNumber = patterns.visaCardNumber;
      updateCardNumberInstructions(
        "Please enter your 16-digit Visa card number which starts with '4'"
      );
    } else if (selectedCardType === "mastercard") {
      patterns.cardNumber = patterns.mastercardNumber;
      updateCardNumberInstructions(
        "Please enter your 16-digit Mastercard number which starts with '5'"
      );
    }
  });
});

// Event listeners for input fields
const inputs = document.querySelectorAll("input");
inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    validate(e.target, patterns[e.target.name]);
  });
});

// Function to update card number instructions
function updateCardNumberInstructions(instructionText) {
  document.getElementById("cardNumberInstruction").innerText = instructionText;
}
