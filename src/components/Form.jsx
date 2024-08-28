import { useState } from "react";
import FormInput from "./FormInput";
import useStoredFormData from "../hooks/useSavedFormData";

export default function Form(props) {
  const { handleFormDataChange, toggleFormCompletion } = props;

  const initialInputValue = {
    fullName: "",
    number: "",
    expMonth: "",
    expYear: "",
    cvc: "",
  };

  const [inputValues, setInputValues] = useState({ ...initialInputValue });
  const [errorInputs, setErrorInputs] = useState({});

  useStoredFormData((parsedFormData) => {
    setInputValues(parsedFormData);
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newInputValues = { ...inputValues, [name]: value };
    setInputValues(newInputValues);
    handleFormDataChange(newInputValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationRules = {
      fullName: {
        regex: /^[a-zA-Zà-öø-ÿ\s]+$/,
        errorMessage: "Wrong format, letters only",
      },
      number: {
        regex: /^[0-9]{16}$/,
        errorMessage: "Wrong format, numbers only",
      },
      expMonth: {
        regex: /^(1[0-2]|[1-9])$/,
        errorMessage: "Wrong format, numbers only",
      },
      expYear: {
        regex: /^([1-9]|[1-9][0-9])$/,
        errorMessage: "Wrong format, numbers only",
      },
      cvc: {
        regex: /^[0-9]{3}$/,
        errorMessage: "Wrong format, numbers only",
      },
    };

    const newErrorInputs = {};

    Object.keys(inputValues).forEach((key) => {
      const value = inputValues[key];
      const { regex, errorMessage } = validationRules[key];

      if (value === "") {
        newErrorInputs[key] = "Can't be blank";
      } else if (!regex.test(value)) {
        newErrorInputs[key] = errorMessage;
      } else {
        newErrorInputs[key] = "";
      }
    });

    setErrorInputs(newErrorInputs);

    if (Object.values(newErrorInputs).every((error) => error === "")) {
      localStorage.setItem("formData", JSON.stringify(inputValues));
      toggleFormCompletion();
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} noValidate>
        <FormInput
          label="Cardholder Name"
          type="text"
          name="fullName"
          placeholder="e.g. Jane Appleseed"
          value={inputValues.fullName}
          onChange={handleInputChange}
          error={errorInputs.fullName}
        />
        <FormInput
          label="Card Number"
          type="number"
          name="number"
          placeholder="e.g. 1234 5678 9123 0000"
          value={inputValues.number}
          onChange={handleInputChange}
          error={errorInputs.number}
        />
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label>Exp. Date</label>
            <div className="grid grid-cols-2 gap-2">
              <input
                className={errorInputs.expMonth ? "error-input" : ""}
                type="number"
                name="expMonth"
                id="expMonth"
                placeholder="MM"
                value={inputValues.expMonth}
                onChange={handleInputChange}
                required
              />
              <input
                className={errorInputs.expYear ? "error-input" : ""}
                type="number"
                name="expYear"
                id="expYear"
                placeholder="YY"
                value={inputValues.expYear}
                onChange={handleInputChange}
                required
              />
            </div>
            {(errorInputs.expMonth || errorInputs.expYear) && (
              <span className="error-message">
                {errorInputs.expMonth || errorInputs.expYear}
              </span>
            )}
          </div>
          <FormInput
            label="CVC"
            type="number"
            name="cvc"
            placeholder="e.g. 123"
            value={inputValues.cvc}
            onChange={handleInputChange}
            error={errorInputs.cvc}
          />
        </div>
        <button>Confirm</button>
      </form>
    </>
  );
}
