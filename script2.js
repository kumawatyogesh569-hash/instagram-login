document.addEventListener("DOMContentLoaded", () => {
  const passwordInput = document.querySelector(".password-input");
  const togglePasswordBtn = document.querySelector(".toggle-password-btn");

  // Keep eye visible if user typed text (even after clicking outside)
  passwordInput.addEventListener("input", () => {
    if (passwordInput.value.length > 0) {
      togglePasswordBtn.classList.add("is-visible");
    } else {
      togglePasswordBtn.classList.remove("is-visible");
    }
  });

  // Toggle Password Visibility
  togglePasswordBtn.addEventListener("click", () => {
    const isPassword = passwordInput.getAttribute("type") === "password";
    
    passwordInput.setAttribute("type", isPassword ? "text" : "password");

    togglePasswordBtn.innerHTML = isPassword
      ? `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#1c2b33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
          <line x1="1" y1="1" x2="23" y2="23"></line>
         </svg>`
      : `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#8e8e8e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
          <circle cx="12" cy="12" r="3"></circle>
         </svg>`;
  });
});