import React, { useState } from "react";
import QUESTIONS from "../questions";
import img from "../assets/quiz-complete.png";

// const shuffleArray = (array) => {
//     let shuffledArray = array.slice(); // Create a copy of the array
//     for (let i = shuffledArray.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Swap elements
//     }
//     return shuffledArray;
// };

const Quiz = () => {
    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;

    function handleSelectAnswers(selectedAnswer) {
        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer];
        });
    }

    const currentQuestion = QUESTIONS[activeQuestionIndex];
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    if (quizIsComplete) {
        return (
            <div id='summary'>
                <h2>Quiz Completed</h2>
                <img src={img} alt='icon' />
            </div>
        );
    }
    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswers.sort(() => Math.random() - 0.5);

    return (
        <div id='quiz'>
            <div id='question'>
                <h2>{currentQuestion.text}</h2>
                <ul id='answers'>
                    {shuffledAnswers.map((answer) => (
                        <li key={answer} className='answer'>
                            <button onClick={() => handleSelectAnswers(answer)}>{answer}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Quiz;
