var bicycleData = [
  {
    q: 'What is this bicycle part?<p/><img class="question-img" src="images/bicycle parts/wheel.svg">',
    options: ['Pedal', 'Handelbar', 'Wheel', 'Seat'],
    correctIndex: 2,
  },
  {
    q: 'What is this bicycle part?<p><img class="question-img" src="images/bicycle parts/pedal.svg"></p>',
    options: ['Pedal', 'Handelbar', 'Wheel', 'Seat'],
    correctIndex: 0,
  },
  {
    q: 'What is this bicycle part?<p><img class="question-img" src="images/bicycle parts/chain.svg"></p>',
    options: ['Pedal', 'chain', 'Wheel', 'Seat'],
    correctIndex: 1,
  },
  {
    q: 'What is this bicycle part?<p><img class="question-img" src="images/bicycle parts/handlebar.svg"></p>',
    options: ['Pedal', 'Handelbar', 'Wheel', 'Seat'],
    correctIndex: 1,
  },
  {
    q: 'What is this bicycle part?<p><img class="question-img" src="images/bicycle parts/seat.svg"></p>',
    options: ['Pedal', 'Handelbar', 'Wheel', 'Seat'],
    correctIndex: 3,
  },
];

var carData = [
  {
    q: 'What is this car part?<p/><img class="question-img" src="images/car parts/wheels.svg">',
    options: ['Antenna', 'Wheel', 'Headlight', 'Windscreen'],
    correctIndex: 1,
  },
  {
    q: 'What is this car part?<p><img class="question-img" src="images/car parts/antenna.svg"></p>',
    options: ['Antenna', 'Wheel', 'Headlight', 'Windscreen'],
    correctIndex: 0,
  },
  {
    q: 'What is this car part?<p><img class="question-img" src="images/car parts/headlight.svg"></p>',
    options: ['Door', 'Front light', 'Head light', 'Screen'],
    correctIndex: 2,
  },
  {
    q: 'What is this car part?<p><img class="question-img" src="images/car parts/side mirror.svg"></p>',
    options: ['Side mirror', 'Wheel', 'Headlight', 'Windscreen'],
    correctIndex: 0,
  },
  {
    q: 'What is this car part?<p><img class="question-img" src="images/car parts/windscreen.svg"></p>',
    options: ['Side mirror', 'Wheel', 'Headlight', 'Windscreen'],
    correctIndex: 3,
  },
];

var currentQuiz = [];

var quizContainer =
  '<div id="quiz-container">' +
  '<div id="questions">' +
  '<div class="question-container">' +
  '<div id="quiz-counter"></div>' +
  '<p id="question" class="question"></p>' +
  '<ul class="answers">' +
  '<li><button id="0">Answer 1</button></li>' +
  '<li><button id="1">Answer 2</button></li>' +
  '<li><button id="2">Answer 3</button></li>' +
  '<li><button id="3">Answer 4</button></li>' +
  '</ul>' +
  '</div>' +
  '</div>' +
  '<div id="quiz">' +
  '<div id="quiz-start-screen">' +
  '<div><a href="#" id="quiz-start-btn" class="quiz-button">Start Quiz</a></div>' +
  '</div>' +
  '<div id="quiz-gameover-screen">' +
  '<p id="quiz-gameover-response">Oh no, that is incorrect</p>' +
  '<p><a href="#" id="quiz-retry-btn">Try again</a></p>' +
  '</div>' +
  '<div id="quiz-correct-screen">' +
  '<p id="quiz-correct-response">Correct!</p>' +
  '<p><a href="#" id="quiz-next-btn">Next Question</a></p>' +
  '</div>' +
  '<div id="quiz-complete-screen">' +
  '<p id="quiz-correct-response">Correct!</p>' +
  '<p><a href="#" id="quiz-complete-btn" class="unlock-quiz2" data-bs-dismiss="modal">Quiz completed!</a></p>' +
  '</div>' +
  '</div>' +
  '</div>';

//LOAD THE ELEMENTS OVER
$('.quiz-question-container').append(quizContainer);

//INITIALISE THE ELEMENTS
const questionElement = document.getElementById('question');
const a_text = document.getElementById('0');
const b_text = document.getElementById('1');
const c_text = document.getElementById('2');
const d_text = document.getElementById('3');
const counter = document.getElementById('quiz-counter');
let currentQuestion = 0;

$(window).on('load', function () {
  $('#welcomeModal').modal('show');
});

$(document).ready(function () {
  // PASS USERNAME
  $('.btn-welcome').click(function () {
    var username = $('#name').val();
    $('.username').html(username);
  });

  // SELECT LEVEL 1
  $('#quiz-1').click(function () {
    //Update with new array
    currentQuiz = bicycleData;
    //Update title and text of banner
    $('#banner-title').text('Bicycle');
    $('#banner-text').text('Level 1');
    //Update the image of the quiz
    $('.quiz-img').attr('src', 'images/bicycle.svg');
  });
  // SELECT LEVEL 2
  $('#quiz-2').click(function () {
    currentQuiz = carData;
    $('#banner-title').text('Car');
    $('#banner-text').text('Level 2');
    $('.quiz-img').attr('src', 'images/car.svg');
  });

  //DEFAULT STATE OF THE QUIZ
  resetQuiz();

  //Start the Quiz
  $('.quiz-button').click(loadQuiz);

  //Load the quiz(Show the question, answers etc..)
  function loadQuiz() {
    $('#quiz-start-screen').hide();
    $('#quiz-correct-screen').hide();
    $('#quiz-gameover-screen').hide();
    $('#questions').show();
    const currentQuizData = currentQuiz[currentQuestion];
    questionElement.innerHTML = currentQuizData.q;
    a_text.innerText = currentQuizData.options[0];
    b_text.innerText = currentQuizData.options[1];
    c_text.innerText = currentQuizData.options[2];
    d_text.innerText = currentQuizData.options[3];
    counter.innerText =
      'Question ' + (currentQuestion + 1) + ' of ' + currentQuiz.length;
  }

  //Check selected button answer
  $('.answers button').click(function () {
    if (this.id == currentQuiz[currentQuestion].correctIndex) {
      //Check whether is at the last question
      if (currentQuestion < currentQuiz.length - 1) {
        $('#questions').hide();
        $('#quiz-correct-screen').show();
      } else {
        $('#questions').hide();
        $('#quiz-complete-screen').show();
      }
    } else {
      $('#questions').hide();
      $('#quiz-gameover-screen').show();
    }
  });

  //Next Question button
  $('#quiz-next-btn').click(function () {
    currentQuestion++;
    loadQuiz();
  });

  //Retry Question button
  $('#quiz-retry-btn').click(function () {
    loadQuiz();
  });

  //Reset quiz function
  function resetQuiz() {
    currentQuestion = 0;
    $('#quiz-start-screen').show();
    $('#quiz-complete-screen').hide();
    $('#quiz-correct-screen').hide();
    $('#quiz-gameover-screen').hide();
    $('#questions').hide();
  }
  //RESET QUIZ
  $('#quiz-complete-btn').click(function () {
    resetQuiz();
  });
  //RESET QUIZ
  $('.back-container').click(function () {
    resetQuiz();
  });

  // UNLOCK QUIZ 2
  $(document).on('click', '.unlock-quiz2', function () {
    var element = document.getElementById('quiz-2');
    var icon = document.getElementById('quiz-2-icon');
    element.classList.add('unlock');
    element.classList.remove('lock');
    icon.classList.remove('fa-lock');
    icon.classList.add('fa-play');
    loadMain();
  });

  // LOAD THE MAIN SECTION
  loadMain();

  function loadMain() {
    // Apply Hover Animations on classes "unlock"
    var buttonQuizzes = document.querySelectorAll('.unlock');
    function animateButton(el, scale, duration, elasticity) {
      anime.remove(el);
      anime({
        targets: el,
        scale: scale,
        duration: duration,
        elasticity: elasticity,
      });
    }

    function enterButton(el) {
      animateButton(el, 1.1, 800, 400);
    }
    function leaveButton(el) {
      animateButton(el, 1.0, 600, 300);
    }

    for (var i = 0; i < buttonQuizzes.length; i++) {
      buttonQuizzes[i].addEventListener(
        'mouseenter',
        function (e) {
          enterButton(e.target);
        },
        false
      );

      buttonQuizzes[i].addEventListener(
        'mouseleave',
        function (e) {
          leaveButton(e.target);
        },
        false
      );
    }
  }

  // ANIMATIONS
  // Wrap every letter in a span
  var textWrapper = document.querySelector('.welcome-title');
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter''>$&</span>"
  );

  anime.timeline().add({
    targets: '.welcome-title .letter',
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: 'easeOutExpo',
    delay: (el, i) => 70 * i,
  });

  anime({
    targets: '#rocket',
    translateY: 50,
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine',
  });

  anime({
    targets: '.cls-500',
    direction: 'alternate',
    loop: true,
    easing: 'easeOutInSine',
    duration: 1000,
    opacity: [0, 1],
    rotateX: '10',
  });

  anime({
    targets: '#wheels',
    rotate: '-360',
    easing: 'linear',
    loop: true,
  });

  anime({
    targets: '#bicycle-body',
    translateY: 5,
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine',
  });

  anime({
    targets: '.quiz-img',
    translateY: 10,
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutSine',
  });

  //TIPPY
  tippy('.welcome-info', {
    content:
      "<div class='text-center'>Quizzy is an online quiz app that aims to test children's knowledge on parts and anatomies of vehicles.</div>",
    allowHTML: true,
    placement: 'bottom',
  });

  tippy('.btn-change', {
    content: 'Change username',
    placement: 'bottom',
  });

  tippy('.lock-2-tippy', {
    content: 'Complete Level 1 to unlock',
    placement: 'bottom',
  });

  tippy('.lock-3-tippy', {
    content: 'Complete Level 2 to unlock',
    placement: 'bottom',
  });
});
