import React, { useCallback, useState } from "react";
import { CreateReport } from "../../classes/create-report";
import { Michlol } from "../../data/reports-data";
import { MichlolForm } from "./michlol-form";
import { QuestionsList } from "./questions-list";
import { questionBank } from "../../data/question-bank";

export const MichlolReport: React.FC<{
  reportInstance: CreateReport;
  michlol: Michlol;
}> = ({ reportInstance, michlol }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(0);
  const isComplete = reportInstance.michlolCompleted[michlol.id];
  const completedClass = `${isComplete ? "complete" : "incomplete"}`;
  const openClass = `${isOpen ? "opened" : "closed"}`;
  const currentQuestion = questionBank.filter((question) =>
    michlol.questions.includes(question.id)
  )[questionNumber];
  console.log(currentQuestion);

  function checkAnswer(question: string) {
    if (reportInstance.michlolim[michlol.id]?.answers?.[question]) return true;
    return false;
  }

  return (
    <div className="michlol">
      <div
        onClick={() => setIsOpen((prevState) => !prevState)}
        className={`bar ${completedClass} ${openClass}`}
      >
        {michlol.name}
      </div>
      <div className={`michlol-contents ${completedClass} ${openClass}`}>
        <QuestionsList
          questions={michlol.questions}
          questionNumber={questionNumber}
          checkAnswer={checkAnswer}
          setQuestionNumber={setQuestionNumber}
        />
        <MichlolForm
          reportInstance={reportInstance}
          michlolId={michlol.id}
          questions={michlol.questions}
          questionNumber={questionNumber}
          currentQuestion={currentQuestion}
          setIsOpen={setIsOpen}
          setQuestionNumber={setQuestionNumber}
        />
      </div>
    </div>
  );
};
