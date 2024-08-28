import { useEffect } from "react";

const useStoredFormData = (setFormData) => {
  useEffect(() => {
    const storedFormData = localStorage.getItem("formData");
    if (storedFormData) {
      const parsedFormData = JSON.parse(storedFormData);
      setFormData(parsedFormData);
    }
  }, []);
};

export default useStoredFormData;
