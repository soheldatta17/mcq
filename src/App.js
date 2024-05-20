import React, { useState } from 'react';
import './App.css';

// Sample questions data
const questions = [
  {
    question: "Which country won the FIFA World Cup in 2018?",
    options: ["Brazil", "Germany", "France", "Argentina"],
    answer: "France"
  },
  {
    question: "Who is known as the fastest man in the world?",
    options: ["Usain Bolt", "Tyson Gay", "Yohan Blake", "Justin Gatlin"],
    answer: "Usain Bolt"
  },
  {
    question: "In which sport is the term 'Love' used?",
    options: ["Football", "Tennis", "Basketball", "Cricket"],
    answer: "Tennis"
  },
  {
    question: "How many players are there in a rugby team?",
    options: ["11", "13", "15", "18"],
    answer: "15"
  },
  {
    question: "Which country hosts the Wimbledon tennis tournament?",
    options: ["USA", "Australia", "France", "United Kingdom"],
    answer: "United Kingdom"
  },
  {
    question: "What is the maximum break in snooker?",
    options: ["147", "155", "170", "180"],
    answer: "147"
  },
  {
    question: "Who holds the record for the most home runs in a single MLB season?",
    options: ["Barry Bonds", "Babe Ruth", "Mark McGwire", "Sammy Sosa"],
    answer: "Barry Bonds"
  },
  {
    question: "In which sport would you perform a slam dunk?",
    options: ["Football", "Basketball", "Volleyball", "Tennis"],
    answer: "Basketball"
  },
  {
    question: "Which country won the first ever FIFA World Cup in 1930?",
    options: ["Brazil", "Uruguay", "Argentina", "Italy"],
    answer: "Uruguay"
  },
  {
    question: "What sport is known as the 'king of sports'?",
    options: ["Basketball", "Cricket", "Football (Soccer)", "Tennis"],
    answer: "Football (Soccer)"
  }
];


const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const handleAnswer = (selectedOption) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = selectedOption;
    setAnswers(newAnswers);

    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const handleNext = () => {
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
    setAnswers(Array(questions.length).fill(null));
  };

  return (
    <div className="app">
      {showScore ? (
        <div className="score-container">
          <h2>Your Score</h2>
          <p>{score} out of {questions.length}</p>
          <button onClick={handleRestart} className="restart-button">Restart Quiz</button>
        </div>
      ) : (
        <div className="question-container">
          <h2>Question {currentQuestionIndex + 1} / {questions.length}</h2>
          <p>{questions[currentQuestionIndex].question}</p>
          <div className="options">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <button 
                key={index} 
                onClick={() => handleAnswer(option)} 
                className={`option-button ${answers[currentQuestionIndex] === option ? 'selected' : ''}`}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="navigation-buttons">
            <button 
              onClick={handlePrevious} 
              className="nav-button" 
              disabled={currentQuestionIndex === 0}
            >
              Previous
            </button>
            <button 
              onClick={handleNext} 
              className="nav-button" 
              disabled={answers[currentQuestionIndex] === null}
            >
              {currentQuestionIndex === questions.length - 1 ? 'Submit' : 'Next'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
