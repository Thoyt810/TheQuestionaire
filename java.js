var timerEl = document.getElementById("timer");
var questionEl = document.getElementById("questionsHere");
var answer1 = document.getElementById("option1");
var answer2 = document.getElementById("option2");
var answer3 = document.getElementById("option3");
var answer4 = document.getElementById("option4")
var userGuess = []
var score = 0;
var questions = [ "Whats a good tool for debugging?", "Before using JQuery you must _______", "JQuery links preferably go at the _____ of the page",
"Conditionals are house in _____", "Javascript can be used to store _____"]
var options1 = ["Soap", "Make a link to Jquery", "The CSS", "Bars", "Numbers and strings"];
var options2 = ["Shutting the laptop off", "Talk to your computer to insert info", "Bottom of the html body", "Parentheses", "Arrays"];
var options3 = ["Desk tools", "Nothing needed", "In the Footer", "Curley brackets", "Booleans"];
var options4 = ["Manipulating java", "Put in the css", "No link needed", "For loops", "All of the above"];


$(document).ready(function() {
     $(".startButton").on("click", function(){
        $("#container").hide();
    })
    $("#option1").on("click", function(){
        answer1.textContent = options1[i];
        console.log(answer1)
    })

    for (var i = 0; i < questions.length; i++){
        questionEl.textContent = questions[i];
        console.log(questionEl);
    }

    function countdown (){
        var timeLeft = 60;

        var timeInterval = setInterval(function() {
          timerEl.textContent = timeLeft + " seconds remaining";
          timeLeft--;
      
          if (timeLeft === 0) {
            timerEl.textContent = "";
            clearInterval(timeInterval);
          }
      
        }, 1000);
    }

    // for (var i = 0; i < questions.length; i++){
    //     questionEl.textContent = questions.length[i];
    //     // answer1.appendChild(options1);
    //     // answer2.appendChild(options2);
    //     // answer3.appendChild(options3);
    //     // answer4.appendChild(options4);
    // }







countdown();


}); //dont touch this line
