"use client";
import * as React from "react";
import Transactions from "../transactions/transactions";

const UpcomingPayments: React.FC = () => {
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
    <Transactions />
    // <div className="bg-[#fff] rounded-lg p-5 w-full">
    //   <div className="flex justify-between w-full mb-6">
    //     <h3 className="text-gray-950 font-bold lg:text-lg text-base">
    //       Upcoming Payments
    //     </h3>
    //   </div>
    //   <div className="w-full">
    //     {recentTransactions.map((item, index) => (
    //       <div
    //         key={index}
    //         className="py-4 border-b-[0.1px] border-[#D2D2D2] w-full flex justify-between mb-2"
    //       >
    //         <div className="mr-auto">
    //           <h3 className="text-gray-950 font-medium text-sm mb-2">
    //             {item.title}
    //           </h3>
    //           <p className=" text-customGray1 text-xs font-medium">
    //             {item.date}
    //           </p>
    //         </div>
    //         <h3 className="text-base font-medium">&#8358; {item.amount}</h3>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};

export default UpcomingPayments;
