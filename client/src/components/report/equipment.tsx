import React, { useState } from "react";
import { Route } from "../../classes/route";

export const Equipment: React.FC<{
  routeData: Route;
  name: string;
  questions: string[];
}> = ({ routeData, name, questions }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState(0);
  const isComplete = false;
  const completedClass = `${isComplete ? "complete" : "incomplete"}`;
  const openClass = `${isOpen ? "opened" : "closed"}`;
  // const currentQuestion = questionBank.filter((question) =>
  //   michlol.questions.includes(question.id)
  // )[questionNumber];
  // console.log(currentQuestion);

  // function checkAnswer(question: string) {
  //   if (routeData.michlolim[michlol.id]?.answers?.[question]) return true;
  //   return false;
  // }

  return (
    <div className="michlol">
      <div
        onClick={() => setIsOpen((prevState) => !prevState)}
        className={`bar ${completedClass} ${openClass}`}
      >
        {name}
      </div>
      <div className={`michlol-contents ${completedClass} ${openClass}`}>
        {questions.map((question, i) => (
          <p key={i}>{question}</p>
        ))}
        {/* <QuestionsList
          questions={michlol.questions}
          questionNumber={questionNumber}
          checkAnswer={checkAnswer}
          setQuestionNumber={setQuestionNumber}
        />
        <MichlolForm
          reportInstance={routeData}
          michlolId={michlol.id}
          questions={michlol.questions}
          questionNumber={questionNumber}
          currentQuestion={currentQuestion}
          setIsOpen={setIsOpen}
          setQuestionNumber={setQuestionNumber}
        /> */}
      </div>
    </div>
  );
};
