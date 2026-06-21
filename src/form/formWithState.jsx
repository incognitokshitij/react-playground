import React from "react";

function formWithState(props) {
  const { formData, onFormChange, submitForm } = props;

  return (
    <div>
      <div>
        <p>{"Email"}</p>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => {
            onFormChange("email", e.target.value);
          }}
        ></input>
      </div>
      <div>
        <p>{"Passsword"}</p>
        <input
          value={formData.password}
          onChange={(e) => {
            onFormChange("password", e.target.value);
          }}
        ></input>
      </div>
      <div>
        <p>{"ConfirmPassword"}</p>
        <input
          value={formData.confirmPassword}
          onChange={(e) => {
            onFormChange("confirmPassword", e.target.value);
          }}
        ></input>
      </div>
      <button onClick={submitForm}>Submit</button>
    </div>
  );
}

export default formWithState;
