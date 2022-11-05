import React from "react";
import { AnswerOption } from "../api/index";

interface QuizOptionProp {
  option: AnswerOption;
  handleOptionClick: () => any;
  activeOption: AnswerOption | undefined;
}

export default function QuizOption({
  option,
  handleOptionClick,
  activeOption,
}: QuizOptionProp) {
  // renders quiz option as a button
  return (
    <button
      className={`block w-full text-left p-2 border rounded-lg my-2 hover:bg-blue-700 hover:text-white cursor-pointer ${
        option === activeOption ? "bg-blue-700 text-white" : ""
      }`}
      onClick={handleOptionClick}
    >
      {option.answerText}
    </button>
  );
}
