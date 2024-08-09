import React from "react";
import cn from "../../utils/cn";
import Spinner from "../Spinner";
import buttonStyles from "./Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  type = "submit",
  loading = false,
  disabled = false,
  onClick,
  children,
  ...props
}) => {
  const classNames = cn(buttonStyles.button, buttonStyles[variant], {
    [buttonStyles.loading]: loading,
    [buttonStyles.disabled]: disabled,
  });

  return (
    <button
      className={classNames}
      onClick={onClick}
      disabled={disabled || loading}
      type={type}
      {...props}
    >
      {loading && <Spinner />}
      {children}
    </button>
  );
};

export default Button;
