import React, { useState } from "react";
import inputStyles from "./Input.module.scss";

type InputProps = {
  type?: "text" | "textarea";
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  error?: boolean;
  disabled?: boolean;
  validationText?: string;
};

const Input: React.FC<InputProps> = ({
  type = "text",
  value,
  onChange,
  placeholder = "",
  error = false,
  disabled = false,
  validationText = "",
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    if (!disabled) {
      setIsFocused(true);
    }
  };

  const handleBlur = () => {
    if (!disabled) {
      setIsFocused(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onChange(e.target.value.trim());
  };

  return (
    <div className={inputStyles.wrapper}>
      {type === "textarea" ? (
        <textarea
          className={`${inputStyles.input} ${inputStyles.textarea} ${
            isFocused ? inputStyles.focused : ""
          } ${error ? inputStyles.error : ""}`}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          disabled={disabled}
        />
      ) : (
        <input
          className={`${inputStyles.input} ${
            isFocused ? inputStyles.focused : ""
          } ${error ? inputStyles.error : ""}`}
          type="text"
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          disabled={disabled}
        />
      )}
      {validationText && (
        <span className={inputStyles.validationText}>{validationText}</span>
      )}
    </div>
  );
};

export default Input;
