import React, { useState } from "react";
import { Route } from "../../classes/route";
import { QuestionBank } from "../../data/question-bank";
import { CheckboxInput } from "./checkbox-input";

export const MachineForm: React.FC<{
  routeData: Route;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  area: QuestionBank[number];
}> = ({ routeData, setIsOpen, area }) => {
  const [isFirstChecked, setIsFirstChecked] = useState(false);

  function ifFirstChecked(idx: number) {
    if (idx !== 0 && isFirstChecked) return true;
    return false;
  }
  return (
    <>
      <p className="machine-question">{area.name}</p>
      <form
        className="machine-form"
        onChange={(e) => e.currentTarget.requestSubmit()}
        onSubmit={
          (e) => e.preventDefault()
          // handleFormSubmit(e, reportInstance, michlolId, questionId)
        }
      >
        {area.questions.map((option, idx) => (
          <CheckboxInput
            key={`${area.id}-${area.name}-${idx}`}
            option={option}
            area={area}
            idx={idx}
            check={() => ifFirstChecked(idx)}
            setFirstChecked={setIsFirstChecked}
          />
        ))}
      </form>
      <button
        className="machine-submit-btn"
        onClick={() => {
          // reportInstance.michlolCompleted[michlolId] = true;
          // localStorage.setItem(reportInstance.id, reportInstance.saveSurvey());
          // setIsOpen(false);
        }}
      >
        שמור מכונה
      </button>
    </>
  );
};

// function handleFormSubmit(
//   e: React.FormEvent<HTMLFormElement>,
//   reportInstance: CreateReport,
//   michlolId: string,
//   questionId: string
// ) {
//   e.preventDefault();
//   const formData = new FormData(e.target as HTMLFormElement);
//   const formObj = Object.fromEntries(formData);
//   const value = formObj[`${michlolId}-${questionId}`] as string;
//   reportInstance.setValue(michlolId, questionId, value);
// }
