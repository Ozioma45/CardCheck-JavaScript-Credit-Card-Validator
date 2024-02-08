document
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
