export const ReportMovementButton: React.FC<{
  text: string;
  disabled: boolean;
  onClick: () => void;
}> = ({ text, disabled, onClick }) => {
  return (
    <button
      className="form-movement-btn"
      disabled={disabled}
      type={"button"}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
