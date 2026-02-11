** start of script.js **

const questions = [
  {
    category: "general",
    question: "Which letter should you choose?",
    choices: ["a", "b", "c"],
    answer: "c"
  },
  {
    category: "specific",
    question: "Which letter represents the correct short answer?",
    choices: ["d", "e", "f"],
    answer: "f"
  },
  {
    category: "deliberate",
    question: "Which letter corresponds to 'write'?",
    choices: ["l", "m", "n"],
    answer: "l"
  },
  {
    category: "highlight",
    question: "Which letter highlights the correct occasion?",
    choices: ["r", "p", "q"],
    answer: "q"
  },
  {
    category: "lunar",
    question: "Which letter represents 'delude'?",
    choices: ["z", "x", "y"],
    answer: "x"
  }
];
function getRandomQuestion(question) {
  const randomIndex =Math.floor(Math.random() * question.length)
  return questions [randomIndex];
}
function getRandomComputerChoice(choices) {
  const randomIndex =Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
function getResults(question,computerChoice) {
 if (computerChoice===question.answer){
   return "The computer's choice is correct!";
 }else {
   return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
 }
}

** end of script.js **

