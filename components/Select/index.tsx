import React, { useState, useEffect, FocusEvent } from "react";
import styles from "./Dropdown.module.scss";
import type { DropdownProps } from "../../types";

const Dropdown: React.FC<DropdownProps> = ({
  options,
  value = "",
  placeholder = "Select an option",
  onChange,
  error = false,
  disabled = false,
  validationText,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);

  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  const handleToggle = () => {
    if (!disabled) setIsOpen(!isOpen);
  };

  const handleSelect = (value: string) => {
    if (!disabled) {
      setSelectedValue(value);
      onChange?.(value);
      setIsOpen(false);
    }
  };

  const handleBlur = (e: FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsOpen(false);
    }
  };

  return (
    <div
      className={`${styles.dropdown} ${error ? styles.error : ""} ${
        disabled ? styles.disabled : ""
      } ${isOpen ? "active" : ""}`}
      onBlur={handleBlur}
      tabIndex={0}
    >
      <div className={styles.dropdownField} onClick={handleToggle}>
        <span
          className={`${styles.placeholder} ${
            selectedValue || isOpen ? styles.shrink : ""
          }`}
        >
          {placeholder}
        </span>
        {selectedValue && (
          <span className={styles.selectedValue}>{selectedValue}</span>
        )}
        <img
          src="/icons/chevron-down.svg"
          alt="dropdown"
          className={styles.arrowIcon}
        />
      </div>
      {isOpen && (
        <div className={styles.dropdownMenu}>
          {options.map((option) => (
            <div
              key={option.value}
              className={`${styles.dropdownOption} ${
                selectedValue === option.value ? styles.selected : ""
              }`}
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
      {validationText && (
        <div
          className={`${styles.validationText} ${
            error ? styles.errorText : ""
          }`}
        >
          {validationText}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
