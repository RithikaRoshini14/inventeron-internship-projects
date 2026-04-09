const form = document.getElementById("form");
const message = document.getElementById("message");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // Validation
  if (name === "" || email === "" || password === "" || confirmPassword === "") {
    message.innerText = "All fields are required!";
    message.style.color = "red";
    return;
  }

  if (!email.includes("@")) {
    message.innerText = "Enter a valid email!";
    message.style.color = "red";
    return;
  }

  if (password.length < 6) {
    message.innerText = "Password must be at least 6 characters!";
    message.style.color = "red";
    return;
  }

  if (password !== confirmPassword) {
    message.innerText = "Passwords do not match!";
    message.style.color = "red";
    return;
  }

  // Store multiple users
  const user = { name, email, password };

  let users = JSON.parse(localStorage.getItem("users")) || [];
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));

  message.innerText = "Registration Successful!";
  message.style.color = "green";

  form.reset();
});