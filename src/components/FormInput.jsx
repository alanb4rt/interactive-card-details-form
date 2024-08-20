export default function FormInput(props) {
  const { label, type, name, placeholder } = props;
  return (
    <>
      <div className="flex flex-col gap-1">
        <label htmlFor={name}>{label}</label>
        <input type={type} name={name} id={name} placeholder={placeholder} />
      </div>
    </>
  );
}
