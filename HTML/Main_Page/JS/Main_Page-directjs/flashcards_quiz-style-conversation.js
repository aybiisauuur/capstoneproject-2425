document.addEventListener('DOMContentLoaded', () => {
    const flashcard = document.querySelector('.flashcard');
    const video = document.querySelector('.card-video');
    const nextButton = document.getElementById('next-button');
    const prevButton = document.getElementById('previous-button');
    const shuffleButton = document.getElementById('shuffle-button');
    const resetButton = document.getElementById('reset-button');
    const restartButton = document.querySelector(".btn-primary"); // Restart Flashcards button
    const modal = new bootstrap.Modal(document.getElementById('flashcardModal'));

    // Flashcards data - add your questions here
    let flashcards = [
        {
            frontText: "Deaf",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fa2a9373b89544bbab28f88b6e696e656%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=a2a9373b89544bbab28f88b6e696e656&alt=media&optimized=true"
        },

        {
            frontText: "Filipino Sign Language (FSL)",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fad1649a7b94d46c1936d80fd69ef5919%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=ad1649a7b94d46c1936d80fd69ef5919&alt=media&optimized=true"
        },

        {
            frontText: "Hard-of-Hearing",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fc565c548515b46a98a11b61ba419cce3%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=c565c548515b46a98a11b61ba419cce3&alt=media&optimized=true"
        },

        {
            frontText: "Hearing",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F1c8c0918cc0140fbbabf9e1f32c7bd5f%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=1c8c0918cc0140fbbabf9e1f32c7bd5f&alt=media&optimized=true"
        },

        {
            frontText: "My name is ____.",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fbd3db75db59d44c08194f80b28dd57a5%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=bd3db75db59d44c08194f80b28dd57a5&alt=media&optimized=true"
        },

        {
            frontText: "Yes/Agree",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Ffe3c43d5ebf14d97ac3a1a27b58fd154%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=fe3c43d5ebf14d97ac3a1a27b58fd154&alt=media&optimized=true"
        },

        {
            frontText: "No/Disagree",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F60e52d6f85a8423682905d3b3815ce55%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=60e52d6f85a8423682905d3b3815ce55&alt=media&optimized=true"
        },

    ];

    let currentCardIndex = 0;

    function updateFlashcard() {
        flashcard.classList.remove('flipped');
        video.pause();
        video.currentTime = 0;
        document.querySelector('.front h2').textContent = flashcards[currentCardIndex].frontText;
        video.querySelector('source').src = flashcards[currentCardIndex].videoSrc;
        video.load();
    }

    flashcard.addEventListener('click', function () {
        this.classList.toggle('flipped');

        if (this.classList.contains('flipped')) {
            video.play();
        } else {
            video.pause();
            video.currentTime = 0;
        }
    });

    // next button
    nextButton.addEventListener('click', () => {
        currentCardIndex = (currentCardIndex + 1) % flashcards.length;
        updateFlashcard();
    });

    // previous button
    prevButton.addEventListener('click', () => {
        currentCardIndex = (currentCardIndex - 1 + flashcards.length) % flashcards.length;
        updateFlashcard();
    });

    //shuffle button
    shuffleButton.addEventListener('click', () => {
        // Shuffle the flashcards array using Fisher-Yates algorithm
        for (let i = flashcards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [flashcards[i], flashcards[j]] = [flashcards[j], flashcards[i]];
        }

        // Reset index to 0 after shuffling
        currentCardIndex = 0;
        updateFlashcard();
    });

    //reset button
    const originalFlashcards = [...flashcards]; // Copy the original order
    resetButton.addEventListener('click', () => {
        flashcards = [...originalFlashcards]; // Restore original order
        currentCardIndex = 0; // Reset to the first card
        updateFlashcard();
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space') {
            flashcard.classList.toggle('flipped');
            if (flashcard.classList.contains('flipped')) {
                video.play();
            } else {
                video.pause();
                video.currentTime = 0;
            }
        }
        if (e.code === 'ArrowRight') {
            nextButton.click();
        }
    });

    updateFlashcard();

    // // bootstrap modal 
    // function updateFlashcard() {
    //     if (currentCardIndex >= flashcards.length) {
    //         modal.show(); // Show Bootstrap modal
    //         return;
    //     }
    //     console.log("Showing:", flashcards[currentCardIndex]); // Replace with your flashcard update logic
    // }

    // // Restart Button - Resets flashcards and closes modal
    // restartButton.addEventListener("click", () => {
    //     currentCardIndex = 0; // Reset index
    //     updateFlashcard();
    //     modal.hide(); // Close modal
    // });

    // // Close modal when the close button is clicked
    // document.querySelector("#flashcardModal .btn-secondary").addEventListener("click", () => {
    //     flashcardModal.hide();
    // });
});