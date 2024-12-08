// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push, set, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnlzgGB3lSAn8Xf6H-Bx_bJ9QPK6iWJ80",
  authDomain: "senyashub.firebaseapp.com",
  projectId: "senyashub",
  storageBucket: "senyashub.firebasestorage.app",
  messagingSenderId: "272537634617",
  appId: "1:272537634617:web:2763ed67c759373fd30ae8",
  measurementId: "G-R6MYXS2Z0G",
  databaseURL: "https://senyashub-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

// Authenticate User Anonymously
signInAnonymously(auth)
  .then(() => console.log("Signed in anonymously"))
  .catch((error) => console.error("Authentication error:", error));

// References
const messagesContainer = document.getElementById("messagesContainer");
const messageInput = document.getElementById("answer");
const chatForm = document.querySelector(".chat-content");
const questionButtons = document.querySelectorAll(".question-button");
const clearButton = document.querySelector(".clear-button");

// Reference to messages in the database
const messagesRef = ref(database, "messages");

// Function to Render Messages in the UI
const renderMessages = (snapshot) => {
  messagesContainer.innerHTML = ""; // Clear previous messages
  snapshot.forEach((childSnapshot) => {
    const { sender, message } = childSnapshot.val();
    const messageElement = document.createElement("p");
    messageElement.classList.add(sender === "Client" ? "client-message" : "worker-message");
    messageElement.textContent = `${sender}: ${message}`;
    messagesContainer.appendChild(messageElement);
  });
  messagesContainer.scrollTop = messagesContainer.scrollHeight; // Auto-scroll to bottom
};

// Listen for New Messages in Real-Time
onValue(messagesRef, renderMessages);

// Send Message
chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = messageInput.value.trim();

  if (message) {
    const newMessageRef = push(messagesRef); // Create a new message
    set(newMessageRef, {
      sender: "Client",
      message: message,
      timestamp: Date.now(),
    })
      .then(() => {
        messageInput.value = ""; // Clear the input field
        messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll to the bottom
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        alert("Failed to send message. Please try again.");
      });
  } else {
    alert("Please type a message before sending.");
  }
});

// Handle Quick Message Buttons
questionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const quickMessage = button.textContent.trim();
    messageInput.value = quickMessage;
  });
});

// Function to Clear All Messages
const clearMessages = () => {
  remove(messagesRef)
    .then(() => {
      alert("All messages have been cleared!");
      messagesContainer.innerHTML = ""; // Clear the UI
    })
    .catch((error) => {
      console.error("Error clearing messages:", error);
    });
};

// Attach Click Event to Clear Chat Button
clearButton.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent default button behavior
  clearMessages();
});
