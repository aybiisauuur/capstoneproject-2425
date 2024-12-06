$(document).ready(function () {
    // Firebase configuration (use the same config as in client-form.html)
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "firebase/app";
    import { getFirestore, collection, addDoc, onSnapshot } from "firebase/firestore";
    import { getAuth, signInAnonymously } from "firebase/auth";

    const firebaseConfig = {
        apiKey: "AIzaSyCnlzgGB3lSAn8Xf6H-Bx_bJ9QPK6iWJ80",
        authDomain: "senyashub.firebaseapp.com",
        projectId: "senyashub",
        storageBucket: "senyashub.firebasestorage.app",
        messagingSenderId: "272537634617",
        appId: "1:272537634617:web:2763ed67c759373fd30ae8",
        measurementId: "G-R6MYXS2Z0G"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const auth = getAuth(app);
    const messagesCollection = collection(db, "messages");

    function sendMessage(message) {
        return addDoc(messagesCollection), { text: message, timestamp: Date.now() }
    }

    function subscribeToMessages(callback) {
        onSnapshot(messagesCollection, (snapshot) => {
            callback(snapshot.docs.map((doc) => doc.data()));
        });
    }

    subscribeToMessages((messages) => {
        console.log(messages);
    });

    const $messagesContainer = $('#messagesContainer');
    $messagesContainer.empty();
    messages.forEach((message) => {
        $messagesContainer.append(`<p>${message.text}</p>`);
    });

    $('.chat-content').on('submit', function (e) {
        e.preventDefault();

        const answer = $('#answer').val().trim();
        if (answer) {
            // Write to Firestore
            db.collection("messages").add({
                message: answer,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            })
                .then(() => {
                    $('#answer').val(''); // Clear the input field
                })
                .catch((error) => {
                    console.error("Error writing message: ", error);
                    alert("Failed to send message. Try again.");
                });
        } else {
            alert("Please enter a message before submitting.");
        }
    });

    // Example buttons for quick messages
    $('.question-button').on('click', function () {
        const quickMessage = $(this).text();
        $('#answer').val(quickMessage); // Pre-fill textarea with the button's text
    });
});