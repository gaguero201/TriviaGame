//I cannot get the questions to display all 10
//
var questions = [
  {
    ques: "What was the first movie in the Marvel Cinematic Universe?",
    ans: ["Batman", "Spider-Man", "Iron Man", "The Avengers"],
    name: "first",
    correct: "Iron Man",
    divClass: ".firstMovie"
  },
  {
    ques: "Which of these actors didn't appear in Pulp Fiction?",
    ans: ["Samuel L Jackson", "Uma Thurman", "Bruce Willis", "John Turturro"],
    name: "pulp",
    correct: "John Turturro",
    divClass: ".pulp"
  },
  {
    ques: "What is it called when an actor breaks character to directly address the audience?",
    ans: ["Bending the narrative", "Breaking the 4th wall", "Sweeping the rug", "Following the loose thread"],
    name: "breaks",
    correct: "Breaking the 4th wall",
    divClass: ".breaks"
  },
  {
    ques: "Which of these movies was not directed by M. Night Shyamalan?",
    ans: ["Signs", "The Ring", "The Sixth Sense", "Glass"],
    name: "Night",
    correct: "The Ring",
    divClass: ".night"
  },
  {
    ques: "Which of the following is filmmaker Michael Bay known for?",
    ans: ["Sweeping Western landscapes", "Romantic comedy", "explosions", "fanciful costume design"],
    name: "bay",
    correct: "explosions",
    divClass: ".bay"
  },
  {
    ques: "Which of the following characters would you be most likely to seee in a film noir movie?",
    ans: ["a beach volleyball player", "a cynical private investigator", "a fighter pilot", " an african tribal leader"],
    name: "noir",
    correct: "a cynical private investigator",
    divClass: ".noir"
  },
  {
    ques: "In the Godfather series, where was Vito Corleone born?",
    ans: ["Corleone, Sicily", "Rome", "Athens", "New York City"],
    name: "vito",
    correct: "Corleone, Sicily",
    divClass: ".vito"
  },
  {
    ques: "Where is the Temple of Doom in Indiana Jones and the Temple of Doom?",
    ans: ["India", " Africa", "South America", "China"],
    name: "doom",
    correct: "China",
    divClass: ".doom"
  },
  {
    ques: "Which of these characters were not one of the four ghostbusters?",
    ans: ["Peter", "Ray", "Egon", "Jerry"],
    name: "ghostbusters",
    correct: "Jerry",
    divClass: ".ghostbusters"
  },
  {
    ques: "Which of these films was Bruce Lee known for?",
    ans: ["Enter the Cage", "Enter the Bar", "Enter the Dragon", "Enter the Temple"],
    name: "bruce",
    correct: "Enter the Dragon",
    divClass: ".bruce"
  }
] // end questions object

var labels = ["first", "second", "third", "fourth"];

// click to start then display quesions
var startGame = $("#start-btn").on('click', function () {
  $(this).parent().hide();
  $('.container').show();
  countdown(60);
  questionDisplay();
});

// function for displaying questions
var questionDisplay = function () {
  $(".questions :not('#sub-but')").empty();
  // loops through the 10 questions 
  for (var j = 0; j <= questions.length; j++) {
    $('.questions').prepend('<div class="' + questions[j].name + '"></div>');
    $(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');
    // loops through answers for each radio button
    for (var i = 0; i <= questions[j].ans.length; i++) {
      $(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].ans[i] + '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label>');
    }
    $('.questions').prepend('<hr />');
  }
}


// function for countdown timer
var countdown = function (seconds) {

  var timer = setInterval(function () {
    seconds = seconds - 1;
    $("#time-remain").html(seconds);

    if (seconds <= 0) {
      $('.container').fadeOut(500);
      var correctAnswers = 0;
      var wrongAnswers = 0;
      var unAnswered = 0;

      // loop through correctArray & radioName to match html elements & answers
      for (var i = 0; i < 10; i++) {

        if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

          correctAnswers++;
          console.log("this is correct! number:" + i)
        } else {
          wrongAnswers++;
          console.log("this is wrong! number:" + i)
        };
      }
      $('#correctTimesUp').append(correctAnswers);
      // display wrongAnswers
      $('#wrongTimesUp').append(wrongAnswers);
      $('#timesUp').fadeIn(1000).show();

      // alert("Times Up!");
      clearInterval(timer);
      return;
    }
  }, 1000);

  // click event for submit button to stop timer
  $('#sub-but').on('click', function () {
    clearInterval(timer);
  })
}; // end countdown


// function to grade quiz once submit button is clicked
var gradeQuiz = $('#sub-but').on('click', function () {

  var correctAnswers = 0;
  var wrongAnswers = 0;
  var unAnswered = 0;

  // loop through correctArray & radioName to match html elements & answers
  for (var i = 0; i < 10; i++) {

    if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

      correctAnswers++;
    } else {
      wrongAnswers++;
    };
  };

  // once submit is clicked...
  // tests
  // stop timer
  countdown();
  // fade out questions
  $('.container').fadeOut(500);
  // show answerScreen
  $('#answerScreen').show();
  // display correctAnswers
  $('#correctScreen').append(correctAnswers);
  // display wrongAnswers
  $('#wrongScreen').append(wrongAnswers);

});