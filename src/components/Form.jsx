import { useState } from "react";
import FormInput from "./FormInput";
import useStoredFormData from "../hooks/useSavedFormData";
import { getFormatCardNumber } from "../utils/getFormatCardNumber";

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
      let value = inputValues[key];

      if (key !== "fullName") {
        value = Number(value.split(" ").join(""));
      }

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
          type="text"
          inputMode="numeric"
          name="number"
          placeholder="e.g. 1234 5678 9123 0000"
          value={getFormatCardNumber(inputValues.number)}
          onChange={handleInputChange}
          error={errorInputs.number}
        />
        <div className="grid grid-cols-2 gap-4">
          <fieldset className="flex flex-col gap-1">
            <legend className="mb-1">Exp. Date</legend>
            <div className="grid grid-cols-2 gap-2">
              <div className="w-full">
                <label className="sr-only" htmlFor="expMonth">
                  ExpMonth
                </label>
                <input
                  className={`w-full ${
                    errorInputs.expMonth ? "error-input" : ""
                  }`}
                  type="number"
                  name="expMonth"
                  id="expMonth"
                  placeholder="MM"
                  value={inputValues.expMonth}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="w-full">
                <label className="sr-only" htmlFor="expYear">
                  ExpYear
                </label>
                <input
                  className={`w-full ${
                    errorInputs.expYear ? "error-input" : ""
                  }`}
                  type="number"
                  name="expYear"
                  id="expYear"
                  placeholder="YY"
                  value={inputValues.expYear}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            {(errorInputs.expMonth || errorInputs.expYear) && (
              <span className="error-message">
                {errorInputs.expMonth || errorInputs.expYear}
              </span>
            )}
          </fieldset>
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
