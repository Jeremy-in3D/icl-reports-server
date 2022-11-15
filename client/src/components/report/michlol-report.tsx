import React, { useState } from "react";
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
  const { id: michlolId, name, questions } = michlol;
  const isComplete = reportInstance.michlolCompleted[michlolId];
  const completedClass = `${isComplete ? "complete" : "incomplete"}`;
  const openClass = `${isOpen ? "opened" : "closed"}`;
  const formQuestions = questionBank.filter((question) =>
    questions.includes(question.id)
  );
  const currentQuestion = formQuestions[questionNumber];

  function checkAnswer(question: string) {
    if (reportInstance.michlolim[michlolId]?.answers?.[question]) return true;
    return false;
  }

  return (
    <div className="michlol">
      <div
        onClick={() => setIsOpen((prevState) => !prevState)}
        className={`bar ${completedClass} ${openClass}`}
      >
        {name}
      </div>
      <div className={`michlol-contents ${completedClass} ${openClass}`}>
        <QuestionsList
          questions={questions}
          questionNumber={questionNumber}
          checkAnswer={checkAnswer}
          setQuestionNumber={setQuestionNumber}
        />
        <MichlolForm
          reportInstance={reportInstance}
          michlolId={michlolId}
          questions={questions}
          questionNumber={questionNumber}
          currentQuestion={currentQuestion}
          setIsOpen={setIsOpen}
          setQuestionNumber={setQuestionNumber}
        />
      </div>
    </div>
  );
};
