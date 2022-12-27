import React, { useState } from "react";
import { Route } from "../../../classes/route";
import { questionBank } from "../../../data/question-bank";
import { SurveyMachineForm } from "./survey-machine-form";
import { SurveyMachinePartsList } from "./survey-machine-parts-list";
import { MachineDetails, MachineFilter } from "../route-view";

function getMachineStyle(machineState: MachineFilter) {
  if (machineState === "הושלם") return "completed";
  if (machineState === "חלקי") return "partial";
  if (machineState === "לא הושלם") return "incomplete";
}

export const SurveyMachine: React.FC<{
  reportInstance: Route;
  machine: MachineDetails;
}> = ({
  reportInstance,
  machine: { machineName, michlolId, michlolName, parts, equipmentUnit },
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState(0);
  const [machineComplete, setMachineComplete] = useState(
    reportInstance.getMachineComplete(machineName)
  );
  const [partsComplete, setPartsComplete] = useState<boolean[] | undefined>();
  const openStyle = `${isOpen ? "opened" : "closed"}`;
  //Get parts from question bank online
  const machineQuestions = parts.map(
    (partId) => questionBank.find((question) => question.questionId === partId)!
  );
  const currentQuestion = machineQuestions[view];
  const reportDetails: ReportDetails = {
    michlolName: michlolName,
    michlolId: michlolId,
    machineName,
    equipmentUnit,
    partName: currentQuestion.partName,
  };

  return (
    <div className="machine">
      <div
        onClick={() => setIsOpen((prevState) => !prevState)}
        className={`bar ${getMachineStyle(machineComplete)} ${openStyle}`}
      >
        {machineName}
      </div>
      <div className={`michlol-contents ${machineComplete} ${openStyle}`}>
        {isOpen && (
          <>
            <SurveyMachinePartsList
              view={view}
              setView={setView}
              questions={machineQuestions}
              partsComplete={partsComplete}
            />
            <SurveyMachineForm
              reportInstance={reportInstance}
              key={`${machineName}-${currentQuestion.questionId}`}
              currentQuestion={currentQuestion}
              machineQuestions={machineQuestions}
              reportDetails={reportDetails}
              setMachineComplete={setMachineComplete}
              setPartsComplete={setPartsComplete}
            />
            <button
              className="submit-data-btn"
              onClick={async () => {
                const answer = confirm("אתה רוצה לסיים את הדוח ולשלוח לשרת?");
                if (answer) {
                  const machineResponse = await fetch("/save-machine", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: reportInstance.sendMachineData(machineName),
                  });
                  if (machineResponse.status === 200) {
                    reportInstance.setMachineComplete(machineName);
                    setMachineComplete(
                      reportInstance.getMachineComplete(machineName)
                    );
                  }
                  setIsOpen(false);
                }
              }}
            >
              שלח
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export type ReportDetails = {
  michlolName: string;
  michlolId: string;
  machineName: string;
  equipmentUnit: string;
  partName: string;
};