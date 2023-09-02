import React, { useState } from "react";
import "./App.css";

function App() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "What is the capital of India?",
      options: [
        { id: 0, text: "Jaipur", isCorrect: false },
        { id: 1, text: "Mumbai", isCorrect: false },
        { id: 2, text: "Bhopal", isCorrect: false },
        { id: 3, text: "Delhi", isCorrect: true },
      ],
    },
    {
      text: "When did India become independent?",
      options: [
        { id: 0, text: "1947", isCorrect: true },
        { id: 1, text: "1950", isCorrect: false },
        { id: 2, text: "1948", isCorrect: false },
        { id: 3, text: "1946", isCorrect: false },
      ],
    },
    {
      text: "Who is the prime minister of India?",
      options: [
        { id: 0, text: "Narendra Modi", isCorrect: true },
        { id: 1, text: "Adityanath Yogi", isCorrect: false },
        { id: 2, text: "Rahul Gandhi", isCorrect: false },
        { id: 3, text: "Dr. Manmohan Singh", isCorrect: false },
      ],
    },
    {
      text: "When Chandrayaan-3 landed on moon?",
      options: [
        { id: 0, text: "27 Aug 2023", isCorrect: false },
        { id: 1, text: "23 Aug 2023", isCorrect: true },
        { id: 2, text: "14 July 2023", isCorrect: false },
        { id: 3, text: "22 Aug 2023", isCorrect: false },
      ],
    },
    {
      text: "Who is the chief minister of Rajasthan?",
      options: [
        { id: 0, text: "Pappu", isCorrect: false },
        { id: 1, text: "Jadugar", isCorrect: true },
        { id: 2, text: "Ashok Gehlot", isCorrect: true },
        { id: 3, text: "Tuntun Mausi", isCorrect: false },
      ],
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      {/* 1. Header  */}
      <h1>IAS Quiz Questions</h1>



      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
