<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <title>Quiz dynamique</title>
  <style>
    body { font-family: Arial, sans-serif; max-width: 600px; margin: 30px auto; }
    button { margin-top: 10px; padding: 10px 20px; font-size: 16px; }
    .option { display: block; margin: 8px 0; }
    .correct { color: green; }
    .wrong { color: red; }
  </style>
</head>
<body>

  <h1>Quiz</h1>

  <label for="categorySelect">Choisissez une catégorie :</label>
  <select id="categorySelect">
    <option value="">-- Sélectionnez --</option>
  </select>

  <div id="quizContainer" style="display:none;">
    <div id="question"></div>
    <div id="options"></div>
    <button id="submitBtn" disabled>Valider</button>
    <div id="feedback"></div>
    <button id="nextBtn" style="display:none;">Question suivante</button>
  </div>

  <div id="result" style="display:none;">
    <h2>Résultat</h2>
    <p id="score"></p>
    <button id="restartBtn">Recommencer</button>
  </div>

<script>
  const quizzData = {
    "Culture Générale": [
      { question: "Quelle est la capitale de la France ?", options: ["Paris", "Lyon", "Marseille", "Toulouse"], answer: 0 },
      { question: "Combien de continents y a-t-il sur Terre ?", options: ["5", "6", "7", "8"], answer: 2 }
      // ... ajoute toutes tes questions ici comme dans ton objet initial
    ],
    "Histoire": [
      { question: "Qui était le premier président des États-Unis ?", options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"], answer: 0 }
      // ...
    ]
    // Ajoute toutes les autres catégories comme dans ton objet
  };

  const categorySelect = document.getElementById('categorySelect');
  const quizContainer = document.getElementById('quizContainer');
  const questionEl = document.getElementById('question');
  const optionsEl = document.getElementById('options');
  const submitBtn = document.getElementById('submitBtn');
  const feedbackEl = document.getElementById('feedback');
  const nextBtn = document.getElementById('nextBtn');
  const resultEl = document.getElementById('result');
  const scoreEl = document.getElementById('score');
  const restartBtn = document.getElementById('restartBtn');

  let currentCategory = null;
  let currentQuestions = [];
  let currentIndex = 0;
  let score = 0;
  let selectedOption = null;

  // Remplir la liste déroulante des catégories
  function initCategorySelect() {
    Object.keys(quizzData).forEach(cat => {
      const option = document.createElement('option');
      option.value = cat;
      option.textContent = cat;
      categorySelect.appendChild(option);
    });
  }

  categorySelect.addEventListener('change', () => {
    currentCategory = categorySelect.value;
    if (!currentCategory) {
      quizContainer.style.display = 'none';
      resultEl.style.display = 'none';
      return;
    }
    currentQuestions = quizzData[currentCategory];
    currentIndex = 0;
    score = 0;
    selectedOption = null;
    resultEl.style.display = 'none';
    quizContainer.style.display = 'block';
    nextBtn.style.display = 'none';
    submitBtn.style.display = 'inline-block';
    submitBtn.disabled = true;
    feedbackEl.textContent = '';
    showQuestion();
  });

  function showQuestion() {
    const q = currentQuestions[currentIndex];
    questionEl.textContent = `Q${currentIndex + 1} : ${q.question}`;
    optionsEl.innerHTML = '';

    q.options.forEach((opt, i) => {
      const label = document.createElement('label');
      label.classList.add('option');

      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'option';
      radio.value = i;

      radio.addEventListener('change', () => {
        selectedOption = parseInt(radio.value);
        submitBtn.disabled = false;
        feedbackEl.textContent = '';
      });

      label.appendChild(radio);
      label.appendChild(document.createTextNode(opt));
      optionsEl.appendChild(label);
    });

    submitBtn.disabled = true;
    feedbackEl.textContent = '';
  }

  submitBtn.addEventListener('click', () => {
    if (selectedOption === null) return;

    const correctAnswer = currentQuestions[currentIndex].answer;

    if (selectedOption === correctAnswer) {
      feedbackEl.textContent = "Bonne réponse !";
      feedbackEl.className = "correct";
      score++;
    } else {
      feedbackEl.textContent = `Mauvaise réponse ! La bonne réponse est : ${currentQuestions[currentIndex].options[correctAnswer]}`;
      feedbackEl.className = "wrong";
    }

    submitBtn.style.display = 'none';
    nextBtn.style.display = 'inline-block';
  });

  nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= currentQuestions.length) {
      showResult();
    } else {
      selectedOption = null;
      showQuestion();
      submitBtn.style.display = 'inline-block';
      submitBtn.disabled = true;
      nextBtn.style.display = 'none';
    }
  });

  function showResult() {
    quizContainer.style.display = 'none';
    resultEl.style.display = 'block';
    scoreEl.textContent = `Vous avez obtenu ${score} sur ${currentQuestions.length} points dans la catégorie "${currentCategory}".`;
  }

  restartBtn.addEventListener('click', () => {
    resultEl.style.display = 'none';
    categorySelect.value = '';
  });

  initCategorySelect();
</script>

</body>
</html>

