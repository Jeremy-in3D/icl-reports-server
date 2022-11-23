import React from "react";
import { Route } from "../../classes/route";
import { MachineParts } from "../../data/machine-parts";
import { Checkboxes } from "./inputs/checkboxes";

export const FormInput: React.FC<{
  routeData: Route;
  machinePart: MachineParts[number];
  machineName: string;
}> = ({ routeData, machinePart, machineName }) => {
  let input;

  switch (machinePart.type) {
    case "checkboxes":
      input = (
        <Checkboxes
          routeData={routeData}
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
