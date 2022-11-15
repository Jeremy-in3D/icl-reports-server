import React from "react";
import { CreateReport } from "../../classes/create-report";
import { QuestionContent } from "./question-content";
import { questionBank } from "../../data/reports-data";

export const MichlolForm: React.FC<{
  reportInstance: CreateReport;
  michlolId: string;
  questions: any;
  currentQuestion: number;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({
  reportInstance,
  michlolId,
  questions,
  currentQuestion,
  setCurrentQuestion,
  setIsOpen,
}) => {
  //Maybe factor the filter out to the previous layer, and prop down the already ready formQuestions
  const formQuestions = questionBank.filter(
    (question) => !questions.includes(question.id)
  );
  const { id: questionId, question } = formQuestions[currentQuestion];
  return (
    <>
      <p className="michlol-question">{question}</p>
      <form
        className="michlol-form"
        onChange={(e) => e.currentTarget.requestSubmit()}
        onSubmit={(e) =>
          handleFormSubmit(e, reportInstance, michlolId, questionId)
        }
      >
        <QuestionContent
          reportInstance={reportInstance}
          michlolId={michlolId}
          questionId={questionId}
          question={formQuestions[currentQuestion]}
        />
        <div className="form-movements">
          <button
            className="form-movement-btn"
            disabled={currentQuestion === 0}
            type={"button"}
            onClick={() => setCurrentQuestion((prevState) => --prevState)}
          >
            חזור
          </button>
          <button
            className="form-movement-btn"
            type={"button"}
            disabled={currentQuestion + 1 === questions!.length}
            onClick={() => setCurrentQuestion((prevState) => ++prevState)}
          >
            הבא
          </button>
        </div>
      </form>
      <button
        className="michlol-submit-btn"
        onClick={() => {
          reportInstance.michlolCompleted[michlolId] = true;
          localStorage.setItem(
            reportInstance.id,
            JSON.stringify(reportInstance.saveSurvey())
          );
          setIsOpen(false);
        }}
      >
        שמור מיכלול
      </button>
    </>
  );
};

function handleFormSubmit(
  e: React.FormEvent<HTMLFormElement>,
  reportInstance: CreateReport,
  michlolId: string,
  questionId: string
) {
  e.preventDefault();
  const formData = new FormData(e.target as HTMLFormElement);
  const formObj = Object.fromEntries(formData);
  const value = formObj[`${michlolId}-${questionId}`] as string;
  console.log(formObj);
  console.log(value);
  reportInstance.setValue(michlolId, questionId, value);
}
