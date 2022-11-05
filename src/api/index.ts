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

const quizzes: IQuiz[] = [
  {
    data: {
      getStep: {
        id: "0007-02-05",
        stepQuiz: {
          answerOptions: [
            {
              answerText: "Animate him",
              isCorrect: "true",
            },
            {
              answerText: "Manufacture him",
              isCorrect: "true",
            },
            {
              answerText: "Modify him",
              isCorrect: "true",
            },
            {
              answerText: "Do nothing with him",
              isCorrect: "false",
            },
          ],
          questionText: "What can you do with Roland after modelling him?",
        },
      },
    },
  },
];

export const getQuiz = () => {
  // returns array of quiz as a promise
  return new Promise<IQuiz[]>((resolve, reject) => {
    resolve(quizzes);

    reject("Cannot get quiz");
  });
};
