import { ReportMovementButton } from "./report-movement-btn";

export const FormNavigation: React.FC<{
  questionNumber: number;
  questions: string[];
  setQuestionNumber: React.Dispatch<React.SetStateAction<number>>;
}> = ({ questionNumber, questions, setQuestionNumber }) => {
  return (
    <div className="form-movements">
      <ReportMovementButton
        text={"חזור"}
        disabled={questionNumber === 0}
        onClick={() => setQuestionNumber((prevState) => --prevState)}
      />
      <ReportMovementButton
        text={"הבא"}
        disabled={questionNumber + 1 === questions!.length}
        onClick={() => setQuestionNumber((prevState) => ++prevState)}
      />
    </div>
  );
};
