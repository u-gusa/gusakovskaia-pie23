const questions = [
  {
    question: "Вы просыпаетесь в комнате с темными стенами. Что вы хотите сделать?",
    choices: [
      { answer: "Осмотреть комнату", nextQuestionIndex: 1 },
      { answer: "Попытаться выбраться", nextQuestionIndex: 2 }
    ],
    imageUrl: "4.jpg"
  },
  {
    question: "Вы находите замочную скважину. Что вы хотите сделать?",
    choices: [
      { answer: "Попытаться вскрыть замок", nextQuestionIndex: 3 },
      { answer: "Пройти дальше", nextQuestionIndex: 4 }
    ],
    imageUrl: "6.jpg"
  },
  {
    question: "Вы видите две двери. Какую дверь выберете?",
    choices: [
      { answer: "Дверь слева", nextQuestionIndex: 5 },
      { answer: "Дверь справа", nextQuestionIndex: 6 }
    ],
    imageUrl: "5.jpg"
  },
  {
    question: "Вы нашли секретную комнату, где находится профессор X. Что вы хотите сделать?",
    choices: [
      { answer: "Освободить профессора X", nextQuestionIndex: -1, result: "Поздравляю! Вы спасли профессора X и завершили игру." },
      { answer: "Оставить профессора X и покинуть комнату", nextQuestionIndex: -1, result: "Вы решили оставить профессора X и покинуть комнату. Игра окончена." }
    ],
    imageUrl: "13.jpg"
  },
  {
    question: "Вы вошли в дверь. Что вы увидели?",
    choices: [
      { answer: "Темный коридор", nextQuestionIndex: 7 },
      { answer: "Лестницу вниз", nextQuestionIndex: 8 }
    ],
    imageUrl: "8.jpg"
  },
  {
    question: "Вы выбрали дверь интересную. Что вы увидели?",
    choices: [
      
      { answer: "Запертую дверь", nextQuestionIndex: 6 }
    ],
    imageUrl: "11.jpg"
  },
  {
    question: "Вы нашли выход из здания. Что делать дальше?",
    choices: [
      { answer: "Выйти из здания", nextQuestionIndex: -1, result: "Поздравляю! Вы успешно покинули здание и завершили игру." },
      { answer: "Вернуться назад в интересную дверь", nextQuestionIndex: 4 }
    ],
    imageUrl: "10.jpg"
  },
  {
    question: "Вы нашли секретную комнату с охранниками. Что вы хотите сделать?",
    choices: [
      { answer: "Сразиться с охранниками", nextQuestionIndex: -1, result: "Вы проиграли в схватке с охранниками. Игра окончена." },
      { answer: "Попытаться проскочить мимо охранников", nextQuestionIndex: 4 }
    ],
    imageUrl: "9.jpg"
  },
  {
    question: "Вы стоите на краю обрыва. Что вы хотите сделать?",
    choices: [
      { answer: "Прыгнуть вниз", nextQuestionIndex: -1, result: "Вы прыгаете вниз и гибнете. Игра окончена." },
      { answer: "Обернуться и вернуться назад", nextQuestionIndex: 6 }
    ],
    imageUrl: "12.jpg"
  }
];

let currentQuestionIndex = 0;

function displayQuestion() {
  const questionContainer = document.getElementById("question-container");
  const question = document.getElementById("question");
  
  
  const questionImage = document.getElementById("question-image");
  const choicesContainer = document.getElementById("choices-container");
  
  const currentQuestion = questions[currentQuestionIndex];
  
  question.innerHTML = currentQuestion.question;
  questionImage.src = currentQuestion.imageUrl;
  
  choicesContainer.innerHTML = "";
  for (let i = 0; i < currentQuestion.choices.length; i++) {
    const choice = currentQuestion.choices[i];
    
    const choiceButton = document.createElement("button");
    choiceButton.innerHTML = choice.answer;
    choiceButton.onclick = () => {
      handleChoiceClick(choice.nextQuestionIndex, choice.result);
    };
    
    choicesContainer.appendChild(choiceButton);
  }
}

function handleChoiceClick(nextQuestionIndex, result) {
  if (nextQuestionIndex === -1) {
    displayResult(result);
  } else {
    currentQuestionIndex = nextQuestionIndex;
    displayQuestion();
  }
}

function displayResult(result) {
  const questionContainer = document.getElementById("question-container");
  const choicesContainer = document.getElementById("choices-container");
  
  questionContainer.innerHTML = "<h1>Игра окончена!</h1>";
  choicesContainer.innerHTML = "<p>" + result + "</p>";
}

// Начать игру
displayQuestion();