import React, { useState } from "react";
import FormWithState from "./formWithState";

function index() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleFormChange(key, value) {
    setFormData((prev) => {
      return { ...prev, [key]: value };
    });
  }

  function submitForm() {
    console.log(formData);
    setFormData({ email: "", password: "", confirmPassword: "" });
  }

  return (
    <FormWithState
      formData={formData}
      onFormChange={handleFormChange}
      submitForm={submitForm}
    />
  );
}

export default index;
