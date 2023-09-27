var questions = [
  {
    question: "Savol 1?",
    options: ["A", "B", "C", "D"],
    answer: "A",
  },
  {
    question: "Savol 2?",
    options: ["A", "B", "C", "D"],
    answer: "B",
  },
];

var score = 0;

// Testni boshlash
function startTest() {
  var startTime = new Date();

  for (var i = 0; i < questions.length; i++) {
    var userAnswer = prompt(
      questions[i].question + "\n" + questions[i].options.join("\n")
    );

    // Javobni tekshirish
    if (
      userAnswer &&
      userAnswer.toUpperCase() === questions[i].answer.toUpperCase()
    ) {
      score++;
    } else {
      analyzeMistake(i);
      i--; // Xatoligi tahlil qilish uchun qayta o'tish
    }
  }

  var endTime = new Date();
  var testTime = (endTime - startTime) / 1000; // sekundlar bilan

  // IELTS/CEFR natijasi uchun ball qo'shish
  if (score === questions.length) {
    score++;
  }

  alert(
    "Test yakunlandi!\nNatijangiz: " +
      score +
      " ball\nTest vaqti: " +
      testTime +
      " sekund"
  );
}
// Xatolarni tahlil qilish
function analyzeMistake(questionIndex) {
  var newAnswer = prompt(
    "Noto'g'ri javob!\nTo'g'ri javobni kiriting: " +
      questions[questionIndex].answer
  );

  // Xatoligi tahlil qilish
  if (
    newAnswer &&
    newAnswer.toUpperCase() === questions[questionIndex].answer.toUpperCase()
  ) {
    score++;
  }
}

// Testni boshlash uchun funktsiyani chaqirish
startTest();
