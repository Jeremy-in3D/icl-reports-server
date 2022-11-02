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
      <form
        onChange={(e) => e.currentTarget.requestSubmit()}
        onSubmit={(e) =>
          handleFormSubmit(e, reportInstance, michlolId, questionId)
        }
      >
        <p>{`שאלה ${currentQuestion + 1}  מי  ${questions.length}`}</p>
        <p>{question}</p>
        <QuestionInput
          reportInstance={reportInstance}
          michlolId={michlolId}
          questionId={questionId}
          type={type}
          options={options}
        />
        <button
          disabled={currentQuestion === 0}
          type={"button"}
          onClick={() => setCurrentQuestion((prevState) => --prevState)}
        >
          חזור
        </button>
        <button
          type={"button"}
          disabled={currentQuestion + 1 === questions!.length}
          onClick={() => setCurrentQuestion((prevState) => ++prevState)}
        >
          הבא
        </button>
      </form>
      <button
        onClick={() => {
          reportInstance.michlolCompleted[michlolId] = true;
          localStorage.setItem(
            reportInstance.id,
            JSON.stringify(reportInstance.saveSurvey())
          );
          setIsOpen(false);
        }}
      >
        סיים מיכלול
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
  reportInstance.setValue(michlolId, questionId, value);
}
