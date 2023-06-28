const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-btn');
const scoreElement = document.getElementById('score-value');

let currentQuestionIndex = 0;
let score = 0;

const questions = [
  {
    question: '¿Cuál es la capital de Francia?',
    options: ['Londres', 'París', 'Berlín', 'Roma'],
    answerIndex: 1
  },
  {
    question: '¿En qué año comenzó la Segunda Guerra Mundial?',
    options: ['1939', '1945', '1918', '1941'],
    answerIndex: 0
  },
  {
    question: '¿Cuál es el símbolo químico del oro?',
    options: ['Ag', 'Au', 'Hg', 'Fe'],
    answerIndex: 1
  },
  {
    question: '¿Cuál es la capital de Australia?',
    options: ['Sídney', 'Melbourne', 'Canberra', 'Brisbane'],
    answerIndex: 2
  },
  {
    question: '¿Cuántos continentes hay en el mundo?',
    options: ['5', '6', '7', '8'],
    answerIndex: 2
  },
  {
    question: '¿Cuál es el río más largo del mundo?',
    options: ['Nilo', 'Amazonas', 'Yangtsé', 'Misisipi'],
    answerIndex: 0
  },
  {
    question: '¿En qué año se fundó la compañía Apple?',
    options: ['1972', '1984', '1976', '1991'],
    answerIndex: 2
  },
  {
    question: '¿Quién pintó la Mona Lisa?',
    options: ['Pablo Picasso', 'Leonardo da Vinci', 'Vincent van Gogh', 'Michelangelo'],
    answerIndex: 1
  },
  {
    question: '¿Cuál es la montaña más alta del mundo?',
    options: ['Monte Kilimanjaro', 'Monte Everest', 'Monte Aconcagua', 'Monte Fuji'],
    answerIndex: 1
  },
  {
    question: '¿En qué año se celebró la primera Copa Mundial de la FIFA?',
    options: ['1926', '1930', '1940', '1950'],
    answerIndex: 1
  },
  {
    question: '¿Cuál es el océano más grande del mundo?',
    options: ['Atlántico', 'Índico', 'Pacífico', 'Ártico'],
    answerIndex: 2
  },
  {
    question: '¿En qué año Neil Armstrong pisó la luna por primera vez?',
    options: ['1965', '1969', '1973', '1981'],
    answerIndex: 1
  },
  {
    question: '¿Quién escribió la novela "Cien años de soledad"?',
    options: ['Gabriel García Márquez', 'Jorge Luis Borges', 'Pablo Neruda', 'Isabel Allende'],
    answerIndex: 0
  },
  {
    question: '¿Cuál es el instrumento musical más antiguo del mundo?',
    options: ['Flauta', 'Piano', 'Violín', 'Tambor'],
    answerIndex: 0
  },
  {
    question: '¿En qué año se inauguró el Canal de Panamá?',
    options: ['1904', '1914', '1924', '1934'],
    answerIndex: 1
  },
  {
    question: '¿Quién escribió la obra de teatro "Romeo y Julieta"?',
    options: ['William Shakespeare', 'Miguel de Cervantes', 'Federico García Lorca', 'Oscar Wilde'],
    answerIndex: 0
  },
  {
    question: '¿Cuál es la moneda oficial de Japón?',
    options: ['Yuan', 'Yen', 'Dólar', 'Rupia'],
    answerIndex: 1
  },
  {
    question: '¿Cuál es el país más poblado del mundo?',
    options: ['India', 'Estados Unidos', 'China', 'Brasil'],
    answerIndex: 2
  },
  {
    question: '¿Cuál es el metal más abundante en la corteza terrestre?',
    options: ['Aluminio', 'Hierro', 'Cobre', 'Plomo'],
    answerIndex: 0
  },
  {
    question: '¿En qué país se encuentra la Torre Eiffel?',
    options: ['Italia', 'Francia', 'España', 'Alemania'],
    answerIndex: 1
  }
  // Agrega más preguntas aquí
];


function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  optionsElement.innerHTML = '';
  currentQuestion.options.forEach((option, index) => {
    const optionButton = document.createElement('button');
    optionButton.className = 'option';
    optionButton.textContent = option;
    optionButton.addEventListener('click', function() {
      checkAnswer(index);
    });
    optionsElement.appendChild(optionButton);
  });
}

function checkAnswer(selectedIndex) {
  const currentQuestion = questions[currentQuestionIndex];

  if (selectedIndex === currentQuestion.answerIndex) {
    score++;
  }

  currentQuestionIndex++;
  scoreElement.textContent = score;
  showNextQuestion();
}

function showNextQuestion() {
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  questionElement.textContent = '¡Juego terminado!';
  optionsElement.innerHTML = '';
  nextButton.disabled = true;
  scoreElement.textContent = score;
}

nextButton.addEventListener('click', showNextQuestion);

showQuestion();
