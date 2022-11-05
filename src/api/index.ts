import quizData from "./data.json";

export interface AnswerOption {
  answerText: string;
  isCorrect: string;
}

export interface IQuiz {
  data: {
    getStep: {
      id: string;
      stepQuiz: {
        answerOptions: AnswerOption[];
        questionText: string;
      };
    };
  };
}

// custom quiz data
const quizzes: IQuiz[] = quizData;

export const getQuiz = () => {
  // returns array of quiz as a promise
  return new Promise<IQuiz[]>((resolve, reject) => {
    resolve(quizzes);

    reject("Cannot get quiz");
  });
};
