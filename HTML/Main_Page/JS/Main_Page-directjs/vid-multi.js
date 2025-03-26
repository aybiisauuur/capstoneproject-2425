const questions = [
    {
        question: "Which sign says Hello?",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F67fae21fb722479283ce276ea388eadf%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=67fae21fb722479283ce276ea388eadf&alt=media&optimized=true', correct: false },
            { video: 'https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2Fee781b67a8bf4e488174c0156c18914b%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=ee781b67a8bf4e488174c0156c18914b&alt=media&optimized=true', correct: false },
            { video: 'https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2Fd702dd1b2538458098cba218905c9987%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=d702dd1b2538458098cba218905c9987&alt=media&optimized=true', correct: true },
            { video: 'https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F0299652d0ea94bdab652d539b2616b7d%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=0299652d0ea94bdab652d539b2616b7d&alt=media&optimized=true', correct: false }
            ],
    },
    {
        question: "Which sign says See you later?",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2Fdba4a7e655e04153ae79ebc7ff9e22a6%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=dba4a7e655e04153ae79ebc7ff9e22a6&alt=media&optimized=true', correct: false },
            { video: 'https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F75c44265368f48d2a8fd3ed56e3e0821%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=75c44265368f48d2a8fd3ed56e3e0821&alt=media&optimized=true', correct: true },
            { video: 'https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F96cc65bcccbe45ffa5cb73bd771ff554%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=96cc65bcccbe45ffa5cb73bd771ff554&alt=media&optimized=true', correct: false },
            { video: 'https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F67fae21fb722479283ce276ea388eadf%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=67fae21fb722479283ce276ea388eadf&alt=media&optimized=true', correct: false }
        ],
    },
    {
        question: "Which sign says Thank you?",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F0299652d0ea94bdab652d539b2616b7d%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=0299652d0ea94bdab652d539b2616b7d&alt=media&optimized=true', correct: false },
            { video: 'https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2Fdaaf40ef88e84bb6b94952f07a98a26c%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=daaf40ef88e84bb6b94952f07a98a26c&alt=media&optimized=true', correct: false },
            { video: 'https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2Fdba4a7e655e04153ae79ebc7ff9e22a6%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=dba4a7e655e04153ae79ebc7ff9e22a6&alt=media&optimized=true', correct: false },
            { video: 'https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2Fee781b67a8bf4e488174c0156c18914b%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=ee781b67a8bf4e488174c0156c18914b&alt=media&optimized=true', correct: true }
        ],
    },
    {
        question: "Which sign says Good Evening?",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2Fdba4a7e655e04153ae79ebc7ff9e22a6%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=dba4a7e655e04153ae79ebc7ff9e22a6&alt=media&optimized=true', correct: false },
            { video: 'https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F96cc65bcccbe45ffa5cb73bd771ff554%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=96cc65bcccbe45ffa5cb73bd771ff554&alt=media&optimized=true', correct: true },
            { video: 'https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F96cc65bcccbe45ffa5cb73bd771ff554%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=96cc65bcccbe45ffa5cb73bd771ff554&alt=media&optimized=true', correct: false },
            { video: 'https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F67fae21fb722479283ce276ea388eadf%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=67fae21fb722479283ce276ea388eadf&alt=media&optimized=true', correct: false }
        ],
    },
    {
        question: "Which sign says Nice to meet you?",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F0299652d0ea94bdab652d539b2616b7d%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=0299652d0ea94bdab652d539b2616b7d&alt=media&optimized=true', correct: true },
            { video: 'https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F75c44265368f48d2a8fd3ed56e3e0821%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=75c44265368f48d2a8fd3ed56e3e0821&alt=media&optimized=true', correct: false },
            { video: 'https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F96cc65bcccbe45ffa5cb73bd771ff554%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=96cc65bcccbe45ffa5cb73bd771ff554&alt=media&optimized=true', correct: false },
            { video: 'https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F67fae21fb722479283ce276ea388eadf%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=67fae21fb722479283ce276ea388eadf&alt=media&optimized=true', correct: false }
        ],
    },
    {
        question: "Which sign says Good Morning?",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fd9e06a1e9eaf4ded8c96b3941f57bd38%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=d9e06a1e9eaf4ded8c96b3941f57bd38&alt=media&optimized=true', correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F0a97e81c3761491b89ff5f050c892580%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=0a97e81c3761491b89ff5f050c892580&alt=media&optimized=true', correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F8a331bdfb150415a93cd7ded28cd38a2%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=8a331bdfb150415a93cd7ded28cd38a2&alt=media&optimized=true', correct: true },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F7a3d592fbc7241739897b3d7336a1b74%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=7a3d592fbc7241739897b3d7336a1b74&alt=media&optimized=true', correct: false }
        ],
    },

    {
        question: "Which sign says Good Afternoon?",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F3ef3cd35689b42f280a7c2be69efc380%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=3ef3cd35689b42f280a7c2be69efc380&alt=media&optimized=true', correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F8a331bdfb150415a93cd7ded28cd38a2%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=8a331bdfb150415a93cd7ded28cd38a2&alt=media&optimized=true', correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Ff29e00c1818c45d5b3cabcb8ebee33b0%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=f29e00c1818c45d5b3cabcb8ebee33b0&alt=media&optimized=true', correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fd9e06a1e9eaf4ded8c96b3941f57bd38%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=d9e06a1e9eaf4ded8c96b3941f57bd38&alt=media&optimized=true', correct: true }
        ],
    },

    {
        question: "Which sign says Long Time No See?",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fae3aa044a67e4ecb9a0728d1947a9360%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=ae3aa044a67e4ecb9a0728d1947a9360&alt=media&optimized=true', correct: true },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F3777c6e27e3f42999eaebbbd9a6c1af8%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=3777c6e27e3f42999eaebbbd9a6c1af8&alt=media&optimized=true', correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fe1ddf2f1c09c4886891edb4dbc6b3448%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=e1ddf2f1c09c4886891edb4dbc6b3448&alt=media&optimized=true', correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F7a3d592fbc7241739897b3d7336a1b74%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=7a3d592fbc7241739897b3d7336a1b74&alt=media&optimized=true', correct: false }
        ],
    },

    {
        question: "Which sign says Goodbye?",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fa02fcbe819a24d88bea5918decc1e7c1%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=a02fcbe819a24d88bea5918decc1e7c1&alt=media&optimized=true', correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F7a3d592fbc7241739897b3d7336a1b74%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=7a3d592fbc7241739897b3d7336a1b74&alt=media&optimized=true', correct: true },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fe1ddf2f1c09c4886891edb4dbc6b3448%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=e1ddf2f1c09c4886891edb4dbc6b3448&alt=media&optimized=true', correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Ff29e00c1818c45d5b3cabcb8ebee33b0%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=f29e00c1818c45d5b3cabcb8ebee33b0&alt=media&optimized=true', correct: false }
        ],
    },

    {
        question: "Which sign says You're Welcome?",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fae3aa044a67e4ecb9a0728d1947a9360%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=ae3aa044a67e4ecb9a0728d1947a9360&alt=media&optimized=true', correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F8a331bdfb150415a93cd7ded28cd38a2%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=8a331bdfb150415a93cd7ded28cd38a2&alt=media&optimized=true', correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F1330f800fdd3413ca8ee1edb4e30484a%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=1330f800fdd3413ca8ee1edb4e30484a&alt=media&optimized=true', correct: true },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fa02fcbe819a24d88bea5918decc1e7c1%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=a02fcbe819a24d88bea5918decc1e7c1&alt=media&optimized=true', correct: false }
        ],
    },

    {
        question: "Which sign says Take Care?",
        options: [
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F3ef3cd35689b42f280a7c2be69efc380%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=3ef3cd35689b42f280a7c2be69efc380&alt=media&optimized=true', correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2F0a97e81c3761491b89ff5f050c892580%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=0a97e81c3761491b89ff5f050c892580&alt=media&optimized=true', correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fd9e06a1e9eaf4ded8c96b3941f57bd38%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=d9e06a1e9eaf4ded8c96b3941f57bd38&alt=media&optimized=true', correct: false },
            { video: 'https://cdn.builder.io/o/assets%2F46a78e6780fc481d9e0cdcbac16d84ba%2Fa02fcbe819a24d88bea5918decc1e7c1%2Fcompressed?apiKey=46a78e6780fc481d9e0cdcbac16d84ba&token=a02fcbe819a24d88bea5918decc1e7c1&alt=media&optimized=true', correct: true }
        ],
    },
];

let currentQuestion = 0;
let selectedOption = null;
let progressStatus = [];
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('video-options-container');
const nextBtn = document.getElementById('next-btn');
const finalAnswerBtn = document.getElementById('final-answer-btn');
const feedbackText = document.getElementById('feedbackText');


function initializeProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    progressBar.innerHTML = '';
    questions.forEach(() => {
        const segment = document.createElement('div');
        segment.className = 'progress-segment';
        progressBar.appendChild(segment);
    });
    progressStatus = new Array(questions.length).fill(null);
}

function updateProgressBar() {
    const segments = document.querySelectorAll('.progress-segment');
    segments.forEach((segment, index) => {
        segment.classList.remove('correct', 'incorrect');
        if (progressStatus[index] !== null) {
            segment.classList.add(progressStatus[index] ? 'correct' : 'incorrect');
        }
    });
}


function loadQuestion() {
    const question = questions[currentQuestion];
    questionText.textContent = question.question;
    optionsContainer.innerHTML = '';
    nextBtn.style.display = 'none';
    finalAnswerBtn.style.display = 'none';
    selectedOption = null;
    question.options.forEach(option => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'video-option';
        optionDiv.innerHTML = `<video controls><source src="${option.video}" type="video/mp4"></video>`;
        
        optionDiv.addEventListener('click', () => {
            if (!optionDiv.classList.contains('selected')) {
                document.querySelectorAll('.video-option').forEach(opt => {
                    opt.classList.remove('selected');
                });
                optionDiv.classList.add('selected');
                finalAnswerBtn.style.display = 'block';
                selectedOption = { element: optionDiv, correct: option.correct };
            }
        });
        optionsContainer.appendChild(optionDiv);
    });
    
    updateProgressBar();
}


function confirmFinalAnswer() {
    if (!selectedOption) return;
    selectedOption.element.classList.remove('selected');
    selectedOption.element.classList.add(selectedOption.correct ? 'correct' : 'incorrect');
    progressStatus[currentQuestion] = selectedOption.correct;

    document.querySelectorAll('.video-option').forEach(opt => {
        opt.style.pointerEvents = 'none';
    });

    // Remove existing feedback text
    const existingFeedback = document.getElementById('feedbackText');
    if (existingFeedback) {
        existingFeedback.remove();
    }

    // Display new feedback message
    const feedbackText = document.createElement('div');
    feedbackText.id = 'feedbackText';
    feedbackText.textContent = selectedOption.correct 
        ? (Math.random() < 0.5 ? 'Correct! Good job!' : 'Correct Answer!') 
        : 'Wrong answer, sorry!';
    feedbackText.className = selectedOption.correct ? 'feedback-correct' : 'feedback-wrong';
    questionText.parentNode.insertBefore(feedbackText, questionText.nextSibling);

    updateProgressBar();

    finalAnswerBtn.style.display = 'none';
    nextBtn.style.display = 'block';
}

function nextQuestion() {
    document.querySelectorAll('.video-option').forEach(opt => {
        opt.style.pointerEvents = 'auto';
        opt.classList.remove('correct', 'incorrect');
    });

    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showFinalResults();
    }

    const existingFeedback = document.getElementById('feedbackText');
    if (existingFeedback) {
        existingFeedback.remove();
    }

    // Corrected: No second increment
    displayQuestion(currentQuestion);

    // Reset buttons
    finalAnswerBtn.style.display = 'block';
    nextBtn.style.display = 'none';
}


function showFinalResults() {
    const correctCount = progressStatus.filter(status => status).length;
    optionsContainer.innerHTML = `
        <div class="final-results">
            <h2>Quiz Complete!</h2>
            <p>You got ${correctCount} out of ${questions.length} correct!</p>
        </div>
    `;
    nextBtn.style.display = 'none';
}


finalAnswerBtn.addEventListener('click', confirmFinalAnswer);
nextBtn.addEventListener('click', nextQuestion);


initializeProgressBar();
loadQuestion();