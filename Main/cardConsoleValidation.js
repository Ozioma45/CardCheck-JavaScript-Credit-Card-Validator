/* const cardValidate = /^4[0-9]{12}(?:[0-9]{3})?$/.test("422222222222");

console.log(cardValidate); */

//accepting input from user
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter your credit card number: ", (userInput) => {
  // Regular expression to validate credit card number
  const cardValidate = /^4[0-9]{12}(?:[0-9]{3})?$/.test(userInput);

  // Display the result
  console.log(cardValidate);

  rl.close();
});
