import React, { useState } from "react";
import { CreateReport } from "../../classes/create-report";
import { Michlol } from "../../data/reports-data";

export const MichlolReport: React.FC<{
  reportInstance: CreateReport;
  michlol: Michlol;
}> = ({ reportInstance, michlol: { id: michlolId, name, questions } }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { id, question, type, options } = questions[currentQuestion];
  const isComplete = reportInstance.michlolCompleted[michlolId];
  const completedClass = `${isComplete ? "complete" : "incomplete"}`;
  const openClass = `${isOpen ? "opened" : "closed"}`;
  const savedAnswer = reportInstance.michlolim[michlolId]?.answers?.[id];

  function getQuestionContent() {
    switch (type) {
      case "mc":
        return <p>mc</p>;
      case "range":
        return <p>range</p>;
      case "text":
        return <p>text</p>;
    }
  }

  return (
    <div className="michlol">
      <div
        onClick={() => setIsOpen((prevState) => !prevState)}
        className={`bar ${completedClass} ${openClass}`}
      >
        {name}
      </div>
      <div className={`michlol-report ${completedClass} ${openClass}`}>
        <h2 className="michlol-subheading">שאלות מיכלול</h2>
        {questions.map((question, idx) => {
          const style = getStyle();
          function getStyle() {
            if (idx === currentQuestion) return "current";
            if (savedAnswer) return "green";
            return "red";
          }

          return (
            <div
              className={`test ${style}`}
              key={idx}
              onClick={() => setCurrentQuestion(idx)}
            >
              {idx}
            </div>
          );
        })}
        <form
          className="michlol-content-wrapper"
          onChange={(e) => {
            e.currentTarget.requestSubmit();
          }}
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target as HTMLFormElement);
            const formObj = Object.fromEntries(formData);
            const value = formObj[id] as string;
            reportInstance.setValue(michlolId, id, value);
          }}
        >
          <p className="michlol-questions-numbers">
            {`שאלה ${currentQuestion + 1}  מי  ${questions.length}`}
          </p>
          <p className="michlol-questions-question">{question}</p>
          {getQuestionContent()}
          <button
            className="michlol-questions-btn"
            disabled={currentQuestion === 0}
            type={"button"}
            onClick={() => setCurrentQuestion((prevState) => --prevState)}
          >
            חזור
          </button>
          <button
            className="michlol-questions-btn"
            type={"button"}
            disabled={currentQuestion + 1 === questions!.length}
            onClick={() => setCurrentQuestion((prevState) => ++prevState)}
          >
            הבא
          </button>
        </form>

        <button
          className="michlol-complete-btn"
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
      </div>
    </div>
  );
};
