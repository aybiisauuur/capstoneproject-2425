document.addEventListener('DOMContentLoaded', () => {
    const flashcard = document.querySelector('.flashcard');
    const video = document.querySelector('.card-video');
    const nextButton = document.getElementById('next-button');
    const prevButton = document.getElementById('previous-button');
    const shuffleButton = document.getElementById('shuffle-button');
    const resetButton = document.getElementById('reset-button');
    
    // Flashcards data - add your questions here
    let flashcards = [
        {
            frontText: "A",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F5fccd86c89ca4a819eff4375249c331f%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=5fccd86c89ca4a819eff4375249c331f&alt=media&optimized=true"
        },

        {
            frontText: "B",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F290cea0025474b589dc5cb8eb49f3ba9%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=290cea0025474b589dc5cb8eb49f3ba9&alt=media&optimized=true"
        },

        {
            frontText: "C",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F54011d16d83f43a0b08e29cb4bd3b85a%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=54011d16d83f43a0b08e29cb4bd3b85a&alt=media&optimized=true"
        },

        {
            frontText: "D",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F5cd17b632bcb4e16a8b8567a1174ce64%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=5cd17b632bcb4e16a8b8567a1174ce64&alt=media&optimized=true"
        },

        {
            frontText: "E",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F09d452abb113431c964f677706fdf206%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=09d452abb113431c964f677706fdf206&alt=media&optimized=true"
        },

        {
            frontText: "F",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F8bd2f028d37e4e808c8f62e7bca974d7%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=8bd2f028d37e4e808c8f62e7bca974d7&alt=media&optimized=true"
        },

        {
            frontText: "G",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F62e09cc0c727427bb995cc959baaa951%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=62e09cc0c727427bb995cc959baaa951&alt=media&optimized=true"
        },

        {
            frontText: "H",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F12ea87b8d6f04cafa323c0fe3c4c3ad7%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=12ea87b8d6f04cafa323c0fe3c4c3ad7&alt=media&optimized=true"
        },

        {
            frontText: "I",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F65a19409f4ca49778f42efa65a2e0437%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=65a19409f4ca49778f42efa65a2e0437&alt=media&optimized=true"
        },

        {
            frontText: "J",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F6f261a2fc88d4a459ff0229ad9f350db%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=6f261a2fc88d4a459ff0229ad9f350db&alt=media&optimized=true"
        },

        {
            frontText: "K",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F6073f9a673414f869083f07dff1b3a62%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=6073f9a673414f869083f07dff1b3a62&alt=media&optimized=true"
        },

        {
            frontText: "L",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F9947ca53a38d4c12be5dffa6c417b1c9%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=9947ca53a38d4c12be5dffa6c417b1c9&alt=media&optimized=true"
        },

        {
            frontText: "M",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F5b7ec1a3240441149334b7f189f4d909%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=5b7ec1a3240441149334b7f189f4d909&alt=media&optimized=true"
        },

        {
            frontText: "N",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F491dd129527e4d0a89a4f8170e3ccab5%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=491dd129527e4d0a89a4f8170e3ccab5&alt=media&optimized=true"
        },

        {
            frontText: "O",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fc650704d906a47629b5319f1d8bcbb92%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=c650704d906a47629b5319f1d8bcbb92&alt=media&optimized=true"
        },

        {
            frontText: "P",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fda68ed21db654f09ac842fb09d54d55e%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=da68ed21db654f09ac842fb09d54d55e&alt=media&optimized=true"
        },

        {
            frontText: "Q",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F4b6e7e1bcee8420bbf510c7861ce36e1%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=4b6e7e1bcee8420bbf510c7861ce36e1&alt=media&optimized=true"
        },

        {
            frontText: "R",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F17fd031f360441939b33a4e72139a8fe%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=17fd031f360441939b33a4e72139a8fe&alt=media&optimized=true"
        },

        {
            frontText: "S",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F5e99509e621f453cbc99f84d2cc8d0f3%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=5e99509e621f453cbc99f84d2cc8d0f3&alt=media&optimized=true"
        },

        {
            frontText: "T",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fef33a9f1f145467d83930093d7bf016d%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=ef33a9f1f145467d83930093d7bf016d&alt=media&optimized=true"
        },

        {
            frontText: "U",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F86a755e9a6854fefb5b816c6cc298cc8%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=86a755e9a6854fefb5b816c6cc298cc8&alt=media&optimized=true"
        },

        {
            frontText: "V",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fa0bf0d4590df4634afb7ae76bcea3e16%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=a0bf0d4590df4634afb7ae76bcea3e16&alt=media&optimized=true"
        },

        {
            frontText: "W",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F471cdb61b53a41b090adbacfca397eea%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=471cdb61b53a41b090adbacfca397eea&alt=media&optimized=true"
        },

        {
            frontText: "X",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F132bfc4a83dc4173bee3c7658289d87f%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=132bfc4a83dc4173bee3c7658289d87f&alt=media&optimized=true"
        },

        {
            frontText: "Y",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fb3b72a4324ea4828b05ab836bd08eead%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=b3b72a4324ea4828b05ab836bd08eead&alt=media&optimized=true"
        },

        {
            frontText: "Z",
            videoSrc: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fd4f7fae673114c26aa27b18730e530a0%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=d4f7fae673114c26aa27b18730e530a0&alt=media&optimized=true"
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

    flashcard.addEventListener('click', function() {
        this.classList.toggle('flipped');
        
        if(this.classList.contains('flipped')) {
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
        if(e.code === 'Space') {
            flashcard.classList.toggle('flipped');
            if(flashcard.classList.contains('flipped')) {
                video.play();
            } else {
                video.pause();
                video.currentTime = 0;
            }
        }
        if(e.code === 'ArrowRight') {
            nextButton.click();
        }
    });


    updateFlashcard();
});