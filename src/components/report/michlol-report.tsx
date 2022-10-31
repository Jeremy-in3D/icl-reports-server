import React, { useState } from "react";
import { CreateReport } from "../../classes/create-report";
import { Michlol } from "../../data/reports-data";
import { InputRadio } from "./input-radio";
import { InputRange } from "./input-range";
import { InputTextArea } from "./input-textarea";

export const MichlolReport: React.FC<{
  reportInstance: CreateReport;
  michlol: Michlol;
}> = ({ reportInstance, michlol: { id: michlolId, name, questions } }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const {
    id: questionId,
    question,
    type,
    options,
  } = questions[currentQuestion];
  const isComplete = reportInstance.michlolCompleted[michlolId];
  const completedClass = `${isComplete ? "complete" : "incomplete"}`;
  const openClass = `${isOpen ? "opened" : "closed"}`;

  function getQuestionContent() {
    switch (type) {
      case "mc":
        return (
          <InputRadio
            reportInstance={reportInstance}
            michlolId={michlolId}
            questionId={questionId}
            options={options as string[]}
          />
        );
      case "range":
        return (
          <InputRange
            reportInstance={reportInstance}
            michlolId={michlolId}
            questionId={questionId}
            options={options as InputRange}
          />
        );
      case "text":
        return (
          <InputTextArea
            reportInstance={reportInstance}
            michlolId={michlolId}
            questionId={questionId}
          />
        );
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
      <div className={`michlol-contents ${completedClass} ${openClass}`}>
        <h2 className="michlol-subheading">שאלות מיכלול</h2>
        {questions.map((question, idx) => {
          const style = getStyle();
          function getStyle() {
            const isAnswered =
              reportInstance.michlolim[michlolId]?.answers?.[question.id];
            if (idx === currentQuestion) return "current";
            if (isAnswered) return "green";
            return "red";
          }

          return (
            <div
              className={`m-question-marker ${style}`}
              key={idx}
              onClick={() => setCurrentQuestion(idx)}
            >
              {idx + 1}
            </div>
          );
        })}
        <form
          onChange={(e) => {
            e.currentTarget.requestSubmit();
          }}
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target as HTMLFormElement);
            const formObj = Object.fromEntries(formData);
            const value = formObj[`${michlolId}-${questionId}`] as string;
            reportInstance.setValue(michlolId, questionId, value);
          }}
        >
          <p>{`שאלה ${currentQuestion + 1}  מי  ${questions.length}`}</p>
          <p>{question}</p>
          {getQuestionContent()}
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
      </div>
    </div>
  );
};
