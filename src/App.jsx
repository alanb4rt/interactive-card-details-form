import { useState } from "react";
import Card from "./components/Card";
import Form from "./components/Form";
import PostSubmissionConfirmation from "./components/PostSubmissionConfirmation";

export default function App() {
  const [formData, setFormData] = useState({});
  const [isFormCompleted, setIsFormCompleted] = useState(false);

  const handleFormDataChange = (newData) => {
    setFormData(newData);
  };

  const toggleFormCompletion = () => {
    setIsFormCompleted(!isFormCompleted);
  };

  return (
    <>
      <div className="container mx-auto min-h-screen flex flex-col justify-center">
        <div className="grid grid-cols-2 items-center gap-16">
          <Card formData={formData} />
          <section className="w-full h-full flex flex-col justify-center items-center">
            <div className="w-full max-w-xs">
              {!isFormCompleted ? (
                <Form handleFormDataChange={handleFormDataChange} />
              ) : (
                <PostSubmissionConfirmation />
              )}
              <button onClick={toggleFormCompletion}>
                toggle (remove later)
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
