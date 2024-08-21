import { useState } from "react";
import Card from "./components/Card";
import Form from "./components/Form";

export default function App() {
  const [formData, setFormData] = useState({});

  const handleFormDataChange = (newData) => {
    setFormData(newData);
  };
  return (
    <>
      <div className="container mx-auto min-h-screen flex flex-col justify-center">
        <div className="grid grid-cols-2 items-center gap-16">
          <Card formData={formData} />
          <Form handleFormDataChange={handleFormDataChange} />
        </div>
      </div>
    </>
  );
}
