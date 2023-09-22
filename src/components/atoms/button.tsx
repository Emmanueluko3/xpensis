import React, { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ children, className, ...rest }) => {
  const defaultClassName =
    "rounded-lg flex items-center justify-center hover:opacity-80 text-white w-full font-bold py-3 px-6 bg-customBlue";
  const finalClassName = className
    ? `${defaultClassName} ${className}`
    : defaultClassName;

  return (
    <button {...rest} className={finalClassName}>
      {children}
    </button>
  );
};

export default Button;
