//Part3
//Create all variables
const registration = document.getElementById("registration");
const userNameInput = registration.elements("username").value;
const emailInput = registration.elements["email"].value;
const passwordInput = registration.elements["password"].value;
const passwordChecked = registration.elements["passwordCheck"].value;
const errorDisplay = document.getElementById('errorDisplay');

// 1.Function to validate username

function validateUserName(userNameInput) {
    //check that username is not blank
    if (userNameInput === "") {
        return "UserName can not be blank";
    }
    // check if username is at least four character long
    if (userNameInput.length < 4) {
        return "Username must be at least four characters long."
    }

    // Check if the username contains at least two unique characters
    const uniqueChars = new Set(username);
    if (uniqueChars.size < 2) {
        return "Username must contain at least two unique characters.";
    }

    // Check if the username contains any special characters or whitespace
    if (!/^[a-zA-Z0-9]+$/.test(username)) {
        return "Username cannot contain any special characters or whitespace.";
    }

    // Username is valid
    return "";
}

//2.  Function to validate the email
function validateEmail(emailInput) {
    // Check if the email is not blank
    if (emailInput === "") {
        return "Email can not be blank.";
    }

    // Check if the email is a valid email address
    if (!/^\S+@\S+\.\S+$/.test(emailInput)) {
        return "Invalid email address.";
    }

    // Check if the email is from the domain "example.com"
    if (emailInput.toLowerCase().endsWith('@example.com')) {
        return "Emails from example.com are not allowed.";
    }

    // Email is valid
    return "";
}

//3. Function to validate the password

function validatePassword(passwordInput, passwordCheck, userNameInput) {
    // Check if passwords match
    if (passwordInput !== passwordCheck) {
        return "Passwords do not match.";
    }

    // Check password length
    if (passwordInput.length < 12) {
        return "Password must be at least 12 characters long.";
    }

    // Check for uppercase, lowercase, numbers, and special characters
    if (!/[A-Z]/.test(passwordInput) || !/[a-z]/.test(passwordInput) || !/\d/.test(passwordInput) || !/[^a-zA-Z0-9]/.test(passwordInput)) {
        return "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
    }

    // Check if password contains the word "password"
    if (passwordInput.toLowerCase().includes("password")) {
        return "Password cannot contain the word 'password'.";
    }

    // Check if password contains the username
    if (passwordInput.toLowerCase().includes(userNameInput.toLowerCase())) {
        return "Password cannot contain the username.";
    }

    // Password is valid
    return "";
}

//4. Function to handle form submission

function handleRegistrationFormSubmit(evt) {
    evt.preventDefault(); // Prevent the form from submitting

    // Validate username
    const usernameErrorMessage = validateUserName(userNameInput);
    if (usernameErrorMessage !== "") {
        displayError(usernameErrorMessage);
        return;
    }

    // Validate email
    const emailErrorMessage = validateEmail(emailInput);
    if (emailErrorMessage !== "") {
        displayError(emailErrorMessage);
        return;
    }

    // Validate password
    const passwordErrorMessage = validatePassword(passwordInput, passwordCheck, userNameInput);
    if (passwordErrorMessage !== "") {
        displayError(passwordErrorMessage);
        return;
    }

    // Check if terms are accepted
    const termsAccepted = registration.elements['terms'].checked;
    if (!termsAccepted) {
        displayError("Please accept the terms and conditions.");
        return;
    }

    // Store user data using localStorage
    const userData = {
        userNameInput: username,
        emailInput: email,
        passwordInput: password
    };

    // Check if username is already taken
    const storedUserData = JSON.parse(localStorage.getItem('userData')) || [];
    const isUsernameTaken = storedUserData.some(user => user.username === username);
    if (isUsernameTaken) {
        displayError("That username is already taken.");
        return;
    }

    // Store user data
    storedUserData.push(userData);
    localStorage.setItem('userData', JSON.stringify(storedUserData));

    // Clear form fields
    registration.reset();

    // Display success message
    displaySuccess("Registration successful!");
}

// Function to display error message
function displayError(message) {
    const errorDisplay = document.getElementById('errorDisplay');
    errorDisplay.textContent = message;
    errorDisplay.style.display = "block"
  
    
}

// Function to display success message
function displaySuccess(message) {
    const errorDisplay = document.getElementById('errorDisplay');
    errorDisplay.textContent = message;
    errorDisplay.style.color = "green"
}

// Attach event listener to the registration form submission
registration.addEventListener("submit", handleRegistrationFormSubmit(evt));


