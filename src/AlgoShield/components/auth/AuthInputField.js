import { useState } from "react";
import Image from "next/image";

const AuthInputField = ({
  authInputType,
  placeholder,
  onChange,
  regexCheck = /^.+$/,
  message = "Invalid Input",
}) => {
  const [errorMessage, setErrorMessage] = useState("");
  return (
    <div className="auth-input-field-container">
      <input
        className="auth-input-field"
        type={authInputType}
        placeholder={placeholder}
        onChange={(e) => {
          const value = e.target.value;
          if (regexCheck && !regexCheck.test(value)) {
            setErrorMessage(message);
          } else {
            setErrorMessage("");
          }
          onChange(value);
        }}
      />
      <div className="auth-input-field-error">{errorMessage}</div>
    </div>
  );
};

export default AuthInputField;
