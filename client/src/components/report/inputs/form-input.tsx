import React from "react";
import { Route } from "../../../classes/route";
import { MachineParts } from "../../../data/machine-parts";
import { Checkboxes } from "./checkboxes";

export const FormInput: React.FC<{
  formRef: React.RefObject<HTMLFormElement>;
  reportInstance: Route;
  machinePart: MachineParts[number];
  machineName: string;
}> = ({ reportInstance, machinePart, machineName, formRef }) => {
  let input;

  switch (machinePart.type) {
    case "checkboxes":
      input = (
        <Checkboxes
          formRef={formRef}
          reportInstance={reportInstance}
          machinePart={machinePart}
          machineName={machineName}
        />
      );
      break;
    default:
      input = "No Input Entered";
  }
  return <div>{input}</div>;
};
