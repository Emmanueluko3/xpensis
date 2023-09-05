"use client";
import * as React from "react";

const spendingIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <path
      d="M4 12.6667L12.6667 4M12.6667 4V12.32M12.6667 4H4.34667"
      stroke="#C41B04"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const fundingIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
  >
    <path
      d="M12 3.33333L3.33333 12M3.33333 12L3.33333 3.68M3.33333 12L11.6533 12"
      stroke="#01992C"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Transactions: React.FC = () => {
  const recentTransactions = [
    {
      title: "Rent",
      amount: 120000,
      date: "15th May, 2023",
      status: "outgoing",
    },
    {
      title: "Rent",
      amount: 120000,
      date: "15th May, 2023",
      status: "outgoing",
    },
    {
      title: "Wallet Funding",
      amount: 2220000,
      date: "15th May, 2023",
      status: "incoming",
    },
    {
      title: "Rent",
      amount: 120000,
      date: "15th May, 2023",
      status: "outgoing",
    },
    {
      title: "Rent",
      amount: 120000,
      date: "15th May, 2023",
      status: "outgoing",
    },
    {
      title: "Wallet Funding",
      amount: 2220000,
      date: "15th May, 2023",
      status: "incoming",
    },
    {
      title: "Rent",
      amount: 120000,
      date: "15th May, 2023",
      status: "outgoing",
    },
  ];
  return (
    <div className="bg-[#fff] rounded-lg p-5 w-full">
      <div className="flex justify-between w-full mb-6">
        <h3 className="text-gray-950 font-bold text-base">
          Recent Transactions
        </h3>
        <button className="text-sm text-customGray1 hover:text-gray-700">
          View all
        </button>
      </div>
      <div className="w-full">
        {recentTransactions.map((item, index) => (
          <div
            key={index}
            className="py-4 border-b border-[#D2D2D2] w-full flex justify-between mb-2"
          >
            <div
              className={`flex justify-center text-2xl items-center w-9 h-9 rounded-full bg-opacity-5 mr-3 ${
                item.status === "incoming" ? "bg-customGreen" : "bg-customRed"
              }`}
            >
              {item.status === "incoming" ? fundingIcon : spendingIcon}
            </div>
            <div className="mr-auto">
              {" "}
              <h3 className="text-gray-950 font-medium text-sm mb-2">
                {item.title}
              </h3>
              <p className=" text-customGray1 text-xs font-medium">
                {item.date}
              </p>
            </div>
            <h3 className="text-base font-medium">&#8358; {item.amount}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;
