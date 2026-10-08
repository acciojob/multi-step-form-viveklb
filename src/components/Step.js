import React from "react";

const stepFields = {
  1: [
    { id: "first_name", name: "firstName", label: "First name" },
    { id: "last_name", name: "lastName", label: "Last name" },
  ],
  2: [
    { id: "model", name: "model", label: "Model" },
    { id: "car_price", name: "carPrice", label: "Car price", type: "number" },
  ],
  3: [
    { id: "card_info", name: "cardInfo", label: "Card information" },
    { id: "expiry_date", name: "expiryDate", label: "Expiry date", type: "month" },
  ],
};

const Step = ({ currentStep, formData, onChange, onPrevious }) => (
  <section>
    <h2>Step {currentStep} of 3</h2>
    {stepFields[currentStep].map((field) => (
      <div key={field.id}>
        <label htmlFor={field.id}>{field.label}</label>
        <input
          id={field.id}
          name={field.name}
          type={field.type || "text"}
          value={formData[field.name]}
          onChange={onChange}
          required
        />
      </div>
    ))}
    {currentStep > 1 && (
      <button type="button" onClick={onPrevious}>Previous</button>
    )}
    <button type="submit">
      {currentStep === 3 ? "Submit" : "Next"}
    </button>
  </section>
);

export default Step;