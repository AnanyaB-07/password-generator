function generatePassword() {
  const length = document.getElementById("length").value;
  const hasUpper = document.getElementById("uppercase").checked;
  const hasLower = document.getElementById("lowercase").checked;
  const hasNumbers = document.getElementById("numbers").checked;
  const hasSymbols = document.getElementById("symbols").checked;

  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

  let allChars = "";
  if (hasUpper) allChars += upper;
  if (hasLower) allChars += lower;
  if (hasNumbers) allChars += numbers;
  if (hasSymbols) allChars += symbols;

  if (allChars === "") {
    alert("Please select at least one option!");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  document.getElementById("password").value = password;
  checkStrength(password);
}

function copyPassword() {
  const passwordField = document.getElementById("password");
  passwordField.select();
  document.execCommand("copy");
  alert("Password copied!");
}

function checkStrength(password) {
  let strength = "Weak";
  if (password.length >= 12 && /[A-Z]/.test(password) && /\d/.test(password) && /\W/.test(password)) {
    strength = "Strong";
  } else if (password.length >= 8) {
    strength = "Medium";
  }
  document.getElementById("strength").innerText = "Strength: " + strength;
}
