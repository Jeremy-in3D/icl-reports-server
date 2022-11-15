import React from "react";
import { CreateReport } from "../../classes/create-report";
import { QuestionBank } from "../../data/question-bank";
import { FormNavigation } from "./form-navigation";
import { InputContent } from "./input-content";
import { ReportMovementButton } from "./report-movement-btn";

export const MichlolForm: React.FC<{
  reportInstance: CreateReport;
  michlolId: string;
  questions: string[];
  currentQuestion: QuestionBank[number];
  questionNumber: number;
  setQuestionNumber: React.Dispatch<React.SetStateAction<number>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({
  reportInstance,
  michlolId,
  questions,
  currentQuestion,
  questionNumber,
  setQuestionNumber,
  setIsOpen,
}) => {
  const { id: questionId, question } = currentQuestion;
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
        <InputContent
          reportInstance={reportInstance}
          michlolId={michlolId}
          questionId={questionId}
          question={currentQuestion}
        />
        <FormNavigation
          questionNumber={questionNumber}
          questions={questions}
          setQuestionNumber={setQuestionNumber}
        />
      </form>
      <button
        className="michlol-submit-btn"
        onClick={() => {
          reportInstance.michlolCompleted[michlolId] = true;
          localStorage.setItem(reportInstance.id, reportInstance.saveSurvey());
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
  reportInstance.setValue(michlolId, questionId, value);
}
