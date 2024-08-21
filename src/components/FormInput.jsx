export default function FormInput(props) {
  const { label, type, name, placeholder, value, onChange } = props;

  return (
    <>
      <div className="flex flex-col gap-1">
        <label htmlFor={name}>{label}</label>
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </>
  );
}
