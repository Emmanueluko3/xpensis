"use client";
import React, { useState } from "react";

const Bill: React.FC = () => {
  const [tab, setTab] = useState(0);
  const tabs = ["Recurring Bills", "Non-recurring Bills"];

  return (
    <div className="rounded-lg bg-[#fff] w-full p-5">
      <div className="flex justify-between items-center">
        <div className="flex items-center justify-between lg:w-auto w-full">
          {tabs.map((item, index) => (
            <button
              key={index}
              onClick={() => setTab(index)}
              className={`w-1/2 border-b-2 p-3 lg:pr-10 lg:pl-5 font-medium lg:text-base text-sm whitespace-nowrap ${
                tab === index
                  ? "text-customBlue border-customBlue"
                  : "text-customGray border-gray-300"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        <button className="hidden lg:block bg-customBlue text-white text-base font-medium py-3 px-4 rounded-lg hover:bg-opacity-80">
          + New Bill
        </button>
      </div>
    </div>
  );
};

export default Bill;
