import React from "react";
import { CreateReport } from "../../classes/create-report";
import { Question } from "../../data/reports-data";
import { QuestionInput } from "./question-content";

export const MichlolForm: React.FC<{
  reportInstance: CreateReport;
  michlolId: string;
  questions: Question[];
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
  const {
    id: questionId,
    question,
    type,
    options,
  } = questions[currentQuestion];

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
        <QuestionInput
          reportInstance={reportInstance}
          michlolId={michlolId}
          questionId={questionId}
          type={type}
          options={options}
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
