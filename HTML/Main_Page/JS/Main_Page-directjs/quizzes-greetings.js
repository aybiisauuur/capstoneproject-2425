document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");
  const video = document.getElementById("quiz-video");
  const replayButton = document.getElementById("replay-button");
  const optionsContainer = document.querySelector(".Options-container");

  const allQuestions = [
    {//goodMorning
      video:
        "https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2Fdaaf40ef88e84bb6b94952f07a98a26c%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=daaf40ef88e84bb6b94952f07a98a26c&alt=media&optimized=true",
      options: [
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F0d73af9428ac43c7bfb9ca2c8b171289?width=500&height=500",correct: true,},
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2Fa9e47e57594d409ab2e1526bb7a06b42?width=500&height=500",correct: false,},
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F2d20b613f7e34e7b96e36cbbb580886a?width=500&height=500",correct: false,},
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F07a43505fdaf4ea18f3ff501d7c109c0?width=500&height=500",correct: false,},
      ],
    },
    {//goodAfternoon
      video:"https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2Fd97c585713d542dda1cb425550c76f0c%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=d97c585713d542dda1cb425550c76f0c&alt=media&optimized=true",
      options: [
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F0d73af9428ac43c7bfb9ca2c8b171289?width=500&height=500",correct: false,},
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2Fa9e47e57594d409ab2e1526bb7a06b42?width=500&height=500",correct: true,},
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F2d20b613f7e34e7b96e36cbbb580886a?width=500&height=500",correct: false,},
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F07a43505fdaf4ea18f3ff501d7c109c0?width=500&height=500",correct: false,},
      ],
    },
    {//goodEvening
      video:"https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F96cc65bcccbe45ffa5cb73bd771ff554%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=96cc65bcccbe45ffa5cb73bd771ff554&alt=media&optimized=true",
      options: [
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F0d73af9428ac43c7bfb9ca2c8b171289?width=500&height=500",correct: false,},
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2Fa9e47e57594d409ab2e1526bb7a06b42?width=500&height=500",correct: false,},
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F2d20b613f7e34e7b96e36cbbb580886a?width=500&height=500",correct: true,},
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F07a43505fdaf4ea18f3ff501d7c109c0?width=500&height=500",correct: false,},
      ],
    },
    {//goodbye
      video:"https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2Fdba4a7e655e04153ae79ebc7ff9e22a6%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=dba4a7e655e04153ae79ebc7ff9e22a6&alt=media&optimized=true",
      options: [
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F0d73af9428ac43c7bfb9ca2c8b171289?width=500&height=500",correct: false,},
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2Fa9e47e57594d409ab2e1526bb7a06b42?width=500&height=500",correct: false,},
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F2d20b613f7e34e7b96e36cbbb580886a?width=500&height=500",correct: false,},
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F07a43505fdaf4ea18f3ff501d7c109c0?width=500&height=500",correct: true,},
      ],
    },
    {//Hi/hello
      video:"https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2Fd702dd1b2538458098cba218905c9987%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=d702dd1b2538458098cba218905c9987&alt=media&optimized=true",
      options: [
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2Fee9623bd1fb34f299937e7b766cde70c",correct: true,},
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F0cc9dbe371fa42ecad85a18dd44eb4f4",correct: false,},
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F05c5cfe459a44a959a2acddb680f491d",correct: false,},
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F07a43505fdaf4ea18f3ff501d7c109c0?width=500&height=500",correct: false,},
      ],
    },
    {//Thankyou
      video:"https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2Fee781b67a8bf4e488174c0156c18914b%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=ee781b67a8bf4e488174c0156c18914b&alt=media&optimized=true",
      options: [
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F03895f6b3e8f40edb3a7f85b4f742329",correct: false,},
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F0cc9dbe371fa42ecad85a18dd44eb4f4",correct: false,},
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F05c5cfe459a44a959a2acddb680f491d",correct: false,},
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2Fcaeeff5c062242c2b98ec1c01db4dd6e",correct: true,},
      ],
    },
    {//YoureWelcome
      video:"https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F67fae21fb722479283ce276ea388eadf%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=67fae21fb722479283ce276ea388eadf&alt=media&optimized=true",
      options: [
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F03895f6b3e8f40edb3a7f85b4f742329",correct: false,},
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F54697f4dfe8b424dbebc145297d19ad8",correct: true,},
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F45fddb82d4a24da9b91db901efdecc9e",correct: false,},
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F59628e384cea47cbbd4271409f20735f",correct: false,},
      ],
    },
    {//takecare
      video:"https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F9aa5c6e3c22a488c81ea9b78cd9d0a51%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=9aa5c6e3c22a488c81ea9b78cd9d0a51&alt=media&optimized=true",
      options: [
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F3ef37707f8be497ea5bc41d8e0c1db5c",correct: true,},
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F4f2555bd89f944f187bdfb0de698ea60",correct: false,},
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2Fbe92bc4f62b149aa9406e2fbe0a8af13",correct: false,},
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F020a48b4ff484fcab6c03c9ae3d5e04c",correct: false,},
      ],
    },
    {//LongTimeNoSee
      video:"https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F7c3f41cef37546958629bc8d3e844c2b%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=7c3f41cef37546958629bc8d3e844c2b&alt=media&optimized=true",
      options: [
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F03895f6b3e8f40edb3a7f85b4f742329",correct: false,},
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F4f2555bd89f944f187bdfb0de698ea60",correct: false,},
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F05c5cfe459a44a959a2acddb680f491d",correct: false,},
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F7888824f70614803834c2ccae7e15b7e",correct: true,},
      ],
    },
    {//Seeyoulater
      video:"https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F75c44265368f48d2a8fd3ed56e3e0821%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=75c44265368f48d2a8fd3ed56e3e0821&alt=media&optimized=true",
      options: [
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2Fd6bc29feeb1c4c8ba8cb47a40043a6e2",correct: false,},
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F4f2555bd89f944f187bdfb0de698ea60",correct: false,},
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2Fcdd4402b0d2048509ae614a695c9a18b",correct: true,},
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F9fa995778624418aa77effed293d4556",correct: false,},
      ],
    },
    {//Nicetomeetyou
      video:"https://cdn.builder.io/o/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F0299652d0ea94bdab652d539b2616b7d%2Fcompressed?apiKey=fa2701a192bc4724a7c3ede9e2d95cb2&token=0299652d0ea94bdab652d539b2616b7d&alt=media&optimized=true",
      options: [
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F1588edd7d4a0462db20ea1ec7095a374",correct: true,},
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2Fe238ac31364149dc9a6b1b1a56c405c8",correct: false,},
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F1b513c5316cf4cf68090e058ec2edab1",correct: false,},
        {image:"https://cdn.builder.io/api/v1/image/assets%2Ffa2701a192bc4724a7c3ede9e2d95cb2%2F6334972c503047c0aa6e856090dc1ad5",correct: false,},
      ],
    },
  ];

  let currentQuestions = allQuestions.slice();
  let currentQuestionIndex = 0;
  let retryQuestions = [];
  let totalQuestions = allQuestions.length;
  let baseProgress = 0;
  let retryProgress = 0;
  let correctAttempts = 0;
  let incorrectAttempts = 0;
  const maxPossibleAttempts = 20; // 10 questions × 2 attempts max

  const progressBase = document.createElement('div');
  const progressRetry = document.createElement('div');
  document.querySelector('.progress-container').append(progressBase, progressRetry);
  const progressBar = document.querySelector('.progress-bar');
  const progressCorrect = document.querySelector('.progress-correct');
  const progressIncorrect = document.querySelector('.progress-incorrect');
  function updateProgress(isCorrect) {
    if (isCorrect) {
        correctAttempts++;
    } else {
        incorrectAttempts++;
    }

    const totalAttempts = correctAttempts + incorrectAttempts;
    const progressPercentage = (totalAttempts / maxPossibleAttempts) * 100;
    
    progressBar.style.width = `${progressPercentage}%`;
    
    if (totalAttempts > 0) {
        const correctWidth = (correctAttempts / totalAttempts) * 100;
        const incorrectWidth = (incorrectAttempts / totalAttempts) * 100;
        
        progressCorrect.style.width = `${correctWidth}%`;
        progressIncorrect.style.width = `${incorrectWidth}%`;
    }
}

progressBase.className = 'progress-base';
progressRetry.className = 'progress-retry';

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
    const question = currentQuestions[currentQuestionIndex];

    if (!isCorrect && !retryQuestions.includes(question)) {
        retryQuestions.push(question);
    }

  
    updateProgress(isCorrect);


    option.classList.add(isCorrect ? "correct" : "incorrect");
    document.getElementById('next-button').style.display = 'block';
}




document.getElementById('next-button').addEventListener('click', () => {
  currentQuestionIndex++;
  
  if (currentQuestionIndex >= currentQuestions.length) {
      if (retryQuestions.length > 0) {
          currentQuestions = retryQuestions;
          retryQuestions = [];
          currentQuestionIndex = 0;
          alert("Let's try the incorrect questions again!");
      } else {
          alert("Quiz completed!");
          return;
      }
  }
  
  loadQuestion(currentQuestionIndex);
  document.getElementById('next-button').style.display = 'none';
});


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
