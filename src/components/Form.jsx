import { useState } from "react";
import FormInput from "./FormInput";

export default function Form(props) {
  const { handleFormDataChange } = props;

  const initialInputValue = {
    fullName: "",
    number: "",
    expMonth: "",
    expYear: "",
    cvc: "",
  };

  const [inputValues, setInputValues] = useState({ ...initialInputValue });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newInputValues = { ...inputValues, [name]: value };
    setInputValues(newInputValues);
    handleFormDataChange(newInputValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Cardholder Name"
          type="text"
          name="fullName"
          placeholder="e.g. Jane Appleseed"
          value={inputValues.fullName}
          onChange={handleInputChange}
        />
        <FormInput
          label="Card Number"
          type="number"
          name="number"
          placeholder="e.g. 1234 5678 9123 0000"
          value={inputValues.number}
          onChange={handleInputChange}
        />
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label>Exp. Date</label>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="number"
                name="expMonth"
                id="expMonth"
                placeholder="MM"
                value={inputValues.expMonth}
                onChange={handleInputChange}
              />
              <input
                type="number"
                name="expYear"
                id="expYear"
                placeholder="YY"
                value={inputValues.expYear}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <FormInput
            label="CVC"
            type="number"
            name="cvc"
            placeholder="e.g. 123"
            value={inputValues.cvc}
            onChange={handleInputChange}
          />
        </div>
        <button>Confirm</button>
      </form>
    </>
  );
}
