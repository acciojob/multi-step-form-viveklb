import React from "react";

const stepFields = {
  1: [
    { id: "first-name", name: "firstName", label: "First name" },
    { id: "last-name", name: "lastName", label: "Last name" },
  ],
  2: [
    { id: "vehicle-make", name: "make", label: "Make" },
    { id: "vehicle-model", name: "model", label: "Model" },
  ],
  3: [
    { id: "contact-email", name: "email", label: "Email", type: "email" },
    { id: "contact-phone", name: "phone", label: "Phone", type: "tel" },
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