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
      <div className="container mx-auto px-4 py-8 min-h-screen flex flex-col justify-center md:px-12">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          <Card formData={formData} />
          <section className="w-full h-full flex flex-col justify-center items-center">
            <div className="w-full p-2 md:p-0 md:max-w-sm">
              {!isFormCompleted ? (
                <Form
                  handleFormDataChange={handleFormDataChange}
                  toggleFormCompletion={toggleFormCompletion}
                />
              ) : (
                <PostSubmissionConfirmation
                  toggleFormCompletion={toggleFormCompletion}
                />
              )}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
