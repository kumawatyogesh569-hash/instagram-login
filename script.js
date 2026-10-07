document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector(".login-form");
  const usernameInput = document.querySelector('input[type="text"]');
  const passwordInput = document.querySelector('input[type="password"]');
  const loginBtn = document.querySelector(".btn-login");

  // Disable button initially until fields are filled
  toggleSubmitButton();

  // Listen to input events on both fields
  usernameInput.addEventListener("input", toggleSubmitButton);
  passwordInput.addEventListener("input", toggleSubmitButton);

  function toggleSubmitButton() {
    const isUsernameFilled = usernameInput.value.trim().length > 0;
    const isPasswordFilled = passwordInput.value.trim().length >= 6; // minimum 6 chars for password

    if (isUsernameFilled && isPasswordFilled) {
      loginBtn.disabled = false;
      loginBtn.style.opacity = "1";
      loginBtn.style.cursor = "pointer";
    } else {
      loginBtn.disabled = true;
      loginBtn.style.opacity = "0.6";
      loginBtn.style.cursor = "not-allowed";
    }
  }

  // Handle Form Submission
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Show loading state
    loginBtn.textContent = "Log in";
    loginBtn.disabled = true;

    // Simulate API request delay
    setTimeout(() => {
      console.log("Login submitted with:", { username, password });
      alert(`Logged in successfully as ${username}`);

      // Reset button state
      loginBtn.textContent = "Log in";
      toggleSubmitButton();
    }, 1500);
  });
});