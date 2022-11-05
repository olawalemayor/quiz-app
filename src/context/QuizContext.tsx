import React from "react";
import { IQuiz } from "../api/index";

interface QuizContextProps {
  quizzes: IQuiz[];
  setQuizzes: React.Dispatch<React.SetStateAction<IQuiz[]>>;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  activeQuestion: number;
  setActiveQuestion: React.Dispatch<React.SetStateAction<number>>;
}

const quizContext = React.createContext<QuizContextProps>({
  quizzes: [],
  setQuizzes: () => {},
  score: 0,
  setScore: () => {},
  activeQuestion: 0,
  setActiveQuestion: () => {},
});

quizContext.displayName = "Quiz Context";

export default quizContext;
