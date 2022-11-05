import React, { useContext, useEffect, useState } from "react";
import { AnswerOption, getQuiz } from "../api";
import QuizOption from "../components/QuizOption";
import Timer from "../components/Timer";
import quizContext from "../context/QuizContext";

import { useNavigate } from "react-router-dom";

export default function Quiz() {
  const {
    quizzes,
    setQuizzes,
    score,
    setScore,
    activeQuestion,
    setActiveQuestion,
  } = useContext(quizContext);

  // Time for each quiz
  const timeForQuiz = 60;

  const [selectedOption, setSelectedOption] = useState<AnswerOption>();
  const [time, setTime] = useState(timeForQuiz);

  const navigate = useNavigate();

  const updateScore = () => {
    // has no effect if no option is selected
    // updates score based on current selection

    if (!selectedOption) return;

    const newScore = selectedOption.isCorrect === "true" ? 1 : 0;

    setScore(score + newScore);
  };

  const handleSubmit = () => {
    // updates the score
    //   gets next question by increasing active question by 1
    // Sets the next question as the active question

    updateScore();

    if (activeQuestion < quizzes.length - 1) {
      const newQuestion = activeQuestion + 1;

      setActiveQuestion(newQuestion);
    }
  };

  const handleTimerEnd = () => {
    // Submits and moves to next question
    // If last question, ends the quiz
    if (activeQuestion < quizzes.length - 1) {
      handleSubmit();
      setTime(timeForQuiz);
    } else endQuiz();
  };

  const endQuiz = () => {
    // Updates score
    // navigates to finished page

    updateScore();

    // Disable navigation back once test is completed
    navigate("done", { replace: true });
  };

  useEffect(() => {
    const getAllQuizzes = async () => {
      // get all quizzes asynchronously
      const result = await getQuiz();

      setQuizzes(result);
    };

    getAllQuizzes();
  }, [setQuizzes]);

  return (
    <React.Fragment>
      <div className="flex items-center my-6">
        {/* Timer bar */}
        <div className="hidden sm:block sm:w-1/2"></div>
        <div className="w-full sm:w-1/2 text-center">
          <Timer time={time} setTime={setTime} onEnd={handleTimerEnd} />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-6">
        <div className="w-full sm:w-1/2">
          {/* Question */}
          <h3 className="font-semibold italic bg-slate-600 max-w-fit text-white px-3 py-1 rounded">
            Question
          </h3>

          {quizzes.length && (
            <span className="text-2xl font-medium text-center">
              {quizzes[activeQuestion].data.getStep.stepQuiz.questionText}
            </span>
          )}
        </div>

        <div className="w-full sm:w-1/2 px-2">
          <span className="block font-semibold text-lg text-blue-800">
            Select the correct option
          </span>
          {/* Options */}
          {quizzes.length &&
            quizzes[activeQuestion].data.getStep.stepQuiz.answerOptions.map(
              (item, index) => (
                <QuizOption
                  option={item}
                  key={index}
                  activeOption={selectedOption}
                  handleOptionClick={() => setSelectedOption(item)}
                />
              )
            )}

          {/* Got to Next question if there is a next question */}
          {activeQuestion < quizzes.length - 1 && (
            <button
              className="px-5 py-2 rounded-lg border-2 border-black hover:bg-black hover:text-white"
              onClick={handleSubmit}
            >
              Next
            </button>
          )}

          {/* If last question */}
          {activeQuestion >= quizzes.length - 1 && (
            <button
              className="px-5 py-2 rounded-lg border-2 border-black hover:bg-black hover:text-white"
              onClick={endQuiz}
            >
              Finish
            </button>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}
