import IconComplete from "../assets/images/icon-complete.svg";

export default function PostSubmissionConfirmation(props) {
  const { toggleFormCompletion } = props;

  return (
    <>
      <div className="w-full flex flex-col items-center gap-4">
        <img className="size-20 mb-6" src={IconComplete} alt="" />
        <h2 className="text-2xl font-bold uppercase tracking-widest">
          Thank you!
        </h2>
        <p className="text-[var(--dark-grayish-violet)]">
          We've added your card details
        </p>
        <button className="mt-6" onClick={toggleFormCompletion}>
          Continue
        </button>
      </div>
    </>
  );
}
