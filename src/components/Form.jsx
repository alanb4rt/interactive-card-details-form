import FormInput from "./FormInput";
export default function Form() {
  return (
    <>
      <form>
        <FormInput
          label="Cardholder Name"
          type="text"
          name="name"
          placeholder="e.g. Jane Appleseed"
        />
        <FormInput
          label="Card Number"
          type="number"
          name="number"
          placeholder="e.g. 1234 5678 9123 0000"
        />
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="date">Exp. Date</label>
            <div className="grid grid-cols-2 gap-2">
              <input type="number" name="date" id="month" placeholder="MM" />
              <input type="number" name="date" id="year" placeholder="YY" />
            </div>
          </div>
          <FormInput
            label="CVC"
            type="number"
            name="cvc"
            placeholder="e.g. 123"
          />
        </div>
        <button>Confirm</button>
      </form>
    </>
  );
}
