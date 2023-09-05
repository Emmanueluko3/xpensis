"use client";
import * as React from "react";

const ScheduledPayment: React.FC = () => {
  const scheduledBills = [
    { title: "Netflix", amount: "3500", period: "/m" },
    { title: "Spotify", amount: "3500", period: "/m" },
    { title: "Apple Music", amount: "3500", period: "/m" },
  ];
  return (
    <div className="bg-[#fff] rounded-lg p-5 w-full">
      <div className="flex justify-between w-full mb-4">
        <h3 className="text-gray-950 font-bold text-base">
          Scheduled Payments
        </h3>
        <button className="text-sm text-customGray1 hover:text-gray-700">
          View all
        </button>
      </div>

      <div className="grid grid-cols-3 grid-flow-row gap-4 overflow-x-auto">
        {scheduledBills.map((item, index) => (
          <div
            key={index}
            className="p-5 border border-[#D2D2D2] rounded-lg w-48"
          >
            <h3 className="text-gray-950 font-bold text-lg mb-2">
              {item.title}
            </h3>
            <p className=" text-customGray1 text-xs">
              &#8358; {item.amount}
              {item.period}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduledPayment;
