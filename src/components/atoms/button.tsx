import React, { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className="rounded-lg flex items-center justify-center hover:opacity-80 text-white w-full font-bold py-2 px-6 bg-customBlue"
    >
      {children}
    </button>
  );
};

export default Button;
