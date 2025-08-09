// function checkAnswer() {
//     const correctAnswer = "4";
//     const userAnswer = document.querySelector('input[name="quiz"]:checked').value;

//     if (userAnswer === correctAnswer) {
//         document.getElementById("feedback").textContent = "Correct! Well done.";
//     } else {
//         document.getElementById("feedback").textContent = "That's incorrect. Try again!";
//     }
// }

// document.getElementById("submit-answer").addEventListener("click", checkAnswer);
const button = document.getElementById("submit-answer");
button.addEventListener("click", checkAnswer);


function checkAnswer(){
    const correctAnswer = "4";
    const userAnswer = document.querySelector('input[type="radio"]:checked').value;

    if (correctAnswer == userAnswer){
        document.getElementById("feedback").innerHTML = "Correct! Well done.";
    } else {
        document.getElementById("feedback").innerHTML = "That's incorrect. Try again!";
    }
}