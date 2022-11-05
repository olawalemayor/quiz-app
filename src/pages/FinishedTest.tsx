import React, { useContext } from "react";
import quizContext from "../context/QuizContext";

export default function FinishedTest() {
  const { score } = useContext(quizContext);

  return (
    <div className="mt-6 flex flex-col items-center w-full h-full justify-center">
      <div className="p-2 bg-green-700 text-white max-w-fit">
        The test has been completed
      </div>

      <span className="block text-2xl">Your score is {score}</span>
    </div>
  );
}
