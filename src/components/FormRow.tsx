export interface FormRowProps {
  type: string;
  name: string;
  value: string;
  labelText?: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormRow = ({
  type,
  name,
  value,
  labelText,
  handleChange,
}: FormRowProps) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {name}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        className="form-input"
      />
    </div>
  );
};
export default FormRow;
