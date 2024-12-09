import React, { useState } from "react";
import "./VerificationForm.css";
import MultiStepForm from "../MultiStepForm/MultiStepForm";
import logo from "../../Assets/logo-87.png"

const VerificationForm = ({ onVerify }) => {
  const [code, setCode] = useState(new Array(6).fill(""));

  const handleInputChange = (value, index) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
  };

  const handleVerifyClick = () => {
    onVerify(MultiStepForm); // Call the function passed as a prop to switch to the MultiStepForm
  };

  return (
  <div>
  <img alt="logo" src={logo} className="verification-logo" />
    <div className="verification-form">
      <h2>Verify Your Email</h2>
      <p>Please enter the 6-digit code we sent to your email.</p>
      <div className="code-inputs">
        {code.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            className="code-input"
            value={digit}
            onChange={(e) => handleInputChange(e.target.value, index)}
          />
        ))}
      </div>
      <button className="verify-button" onClick={handleVerifyClick}>
        Verify
      </button>
      <p className="resend-timer">
        Wait 1:39 seconds before requesting a new code.
      </p>
    </div>
    </div>
  );
};

export default VerificationForm;
