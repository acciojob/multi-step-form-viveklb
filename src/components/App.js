
import React, { useState } from "react";
import './../styles/App.css';
import Step from "./Step";

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    model: "",
    carPrice: "",
    cardInfo: "",
    expiryDate: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previousData) => ({ ...previousData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (currentStep < 3) {
      setCurrentStep((step) => step + 1);
      return;
    }
    setIsSubmitted(true);
  };

  return (
    <div>
        {/* Do not remove the main div */}
      {isSubmitted ? (
        <p role="status">Thank you, {formData.firstName}. Your application has been submitted.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Step
            currentStep={currentStep}
            formData={formData}
            onChange={handleChange}
            onPrevious={() => setCurrentStep((step) => step - 1)}
          />
        </form>
      )}
    </div>
  )
}

export default App
