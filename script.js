import { level1, level2, level3 } from './data.js';

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
  '<p><a href="#" id="quiz-complete-btn" class="unlock-quiz" data-bs-dismiss="modal">Quiz completed!</a></p>' +
  '</div>' +
  '</div>' +
  '</div>';

//LOAD THE ELEMENTS OVER
$('.quiz-question-container').append(quizContainer);
//Initialise currentQuestion variable
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
    currentQuiz = level1;
    //Update title and text of banner
    $('#banner-title').text('Bicycle');
    $('#banner-text').text('Level 1');
    //Update the image of the quiz
    $('.quiz-img').attr('src', 'images/moving_bicycle.svg');
  });
  // SELECT LEVEL 2
  $('#quiz-2').click(function () {
    currentQuiz = level2;
    $('#banner-title').text('Car');
    $('#banner-text').text('Level 2');
    $('.quiz-img').attr('src', 'images/moving_car.svg');
  });

  // SELECT LEVEL 3
  $('#quiz-3').click(function () {
    currentQuiz = level3;
    $('#banner-title').text('Plane');
    $('#banner-text').text('Level 3');
    $('.quiz-img').attr('src', 'images/plane.svg');
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
    $('#question').html(currentQuizData.q);
    $('#0').text(currentQuizData.options[0]);
    $('#1').text(currentQuizData.options[1]);
    $('#2').text(currentQuizData.options[2]);
    $('#3').text(currentQuizData.options[3]);
    $('#quiz-counter').text(
      'Question ' + (currentQuestion + 1) + ' of ' + currentQuiz.length
    );
  }

  //Check selected button answer
  $('.answers button').click(function () {
    //Check if the button ID selected matches the correctIndex for that qn
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

  // UNLOCK QUIZ
  $('.unlock-quiz').click(function () {
    if (currentQuiz == level1) {
      $('#quiz-2').addClass('unlock');
      $('#quiz-2').removeClass('lock');
      $('#quiz-2-icon').removeClass('fa-lock');
      $('#quiz-2-icon').addClass('fa-play');
    } else if (currentQuiz == level2) {
      $('#quiz-3').addClass('unlock');
      $('#quiz-3').removeClass('lock');
      $('#quiz-3-icon').removeClass('fa-lock');
      $('#quiz-3-icon').addClass('fa-play');
    }
    loadMain();
  });

  // LOAD THE MAIN SECTION
  loadMain();

  function loadMain() {
    // Apply Hover Animations on classes "unlock"
    var buttonQuizzes = $('.unlock');
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
