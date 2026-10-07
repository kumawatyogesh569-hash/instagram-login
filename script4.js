const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginBtn = document.getElementById('login-btn');
const togglePasswordBtn = document.getElementById('toggle-password');
const loginForm = document.getElementById('login-form');

// Function to handle enabling/disabling the Log In button
function validateInputs() {
    const usernameValue = usernameInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    // Enable login button if password length is at least 6 characters
    if (usernameValue.length > 0 && passwordValue.length >= 6) {
        loginBtn.disabled = false;
    } else {
        loginBtn.disabled = true;
    }

    // Toggle visibility of the "Show" button depending on text entry
    if (passwordValue.length > 0) {
        togglePasswordBtn.style.display = 'block';
    } else {
        togglePasswordBtn.style.display = 'none';
    }
}

// Function to show/hide the password text
function handlePasswordToggle() {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePasswordBtn.textContent = 'Hide';
    } else {
        passwordInput.type = 'password';
        togglePasswordBtn.textContent = 'Show';
    }
}

// Event Listeners
usernameInput.addEventListener('input', validateInputs);
passwordInput.addEventListener('input', validateInputs);
togglePasswordBtn.addEventListener('click', handlePasswordToggle);

// Form Submission intercept (Prevent redirect, log data safely)
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("Mock Submission Successful:");
    console.log("Username/Email:", usernameInput.value);
    console.log("Password Inputted:", passwordInput.value);
    alert("Mock Login Attempt Captured! View console for target payloads.");
});
