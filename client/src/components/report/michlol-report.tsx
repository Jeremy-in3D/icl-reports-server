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

  return (
    <div className="michlol">
      <div
        onClick={() => setIsOpen((prevState) => !prevState)}
        className={`bar ${completedClass} ${openClass}`}
      >
        {name}
      </div>
      <div className={`michlol-contents ${completedClass} ${openClass}`}>
        <div className="michlol-questions-array">
          <QuestionsList
            reportInstance={reportInstance}
            michlolId={michlolId}
            questions={questions}
            questionNumber={questionNumber}
            setQuestionNumber={setQuestionNumber}
          />
        </div>
        <MichlolForm
          reportInstance={reportInstance}
          michlolId={michlolId}
          questions={questions}
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber}
          setIsOpen={setIsOpen}
          currentQuestion={currentQuestion}
        />
      </div>
    </div>
  );
};
