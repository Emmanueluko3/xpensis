import React from "react";

interface SwitchProps {
  checked: boolean;
  onChange: any;
}

const Switch: React.FC<SwitchProps> = ({ checked, onChange }) => {
  const handleClick = () => {
    onChange(!checked);
  };
  return (
    <div onClick={handleClick} className="flex items-center cursor-pointer">
      <div className="relative flex justify-center items-center w-10 h-6">
        <input
          type="checkbox"
          id="tailwind-switch"
          className="hidden"
          checked={checked}
          onChange={onChange}
        />
        <div
          className={`w-full h-full ${
            checked ? " bg-customBlue" : "bg-[#292D32]"
          } rounded-full shadow-inner`}
        ></div>
        <div
          className={`absolute left-0 w-5 h-5 bg-white rounded-full transition-transform duration-300 transform ${
            checked ? "translate-x-full" : "translate-x-0"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default Switch;
