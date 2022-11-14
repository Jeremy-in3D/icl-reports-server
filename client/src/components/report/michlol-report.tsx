import React, { useState } from "react";
import { CreateReport } from "../../classes/create-report";
import { Michlol } from "../../data/reports-data";
import { MichlolForm } from "./michlol-form";
import { QuestionsList } from "./questions-list";

export const MichlolReport: React.FC<{
  reportInstance: CreateReport;
  michlol: Michlol;
}> = ({ reportInstance, michlol: { id: michlolId, name, questions } }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const isComplete = reportInstance.michlolCompleted[michlolId];
  const completedClass = `${isComplete ? "complete" : "incomplete"}`;
  const openClass = `${isOpen ? "opened" : "closed"}`;

  console.log(questions);
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
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
          />
        </div>
        <MichlolForm
          reportInstance={reportInstance}
          michlolId={michlolId}
          questions={questions}
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
          setIsOpen={setIsOpen}
        />
      </div>
    </div>
  );
};
