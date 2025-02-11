document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");
  const video = document.getElementById("quiz-video");
  const replayButton = document.getElementById("replay-button");
  const optionsContainer = document.querySelector(".Options-container");

  // Your original questions array (unchanged)
  const allQuestions = [
    {
      video:
        "https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F147d233312414ae0af5bc611afff6a7f%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=147d233312414ae0af5bc611afff6a7f&alt=media&optimized=true",
      options: [
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F0d73af9428ac43c7bfb9ca2c8b171289?width=500&height=500",correct: true,},
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2Fa9e47e57594d409ab2e1526bb7a06b42?width=500&height=500",correct: false,},
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F2d20b613f7e34e7b96e36cbbb580886a?width=500&height=500",correct: false,},
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F07a43505fdaf4ea18f3ff501d7c109c0?width=500&height=500",correct: false,},
      ],
    },
    {
      video:"https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F46c37e2c4bde44ba86500c8796b5056e%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=46c37e2c4bde44ba86500c8796b5056e&alt=media&optimized=true",
      options: [
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F0d73af9428ac43c7bfb9ca2c8b171289?width=500&height=500",correct: false,},
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2Fa9e47e57594d409ab2e1526bb7a06b42?width=500&height=500",correct: true,},
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F2d20b613f7e34e7b96e36cbbb580886a?width=500&height=500",correct: false,},
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F07a43505fdaf4ea18f3ff501d7c109c0?width=500&height=500",correct: false,},
      ],
    },
    {
      video:"https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F8621f49161fa4b3d8a8d2ab6bbd40b3c%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=8621f49161fa4b3d8a8d2ab6bbd40b3c&alt=media&optimized=true",
      options: [
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F0d73af9428ac43c7bfb9ca2c8b171289?width=500&height=500",correct: false,},
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2Fa9e47e57594d409ab2e1526bb7a06b42?width=500&height=500",correct: false,},
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F2d20b613f7e34e7b96e36cbbb580886a?width=500&height=500",correct: true,},
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F07a43505fdaf4ea18f3ff501d7c109c0?width=500&height=500",correct: false,},
      ],
    },
    {
      video:"https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F0cf34707c4454da796e39e565d5646d9%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=0cf34707c4454da796e39e565d5646d9&alt=media&optimized=true",
      options: [
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F0d73af9428ac43c7bfb9ca2c8b171289?width=500&height=500",correct: false,},
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2Fa9e47e57594d409ab2e1526bb7a06b42?width=500&height=500",correct: false,},
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F2d20b613f7e34e7b96e36cbbb580886a?width=500&height=500",correct: false,},
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F07a43505fdaf4ea18f3ff501d7c109c0?width=500&height=500",correct: true,},
      ],
    },
    {
      video:"https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2Feb03e6dbcc504b38976a204dd51eec28%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=eb03e6dbcc504b38976a204dd51eec28&alt=media&optimized=true",
      options: [
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2Fee9623bd1fb34f299937e7b766cde70c",correct: true,},
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F0cc9dbe371fa42ecad85a18dd44eb4f4",correct: false,},
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F05c5cfe459a44a959a2acddb680f491d",correct: false,},
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F07a43505fdaf4ea18f3ff501d7c109c0?width=500&height=500",correct: false,},
      ],
    },
  ];


  let currentQuestions = allQuestions.slice();
  let currentQuestionIndex = 0;
  let retryQuestions = [];

  function loadQuestion(questionIndex) {
    console.log("Loading question index:", questionIndex);
    const question = currentQuestions[questionIndex];
    video.src = question.video;
    video.load();
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
        console.log("Option clicked:", img.src);
        handleAnswer(optionDiv);
      });

      optionsContainer.appendChild(optionDiv);
    });
  }

  function handleAnswer(option) {
    const isCorrect = option.getAttribute("data-correct") === "true";
    console.log("Answer selected, correct:", isCorrect);

    if (!isCorrect && !retryQuestions.includes(currentQuestions[currentQuestionIndex])) {
      retryQuestions.push(currentQuestions[currentQuestionIndex]);
    }

    option.classList.add(isCorrect ? "correct" : "incorrect");

    setTimeout(() => {
      option.classList.remove(isCorrect ? "correct" : "incorrect");
      currentQuestionIndex++;

      if (currentQuestionIndex < currentQuestions.length) {
        loadQuestion(currentQuestionIndex);
      } else if (retryQuestions.length > 0) {
        console.log("Retrying incorrect questions:", retryQuestions);
        alert("Ate ulit natin yeah, may mali kasi eh~");
        currentQuestions = retryQuestions.slice();
        retryQuestions = [];
        currentQuestionIndex = 0;
        loadQuestion(currentQuestionIndex);
      } else {
        // No questions left to answer.
        console.log("Quiz completed!");
        alert("Quiz completed!");
      }
    }, 1000);
  }

  // Load the first question.
  loadQuestion(currentQuestionIndex);

  video.addEventListener("ended", function () {
    console.log("Video ended");
    replayButton.classList.remove("hidden");
    replayButton.classList.add("visible");
  });

  replayButton.addEventListener("click", function () {
    console.log("Replay button clicked");
    video.currentTime = 0;
    video.play();
    replayButton.classList.remove("visible");
    replayButton.classList.add("hidden");
  });
});
