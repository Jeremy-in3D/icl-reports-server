import React from "react";
import { CreateReport } from "../../classes/create-report";
import { OptionsTypes, QuestionTypes } from "../../data/reports-data";
import { InputRadio } from "./input-radio";
import { InputRange } from "./input-range";
import { InputTextArea } from "./input-textarea";

export const QuestionInput: React.FC<{
  reportInstance: CreateReport;
  michlolId: string;
  questionId: string;
  type: QuestionTypes;
  options: OptionsTypes;
}> = ({ reportInstance, michlolId, questionId, type, options }) => {
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
};
