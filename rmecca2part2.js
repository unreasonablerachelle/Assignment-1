var numQuestions = "3";

function tallyScore() {
  var score = 0;

  for(i = 1; i <= numQuestions; i++) {
    score += localStorage.getItem("q" + i + "-result") | 0;
  }

  document.getElementById("result").innerHTML = "<p>Maximum possible score: 3</p><p>Your score: " + score + "</p>";
}

function submitQuestion(questionId, evalFn) {
  var qPrefix = "q" + questionId;
  var qResult = qPrefix + "-result";
  var resultElem = document.getElementById(qResult);

  var result = evalFn();

  if(result) {
    resultElem.innerHTML = "You were right!";
  } else {
    resultElem.innerHTML = "You were wrong!";
  }

  document.getElementById(qPrefix + "-button").disabled = true;

  if(questionId < numQuestions) {
    document.getElementById("q" + (questionId + 1) + "-button").disabled = false;
  } else {
    tallyScore();
    document.getElementById("reset").disabled = false;
  }

  localStorage.setItem(qResult, result | 0);
}

function evalQuestion1() {
  if(document.getElementById("q1-3").checked) {
    return true;
  }
  return false;
}

function evalQuestion2() {
  if(document.getElementById("q2-1").checked
    && document.getElementById("q2-2").checked
    && document.getElementById("q2-4").checked
    && !document.getElementById("q2-3").checked) {
      return true;
  }
  return false;
}

function evalQuestion3() {
  var answer = document.getElementById("q3").value.toUpperCase();

  if(answer === "MARSHALL MCLUHAN") {
    return true;
  } else {
    return false;
  }
}
