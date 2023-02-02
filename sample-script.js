function trigger(){
  var val = document.getElementById("user-input").value
  var isCorrect = aufgabe(parseInt(val))

  var res = document.getElementById("result")
  
  res.innerText = isCorrect ? "Richtig!" : "Falsch"
}


function displayTexts(){
  var task1TextElement = document.getElementById("task-1-text")
  var text1 = task1Text()
  task1TextElement.innerText = text1 ? text1 : ""


  var task2TextElement = document.getElementById("task-2-text")
  var text2 = task2Text()
  task2TextElement.innerText = text2 ? text2 : ""


  // COPY ME
  var task3TextElement = document.getElementById("task-3-text")
  var text3 = task3Text()
  task3TextElement.innerText = text3 ? text3 : ""



  // PASTE ME & Change Task Number
}


function evalTask1(){
  var val = document.getElementById("user-input-task-1").value
  var isCorrect = task1Evaluation(val)

  var res = document.getElementById("user-input-task-1-is-correct")
  res.innerText = isCorrect ? "Die Aufgabe hast du richtig geloest!" : "Die Aufgabe hast du leider falsch geloest"
}


function evalTask2(){
  var val = document.getElementById("user-input-task-2").value
  var isCorrect = task2Evaluation(val)

  var res = document.getElementById("user-input-task-2-is-correct")
  res.innerText = isCorrect ? "Die Aufgabe hast du richtig geloest!" : "Die Aufgabe hast du leider falsch geloest"
}


// Copy Me
function evalTask3(){
  var val = document.getElementById("user-input-task-3").value
  var isCorrect = task3Evaluation(val)

  var res = document.getElementById("user-input-task-3-is-correct")
  res.innerText = isCorrect ? "Die Aufgabe hast du richtig geloest!" : "Die Aufgabe hast du leider falsch geloest"
}


// Paste Me and change all references to task number 3 to my new task number


displayTexts()
