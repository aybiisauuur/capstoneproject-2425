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

// DOM elements
const responseBox = document.querySelector('.response-box');
const clearBtn = document.querySelector('.clear-btn');

// Real-time listener for Firestore
const messagesRef = collection(db, "messages");
const messagesQuery = query(messagesRef, orderBy("timestamp", "asc"));

onSnapshot(messagesQuery, (snapshot) => {
    responseBox.innerHTML = ""; // Clear previous messages
    snapshot.forEach((doc) => {
        const { sender, message } = doc.data();
        const messageItem = document.createElement('p');
        messageItem.textContent = `${sender}: ${message}`;
        responseBox.appendChild(messageItem);
    });
});


// Clear messages on button click
clearBtn.addEventListener('click', () => {
    responseBox.innerHTML = "";
});
