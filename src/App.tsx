import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IQuiz } from "./api";
import "./App.css";
import AppRoutes from "./AppRoutes";
import QuizContext from "./context/QuizContext";

function App() {
  const [quizzes, setQuizzes] = useState<IQuiz[]>([]);
  const [score, setScore] = useState(0);
  const [activeQuestion, setActiveQuestion] = useState(0); //Active question is instantiated to 0 which is the first question

  return (
    <div className="bg-blue-50 h-screen overflow-hidden">
      <h1 className="text-center text-3xl font-semibold mt-3 capitalize text-gray-600 font-mono">
        <NavLink to="" replace>
          Quiz Application
        </NavLink>
      </h1>
      <QuizContext.Provider
        value={{
          quizzes,
          setQuizzes,
          score,
          setScore,
          activeQuestion,
          setActiveQuestion,
        }}
      >
        <AppRoutes />
      </QuizContext.Provider>
    </div>
  );
}

export default App;
