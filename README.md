# Credit Card Validator

This project is a simple web application that validates credit card information entered by users. It checks the card number, card type (Visa or Mastercard), cardholder name, and CVV.

## Live Preview

You can view the live preview of this project [here](https://ozioma45.github.io/CardCheck-JavaScript-Credit-Card-Validator/).

## Features

- **Credit Card Type Selection**: Users can select between Visa and Mastercard.
- **Credit Card Number Formatting**: The entered card number is automatically formatted to enhance readability.
- **Real-time Validation**: Input fields are validated in real-time as the user types.
- **Card Type Based Validation**: The validation pattern changes dynamically based on the selected card type.
- **Instructions**: Clear instructions are provided for each input field to guide the user.

## Technologies Used

- HTML
- CSS
- JavaScript
- Bootstrap (for styling)

## How to Use

1. Open the live preview link provided above.
2. Enter your cardholder name, card number, expiration date (MM/YY), and CVV.
3. Select your card type (Visa or Mastercard).
4. The input fields will be validated in real-time, and any errors will be highlighted.
5. Once all inputs are valid, you can proceed with the submission.

## Regex Patterns

This project utilizes regular expressions (regex) for input validation. Here are the regex patterns used for validation:

- `holderName`: /^\S+ \S+ \S+$/
- `cardNumber`: /^\d{16}$/
- `visaCardNumber`: /^4[0-9]{12}(?:[0-9]{3})?$/
- `mastercardNumber`: /^5[1-5][0-9]{14}$/
- `cvv`: /^\d{3}$/

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- This project was inspired by the need to create a simple credit card validator.
- Special thanks to contributors and open-source projects used in this project.

## Author

[Ozioma John Egole] - [Ozioma45](https://github.com/Ozioma45)

Feel free to reach out with any questions, suggestions, or feedback!
