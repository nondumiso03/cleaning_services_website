// SCROLL TO CONTACT
function scrollToContact() {
  document.getElementById("contact-footer").scrollIntoView({ behavior: "smooth" });
}

// SEND CONTACT MESSAGE
function sendMessage(event) {
  event.preventDefault(); // prevent default form submission
  // Redirect to thank-you page
  window.location.href = "thank-you.html";
}


// LOGIN FUNCTIONALITY
document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById("loginForm");
  if (!loginForm) return; // exit if no login form on page

  // Hardcoded users for testing
  const users = [
    { email: "nondumisoxulu170@gmail.com", password: "password@123" },
    { email: "info@neatnest.com", password: "admin_2026" }
  ];

  loginForm.addEventListener("submit", function(e) {
    e.preventDefault(); // prevent page reload

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      loginError.textContent = "Login successful!"; 
      window.location.href = "index.html"; 
    } else {
      loginError.textContent = "Invalid email or password!";
    }

  });
});
