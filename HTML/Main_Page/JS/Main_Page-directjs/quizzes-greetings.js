document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("quiz-video");
  const replayButton = document.getElementById("replay-button");
  const optionsContainer = document.querySelector(".Options-container");

  const questions = [
    {
      video: "https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F4340ac0bcd724d3789eba297002d8c62%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=4340ac0bcd724d3789eba297002d8c62&alt=media&optimized=true",
      options: [
        { image: "https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F0d73af9428ac43c7bfb9ca2c8b171289?width=500&height=500", correct: true },
        { image: "https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2Fa9e47e57594d409ab2e1526bb7a06b42?width=500&height=500", correct: false },
        { image: "https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F2d20b613f7e34e7b96e36cbbb580886a?width=500&height=500", correct: false },
        { image: "https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F07a43505fdaf4ea18f3ff501d7c109c0?width=500&height=500", correct: false },
      ],
    },
    
  { video: "https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2Fc8d86755e9de4dd185b01c30b5c37a13%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=c8d86755e9de4dd185b01c30b5c37a13&alt=media&optimized=true",
      options: [
        { image: "https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F0d73af9428ac43c7bfb9ca2c8b171289?width=500&height=500", correct: false },
        { image: "https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2Fa9e47e57594d409ab2e1526bb7a06b42?width=500&height=500", correct: true },
        { image: "https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F2d20b613f7e34e7b96e36cbbb580886a?width=500&height=500", correct: false },
        { image: "https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F07a43505fdaf4ea18f3ff501d7c109c0?width=500&height=500", correct: false },
      ],
    },
    {
      video: "https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F2817c83a214a490d885383ab2f08a420%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=2817c83a214a490d885383ab2f08a420&alt=media&optimized=true",
      options: [
        { image: "https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F0d73af9428ac43c7bfb9ca2c8b171289?width=500&height=500", correct: false },
        { image: "https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2Fa9e47e57594d409ab2e1526bb7a06b42?width=500&height=500", correct: false },
        { image: "https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F2d20b613f7e34e7b96e36cbbb580886a?width=500&height=500", correct: true },
        { image: "https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F07a43505fdaf4ea18f3ff501d7c109c0?width=500&height=500", correct: false },
      ],
    },
    {
      video: "https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F7e9672f32e0248e0b8ae2acb7cfe6937%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=7e9672f32e0248e0b8ae2acb7cfe6937&alt=media&optimized=true",
      options: [
        { image: "https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F0d73af9428ac43c7bfb9ca2c8b171289?width=500&height=500", correct: false },
        { image: "https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2Fa9e47e57594d409ab2e1526bb7a06b42?width=500&height=500", correct: false },
        { image: "https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F2d20b613f7e34e7b96e36cbbb580886a?width=500&height=500", correct: false },
        { image: "https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F07a43505fdaf4ea18f3ff501d7c109c0?width=500&height=500", correct: true },
      ],
    },
    {
      video: "https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F0a60ccfbc57c419c83dcababad12ac73%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=0a60ccfbc57c419c83dcababad12ac73&alt=media&optimized=true",
      options: [
        { image: "https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2Fee9623bd1fb34f299937e7b766cde70c", correct: true },
        { image: "https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F0cc9dbe371fa42ecad85a18dd44eb4f4", correct: false },
        { image: "https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F05c5cfe459a44a959a2acddb680f491d", correct: false },
        { image: "https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F07a43505fdaf4ea18f3ff501d7c109c0?width=500&height=500", correct: false},
      ],
    },
  ];

  
  let currentQuestionIndex = 0;

  function loadQuestion(questionIndex) {
    const question = questions[questionIndex];

    // Update the video source
    video.src = question.video;
    video.load();

    // Clear previous options and re-add new ones
    optionsContainer.innerHTML = "";

    question.options.forEach((optionData, index) => {
      const optionDiv = document.createElement("div");
      optionDiv.classList.add(`Option_${String.fromCharCode(65 + index)}`);
      optionDiv.setAttribute("data-correct", optionData.correct);

      const img = document.createElement("img");
      img.src = optionData.image;
      img.alt = `Option ${String.fromCharCode(65 + index)}`;
      const overlay = document.createElement("div");
      overlay.classList.add("overlay");

      optionDiv.appendChild(img);
      optionDiv.appendChild(overlay);

      optionDiv.addEventListener("click", function () {
        handleAnswer(optionDiv);
      });

      optionsContainer.appendChild(optionDiv);
    });
  }

  function handleAnswer(option) {
    const isCorrect = option.getAttribute("data-correct") === "true";

    if (isCorrect) {
      option.classList.add("correct");

      // Remove the overlay after 1.5 seconds
      setTimeout(() => {
        option.classList.remove("correct");
      }, 1500);

      // Load the next question after 3 seconds
      setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
          loadQuestion(currentQuestionIndex);
        } else {
          alert("Quiz completed!");
        }
      }, 1500);
    } else {
      option.classList.add("incorrect");

      // Remove the overlay after 1.5 seconds
      setTimeout(() => {
        option.classList.remove("incorrect");
      }, 1500);
    }
  }

  loadQuestion(currentQuestionIndex);

  video.addEventListener("ended", function () {
    replayButton.classList.remove("hidden");
    replayButton.classList.add("visible");
  });

  replayButton.addEventListener("click", function () {
    video.currentTime = 0;
    video.play();
    replayButton.classList.remove("visible");
    replayButton.classList.add("hidden");
  });
});