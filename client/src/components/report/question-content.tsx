import React from "react";
import { CreateReport } from "../../classes/create-report";
import { QuestionBank } from "../../data/question-bank";
import { InputRadio } from "./input-radio";
import { InputRange } from "./input-range";
import { InputTextArea } from "./input-textarea";

export const QuestionContent: React.FC<{
  reportInstance: CreateReport;
  michlolId: string;
  questionId: string;
  question: QuestionBank[number];
}> = ({ reportInstance, michlolId, questionId, question }) => {
  switch (question.type) {
    case "mc":
      return (
        <InputRadio
          reportInstance={reportInstance}
          michlolId={michlolId}
          questionId={questionId}
          options={question.options}
        />
      );
    case "range":
      return (
        <InputRange
          reportInstance={reportInstance}
          michlolId={michlolId}
          questionId={questionId}
          options={question.options}
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
