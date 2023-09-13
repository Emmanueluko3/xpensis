"use client";
import * as React from "react";

const ScheduledPayment: React.FC = () => {
  const scheduledBills = [
    { title: "Netflix", amount: "3500", period: "/m" },
    { title: "Spotify", amount: "3500", period: "/m" },
    { title: "Apple Music", amount: "3500", period: "/m" },
    { title: "Netflix", amount: "3500", period: "/m" },
    { title: "Spotify", amount: "3500", period: "/m" },
    { title: "Apple Music", amount: "3500", period: "/m" },
  ];
  return (
    <div className="bg-[#fff] w-full rounded-lg p-5">
      <div className="flex justify-between w-full mb-4">
        <h3 className="text-gray-950 font-bold text-base">
          Scheduled Payments
        </h3>
      </div>

      <div className="overflow-x-auto max-w-[310px] no-scrollbar lg:max-w-full grid grid-flow-col gap-3">
        {scheduledBills.map((item, index) => (
          <div
            key={index}
            className=" w-48 flex flex-col p-5 border border-[#D2D2D2] rounded-lg"
          >
            <h3 className="text-gray-950 font-bold text-lg mb-2 ">
              {item.title}
            </h3>
            <p className="text-customGray1 text-xs">
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
