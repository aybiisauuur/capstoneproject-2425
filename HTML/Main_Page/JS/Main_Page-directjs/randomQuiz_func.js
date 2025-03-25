const questions = [
    // Video Question
    {
        type: "video",
        video: "https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F0299652d0ea94bdab652d539b2616b7d%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=0299652d0ea94bdab652d539b2616b7d&alt=media&optimized=true",
        question: "Watch the video and answer:",
        options: ["Good Morning", "Nice to Meet you", "Good Evening'"],
        correct: "Nice to Meet you"
    },
    {
        type: "video",
        video: "https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F7c3f41cef37546958629bc8d3e844c2b%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=7c3f41cef37546958629bc8d3e844c2b&alt=media&optimized=true",
        question: "Watch the video and answer:",
        options: ["Good Morning", "Long time no see", "Good Evening'"],
        correct: "Long time no see"
    },
    {
        type: "video",
        video: "https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F75c44265368f48d2a8fd3ed56e3e0821%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=75c44265368f48d2a8fd3ed56e3e0821&alt=media&optimized=true",
        question: "Watch the video and answer:",
        options: ["Good Morning", "See you later", "Good Evening'"],
        correct: "See you later"
    },
    {
        type: "video",
        video: "https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F9aa5c6e3c22a488c81ea9b78cd9d0a51%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=9aa5c6e3c22a488c81ea9b78cd9d0a51&alt=media&optimized=true",
        question: "Watch the video and answer:",
        options: ["Good Morning", "Take care", "Good Evening'"],
        correct: "Take care"
    },
    {
        type: "video",
        video: "https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F67fae21fb722479283ce276ea388eadf%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=67fae21fb722479283ce276ea388eadf&alt=media&optimized=true",
        question: "Watch the video and answer:",
        options: ["Good Morning", "You're Welcome", "Good Evening'"],
        correct: "You're Welcome"
    },
    {
        type: "video",
        video: "https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2Fd702dd1b2538458098cba218905c9987%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=d702dd1b2538458098cba218905c9987&alt=media&optimized=true",
        question: "Watch the video and answer:",
        options: ["Good Morning", "Hi/Hello", "Good Evening'"],
        correct: "Hi/Hello"
    },
    {
        type: "video",
        video: "https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2Fee781b67a8bf4e488174c0156c18914b%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=ee781b67a8bf4e488174c0156c18914b&alt=media&optimized=true",
        question: "Watch the video and answer:",
        options: ["Good Morning", "Thank you", "Good Evening'"],
        correct: "Thank you"
    },
    // Video Flashcard
    {
        type: "flashcard",
        front: "What does this sign mean?",
        video: "https://cdn.builder.io/your-video-asset-url", // Add video URL
        correct: true
    },
    //11
    {
        type: "flashcard",
        front: "What does this sign mean?",
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F03059a88b09a4c75bbba39f2ee592978%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=03059a88b09a4c75bbba39f2ee592978&alt=media&optimized=true", // Add video URL
        correct: true
    },
    //B
    {
        type: "flashcard",
        front: "What does this sign mean?",
        video: "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F03059a88b09a4c75bbba39f2ee592978%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=03059a88b09a4c75bbba39f2ee592978&alt=media&optimized=true", // Add video URL
        correct: true
    },
    {
        type: "video-multiple-choice",
        question: "Is this video showing an FSL for Nice to meet you?",
        options: [
            "https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F75c44265368f48d2a8fd3ed56e3e0821%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=75c44265368f48d2a8fd3ed56e3e0821&alt=media&optimized=true", 
            "https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F03059a88b09a4c75bbba39f2ee592978%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=03059a88b09a4c75bbba39f2ee592978&alt=media&optimized=true",
            "https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F0299652d0ea94bdab652d539b2616b7d%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=0299652d0ea94bdab652d539b2616b7d&alt=media&optimized=true",
            "https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F7c3f41cef37546958629bc8d3e844c2b%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=7c3f41cef37546958629bc8d3e844c2b&alt=media&optimized=true"
        ],
        correct: 3
    }
];


const config = {
    totalQuestions: 15,
    shuffleQuestions: true,
    shuffleAnswers: true,
    showProgress: true
};

let currentQuestion = 0;
let score = 0;
let selectedQuestions = [];

function initQuiz() {
    selectedQuestions = questions.sort(() => Math.random() - 0.5)
    .slice(0, config.totalQuestions);

    const container = document.getElementById('questions');
    selectedQuestions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        
        let content = `<div class="question-type">${q.type.replace('-', ' ').toUpperCase()}</div>`;
        
        switch(q.type) {
            case 'video':
                content += `
                <div class="video-container">
                    <video controls controlsList="nodownload">
                        <source src="${q.video}" type="video/mp4">
                        Your browser does not support HTML5 video.
                    </video>
                </div>
                <h3>${q.question}</h3>
                <div class="options">
                    ${q.options.map((option, i) => `
                        <div class="option" onclick="selectAnswer(${index}, ${i})">${option}</div>
                    `).join('')}
                </div>
                <button class="final-answer" onclick="lockAnswer(${index})" disabled>Final Answer</button>`;
                break;
            
            case 'video-multiple-choice':
                content += `
                <h3>${q.question}</h3>
                <div class="video-options-grid">
                    ${q.options.map((videoUrl, i) => `
                        <div class="option video-option" onclick="selectAnswer(${index}, ${i})">
                            <video controls controlsList="nodownload">
                                <source src="${videoUrl}" type="video/mp4">
                                Your browser does not support HTML5 video.
                            </video>
                        </div>
                    `).join('')}
                </div>
                <button class="final-answer" onclick="lockAnswer(${index})" disabled>Final Answer</button>`;
                break;


            case 'flashcard':
                content += `
                <div class="flashcard" onclick="toggleFlashcard(${index})">
                    <div class="flashcard-inner">
                        <div class="flashcard-front">${q.front}</div>
                        <div class="flashcard-back">
                            <video controls controlsList="nodownload">
                                <source src="${q.video}" type="video/mp4">
                                Your browser does not support HTML5 video.
                            </video>
                        </div>
                    </div>
                </div>
                <div class="flashcard-controls">
                    <button onclick="markFlashcardCorrect(${index})">✅ I understood</button>
                    <button onclick="markFlashcardWrong(${index})">❌ Need help</button>
                </div>`;
                break;
                
            default: // Multiple choice
                content += `
                    <h3>${q.question}</h3>
                    <div class="options">
                        ${q.options.map((option, i) => `
                            <div class="option" onclick="selectAnswer(${index}, ${i})">${option}</div>
                        `).join('')}
                    </div>`;
        }
        
        questionDiv.innerHTML = content;
        container.appendChild(questionDiv);
    });

    showQuestion(0);
    createProgressBar();
}

function createProgressBar() {
    const progressBar = document.getElementById('progressBar');
    progressBar.innerHTML = ''; // Clear existing
    progressBar.style.width = '100%'; // Full width for segments
    
    selectedQuestions.forEach((_, index) => {
        const segment = document.createElement('div');
        segment.className = 'progress-segment';
        progressBar.appendChild(segment);
    });
}

function toggleFlashcard(index) {
    const card = document.querySelectorAll('.flashcard')[index];
    card.classList.toggle('flipped');
}

function markFlashcardCorrect(index) {
    selectedQuestions[index].answered = true;
    selectedQuestions[index].correct = true;
    score++;
    updateProgressBar(index, true);
    nextQuestion();
}

function markFlashcardWrong(index) {
    selectedQuestions[index].answered = true;
    selectedQuestions[index].correct = false;
    updateProgressBar(index, false);
    nextQuestion();
}


function showQuestion(index) {
    document.querySelectorAll('.question').forEach(q => q.classList.remove('active'));
    document.querySelectorAll('.question')[index].classList.add('active');
    updateProgress(index + 1);
}

function selectAnswer(questionIndex, answerIndex) {
    const question = selectedQuestions[questionIndex];
    const options = document.querySelectorAll(`#questions .question:nth-child(${questionIndex + 1}) .option`);
    
    options.forEach(opt => opt.classList.remove('selected'));
    options[answerIndex].classList.add('selected');
    question.selected = answerIndex;
    if (question.type === 'video' || question.type === 'video-multiple-choice') {
        const finalAnswerBtn = document.querySelector(`#questions .question:nth-child(${questionIndex + 1}) .final-answer`);
        finalAnswerBtn.disabled = false;
    } else {
        document.getElementById('nextButton').disabled = false;
    }
}

function lockAnswer(questionIndex) {
    const question = selectedQuestions[questionIndex];
    document.getElementById('nextButton').disabled = false;
    const options = document.querySelectorAll(`#questions .question:nth-child(${questionIndex + 1}) .option`);
    const finalAnswerBtn = document.querySelector(`#questions .question:nth-child(${questionIndex + 1}) .final-answer`);
    finalAnswerBtn.classList.add('hidden');
    options.forEach(opt => opt.style.pointerEvents = 'none');
    const isCorrect = selectedQuestions[questionIndex].options[selectedQuestions[questionIndex].selected] === 
    selectedQuestions[questionIndex].correct;
    updateProgressBar(questionIndex, isCorrect);

}

function updateProgressBar(questionIndex, isCorrect) {
    const segments = document.getElementsByClassName('progress-segment');
    if (segments[questionIndex]) {
        segments[questionIndex].classList.remove('correct', 'wrong');
        segments[questionIndex].classList.add(isCorrect ? 'correct' : 'wrong');
    }
}


function nextQuestion() {
    if (currentQuestion < selectedQuestions.length - 1) {
        currentQuestion++;
        showQuestion(currentQuestion);
    } else {
        showResults();
    }
}

function showResults() {
    document.querySelector('.results').style.display = 'block';
    document.getElementById('questions').style.display = 'none';
    document.querySelector('.progress').style.display = 'none';
    document.querySelector('.navigation').style.display = 'none';
}

function updateProgress(current) {
    document.querySelector('.progress').textContent = 
        `Question ${current} of ${selectedQuestions.length}`;
}

function restartQuiz() {
    currentQuestion = 0;
    document.getElementById('questions').innerHTML = '';
    document.querySelector('.results').style.display = 'none';
    document.getElementById('questions').style.display = 'block';
    document.querySelector('.progress').style.display = 'block';
    document.querySelector('.navigation').style.display = 'flex';
    document.getElementById('nextButton').disabled = true;
    createProgressBar();
    initQuiz();
}


window.onload = initQuiz;