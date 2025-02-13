import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnlzgGB3lSAn8Xf6H-Bx_bJ9QPK6iWJ80",
  authDomain: "senyashub.firebaseapp.com",
  databaseURL: "https://senyashub-default-rtdb.firebaseio.com",
  projectId: "senyashub",
  storageBucket: "senyashub.firebasestorage.app",
  messagingSenderId: "272537634617",
  appId: "1:272537634617:web:2763ed67c759373fd30ae8",
  measurementId: "G-R6MYXS2Z0G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Toggle password visibility
document.querySelectorAll('.toggle-password').forEach(button => {
  button.addEventListener('click', function () {
    const input = this.previousElementSibling;
    input.type = input.type === 'password' ? 'text' : 'password';
    this.textContent = input.type === 'password' ? '👁' : '🙈';
  });
});

// Submit button
const signup = document.getElementById('signup_button');
signup.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent default form submission

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const retypepass = document.getElementById('retypepass').value;

  // Check if passwords match
  if (password !== retypepass) {
    alert("Passwords do not match!");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Account created successfully!");
      window.location.href = "index-home.html";
    })
    .catch((error) => {
      console.error("Error Code:", error.code);
      console.error("Error Message:", error.message);
      alert(error.message);
    });
});