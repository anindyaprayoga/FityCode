"use client";

import React, { useState } from "react";

const Quiz = ({ question, answers, correctAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleCheckAnswer = () => {
    setIsAnswered(true); // Mark as answered

    // Update isCorrect based on selected answer
    setIsCorrect(selectedAnswer === correctAnswer);

    // Update isButtonClicked for feedback display
    setIsButtonClicked(true);
  };

  return (
    <div className="bg-sky-400 border-solid border-4 border-blue-800 m-10 p-5 rounded-3xl">
      <div className="bg-sky-50 p-5 rounded-xl">
        <h2 className="text-stone-950 text-4xl">Quiz</h2>
        <p className="text-stone-950 text-xl">{question}</p>
        <div className="flex text-stone-950 p-5 text-xl bg-sky-100 gap-10">
          {answers.map((answer, index) => (
            <label key={index} htmlFor={answer} className="answer-option">
              <input
                type="radio"
                id={answer}
                name="answer"
                value={answer}
                checked={selectedAnswer === answer}
                onChange={() => setSelectedAnswer(answer)}
              />
              {answer}
            </label>
          ))}
        </div>
        <button
          disabled={!selectedAnswer}
          onClick={handleCheckAnswer}
          className="bg-blue-800 text-sky-50 p-4 rounded-full hover:bg-blue-400"
        >
          Check Answer
        </button>
        <div className="flex justify-center">
          {isAnswered &&
            isButtonClicked && ( // Show feedback only after answering and clicking button
              <p
                className={
                  isCorrect
                    ? "text-sky-50 bg-green-500 w-96 text-center text-xl"
                    : "text-sky-50 bg-red-500 w-96 text-center text-xl"
                }
              >
                {isCorrect
                  ? "Jawaban Anda Benar!"
                  : "Jawaban Anda Salah. Coba lagi!"}
              </p>
            )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
