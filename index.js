let readlineSync = require("readline-sync");
let kuler = require("kuler")

let userName = readlineSync.question("What's your name? ");
console.log(kuler(`\nHello ${userName} welcome to Quizify`, "#dc2626"))

let score=0
const database = {
  data:[
    {
      question:`let a = {}, b = {}
console.log(a == b)
console.log(a === b)`
      ,
      Options:{
        a: "false false",
        b: "false true",
        c: "true false",
        d: "true true"
      },
      CorrectAnswer:"a"
    },
    {
      question:"Object.assign(targer, source) creates which type of copy?"
      ,
      Options:{
        a: "Deep Copy",
        b: "Shallow Copy",
        c: "Nested Copy",
        d: "Creates a new reference"
      },
      CorrectAnswer:"b"
    },
    {
      question: "Is method chaining possible with forEach?",
      Options:{
        a: "Yes",
        b: "No"
      },
      CorrectAnswer:"b"  
    }  
  ]
}

/** Creating Leader Board*/
const leaderBoard = {
  data: [
    {
      name: "Ashish",
      score: 1
    },
    {
      name: "Riya",
      score: 3
    },
    {
      name: "Jay",
      score: 2
    }
  ]
}

function playGame(userAnswer, correctAnswer){
  if(userAnswer===correctAnswer){
    console.log(kuler("Correct Answer", "#059669"));
    score++
  }
  else{
    console.log(kuler("Incorrect Answer", "#b91c1c"))
    console.log(`Correct answer is ${correctAnswer}`)
  }
}

function showHighScorer(leaderBoard){
  leaderBoard.data.push({name:userName, score: score})
  let sortedScoreList = leaderBoard.data.sort((a, b) => b.score - a.score);
  console.log(kuler("\nCheck your position on the Leader Board🎉🎉", "#fde047"))
  for(let leader of sortedScoreList){
    console.log(kuler(`${leader.name} -  Score: ${leader.score}`, "#9333ea"))
  }
}

function showQuestionsAndAnswers(database){
  for(let i=0;i<database.data.length;i++){
    console.log(`Q${i+1} - ${database.data[i].question}`);
    for(let key in database.data[i].Options){
      console.log(`${key} - ${database.data[i].Options[key]}`)
    }
    let userAnswer=readlineSync.question("Enter your answer - (a/b/c/d) - ").toLowerCase()
    playGame(userAnswer, database.data[i].CorrectAnswer)
  }
}

showQuestionsAndAnswers(database);
console.log(kuler(`\nYour score is - ${score}`, "#5eead4"));
showHighScorer(leaderBoard);