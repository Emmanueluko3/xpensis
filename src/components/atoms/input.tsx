import React, { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({ ...rest }) => {
  return (
    <input
      {...rest}
      className="border w-full border-gray-300 text-customGray1 bg-[#F9F9FB] rounded-lg p-3 focus:outline-none focus:border-customBlue"
    />
  );
};

export default Input;
