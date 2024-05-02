//Part3
//Create all variables
const registration = document.getElementById("registration");
const userName =document.getElementById("name");
const email = document.getElementById("email")
const password = document.getElementById("password")
const passwordChecked = document.getElementById("passwordCheck")
const errorDisplay = document.getElementById('errorDisplay');
let message = [];

// 1. function for validation name
function validateUserName() {
    if (userName.value.trim() === "" || userName.value === null) {
        message.push("Username is Required.");
    }

    if (userName.value.length < 4) {
        message.push("Username must be at least four characters long.");
    }
     // Check if the username contains at least two unique characters
     const uniqueChars = new Set(userName.value);
     if (uniqueChars.size < 2) {
         message.push("Username must contain at least two unique characters.");
     }
 
    //  // Check if the username contains any special characters or whitespace
     if (!/^[a-zA-Z0-9]+$/.test(userName.value)) {
         message.push("Username cannot contain any special characters or whitespace.");
     }
}

//2.  Function to validate the email
function validateEmail() {
    // Check if the email is not blank
    if (email.value.trim() === "") {
        message.push("Email can not be blank.");
    }

    // Check if the email is a valid email address
    if (!/^\S+@\S+\.\S+$/.test(email.value)) {
        message.push("Invalid email address.");
    }

    // Check if the email is from the domain "example.com"
    if (email.value.toLowerCase().endsWith('@example.com')) {
        message.push("Emails from example.com are not allowed.");
    }
}

//3. Function to validate the password

function validatePassword() {
    // Check if passwords match
    if (password.value !== passwordChecked.value) {
        message.push("Passwords do not match.");
    }

    // Check password length
    if (password.value.length < 12) {
        message.push("Password must be at least 12 characters long.");
    }

    // Check for uppercase, lowercase, numbers, and special characters
    if (!/[A-Z]/.test(password.value) || !/[a-z]/.test(password.value) || !/\d/.test(password.value) || !/[^a-zA-Z0-9]/.test(password.value)) {
        message.push("Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.");
    }

    // Check if password contains the word "password"
    if (password.value.toLowerCase().includes("password")) {
        message.push("Password cannot contain the word 'password'.");
    }

    // Check if password contains the username
    if (password.value.toLowerCase().includes(userName.value.toLowerCase())) {
        message.push("Password cannot contain the username.");
    }
}

//4. Registration form


registration.addEventListener("submit", (e) => {
    validateUserName(); 
    validateEmail(); 
    validatePassword();  
     if (message.length > 0) {
        e.preventDefault();
        errorDisplay.style.display = "block";
        errorDisplay.style.color = "red";
        errorDisplay.style.background = "#fcc";
        errorDisplay.innerHTML = message.join("<br>");
     } else {
        e.preventDefault();
        errorDisplay.style.display = "block";
        errorDisplay.style.color = "green";
        errorDisplay.style.background = "#98fb98";
        errorDisplay.innerHTML = "Register Successfully!";
     }
     message = [];
})


//Part 4: Login Form Validation Requierement
const login = document.getElementById("login");
const loginName = document.getElementById("loginName");
const loginPassword = document.getElementById("loginPassword");


function validatedLoginUserName () {
    if (loginName.value.trim() === "" || loginName.value === null) {
      message.push("Username can not be blank.")
    }
}

function validatedLoginPassword () {
    if(loginPassword.value.trim() === "") {
        message.push("Please fill the space");
    }
}

login.addEventListener("submit", (e) => {
    validatedLoginUserName(); 
    validatedLoginPassword();  
     if (message.length > 0) {
        e.preventDefault();
        errorDisplay.style.display = "block";
        errorDisplay.style.color = "red";
        errorDisplay.style.background = "#fcc";
        errorDisplay.innerHTML = message.join("<br>");
     } else {
        e.preventDefault();
        errorDisplay.style.display = "block";
        errorDisplay.style.color = "green";
        errorDisplay.style.background = "#98fb98";
        errorDisplay.innerHTML = "Login Successfully!";
     }
     message = [];
})

