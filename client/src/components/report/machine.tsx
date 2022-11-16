import React, { useState } from "react";
import { Route } from "../../classes/route";
import { questionBank } from "../../data/question-bank";
import { MachineForm } from "./machine-area-form";
import { MachineAreas } from "./machine-areas";

//Refactor to pull equipment check from database instead of static

export const Machine: React.FC<{
  routeData: Route;
  name: string;
  questions: string[];
}> = ({ routeData, name, questions }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState(0);
  const isComplete = false;
  const completedClass = `${isComplete ? "complete" : "incomplete"}`;
  const openClass = `${isOpen ? "opened" : "closed"}`;
  const currentQuestion = questionBank.find(
    (option) => option.id === questions[view]
  )!;
  console.log(currentQuestion);

  return (
    <div className="machine">
      <div
        onClick={() => setIsOpen((prevState) => !prevState)}
        className={`bar ${completedClass} ${openClass}`}
      >
        {name}
      </div>
      <div className={`michlol-contents ${completedClass} ${openClass}`}>
        <MachineAreas questions={questions} setView={setView} />
        <MachineForm
          routeData={routeData}
          setIsOpen={setIsOpen}
          area={currentQuestion}
        />
      </div>
    </div>
  );
};
