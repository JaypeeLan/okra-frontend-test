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
  validate?: () => void;
};

const Input: React.FC<InputProps> = ({
  type = "text",
  value,
  onChange,
  placeholder = "",
  error = false,
  disabled = false,
  validationText = "",
  validate,
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
      onChange(value.trim());
      if (validate) {
        validate();
      }
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onChange(e.target.value);
  };

  return (
    <div
      className={`${inputStyles.wrapper} ${error ? inputStyles.hasError : ""}`}
    >
      {type === "textarea" ? (
        <div className={inputStyles.textareaWrapper}>
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
          <img
            src="/icons/resize.svg"
            alt="Resize icon"
            className={inputStyles.resizeIcon}
          />
        </div>
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
