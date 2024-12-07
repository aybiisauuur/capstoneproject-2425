import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

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


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

// Anonymous Authentication
signInAnonymously(auth)
    .then(() => console.log("Signed in anonymously"))
    .catch((error) => console.error("Authentication error: ", error));

// Firestore References
const messagesRef = collection(db, "messages");

// Listen for Real-Time Updates
const messagesContainer = document.getElementById("messagesContainer");

const messagesQuery = query(messagesRef, orderBy("timestamp", "asc"));
onSnapshot(messagesQuery, (snapshot) => {
    messagesContainer.innerHTML = ""; // Clear the container
    snapshot.forEach((doc) => {
        const { sender, message } = doc.data();
        const messageElement = document.createElement("p");
        messageElement.textContent = `${sender}: ${message}`;
        messagesContainer.appendChild(messageElement);
    });
});

// Sending Messages
document.querySelector(".chat-content").addEventListener("submit", async (e) => {
    e.preventDefault();

    const answerInput = document.getElementById("answer");
    const message = answerInput.value.trim();

    if (message) {
        try {
            await addDoc(messagesRef, {
                sender: "client",
                message: message,
                timestamp: serverTimestamp()
            });
            answerInput.value = ""; // Clear input field
        } catch (error) {
            console.error("Error sending message: ", error);
            alert("Failed to send message. Try again.");
        }
    } else {
        alert("Please enter a message before submitting.");
    }
});

// Quick Message Buttons
document.querySelectorAll(".question-button").forEach((button) => {
    button.addEventListener("click", () => {
        const quickMessage = button.textContent;
        document.getElementById("answer").value = quickMessage;
    });
});
