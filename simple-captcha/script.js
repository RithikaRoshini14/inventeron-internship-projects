let captchaText = "";

function generateCaptcha() {
  const canvas = document.getElementById("captchaCanvas");
  const ctx = canvas.getContext("2d");

  canvas.width = 200;
  canvas.height = 50;

  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  captchaText = "";

  // Generate random captcha
  for (let i = 0; i < 6; i++) {
    captchaText += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Background
  ctx.fillStyle = "#eee";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw text with slight distortion
  ctx.font = "30px Arial";
  ctx.fillStyle = "black";

  for (let i = 0; i < captchaText.length; i++) {
    let x = 20 + i * 25;
    let y = 35;
    let angle = (Math.random() - 0.5) * 0.5;

    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.fillText(captchaText[i], 0, 0);
    ctx.restore();
  }

  // Add noise lines
  for (let i = 0; i < 5; i++) {
    ctx.strokeStyle = "gray";
    ctx.beginPath();
    ctx.moveTo(Math.random() * 200, Math.random() * 50);
    ctx.lineTo(Math.random() * 200, Math.random() * 50);
    ctx.stroke();
  }
}

function validateCaptcha() {
  const userInput = document.getElementById("input").value.trim();
  const message = document.getElementById("message");

  if (userInput.toLowerCase() === captchaText.toLowerCase()) {
    message.innerText = "Correct!";
    message.style.color = "green";
  } else {
    message.innerText = "Wrong captcha! Try again.";
    message.style.color = "red";
    generateCaptcha(); // auto refresh
  }
}

// Load captcha on start
generateCaptcha();