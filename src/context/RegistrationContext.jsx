import React, { createContext, useContext, useState } from "react";

const RegistrationContext = createContext(null);

const initialFormData = {
  name: "",
  email: "",
  level: "",
  course: "",
  lecturer: "",
  gp: ""
};

export function RegistrationProvider({ children }) {
  const [formData, setFormData] = useState(initialFormData);

  const updateForm = (values) => {
    setFormData((previous) => ({...previous, ...values}));
  };

  const resetForm = () => {
    setFormData(initialFormData);
  };

  return (
    <RegistrationContext.Provider value={{ formData, updateForm, resetForm }}>
      {children}
    </RegistrationContext.Provider>
  );
}



export function useRegistration() {
  const context = useContext(RegistrationContext);

  if (!context) {
    throw new Error("useRegistration must be used within RegistrationProvider");
  }

  return context;
}
