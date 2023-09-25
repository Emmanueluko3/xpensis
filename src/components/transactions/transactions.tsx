"use client";
import React, { useEffect, useState } from "react";
import Modal from "../molecules/Modals/modal";
import { useSession } from "next-auth/react";
import { AllTransactions } from "@/lib/outerbase/allCommands";

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
  const { data: session }: any = useSession();
  const userId = session?.user?.items[0]?.userId;
  const [allTransactions, setAllTransactions] = useState([]);
  const [viewAllTransactions, setViewAllTransactions] = useState(false);
  console.log("Financial Data", allTransactions);
  useEffect(() => {
    async function fetchTransactions() {
      try {
        const data = await AllTransactions(userId?.toString());
        setAllTransactions(data);
      } catch (error) {
        console.error("Error in fetchTransactions:", error);
      }
    }
    fetchTransactions();
  }, [userId]);

  function formatDate(inputDate: string) {
    const date = new Date(inputDate);
    const formattedDate = date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    return formattedDate;
  }

  const showAllTransactions = (
    <div className="p-5 rounded-lg bg-[#fff] lg:w-[40vw] overflow-x-auto max-h-[90vh] no-scrollbar">
      <div className="flex justify-between pb-3 mb-5 border-b">
        <h2 className="text-2xl text-gray-950 font-bold">
          Recent Transactions
        </h2>
        <button
          className=" text-customGray hover:text-customBlue"
          onClick={() => setViewAllTransactions(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M12 11.0102L11.6465 10.6567L6.49494 5.50511C6.49492 5.50509 6.4949 5.50507 6.49488 5.50506C6.36362 5.37386 6.18563 5.30016 6.00004 5.30016C5.81447 5.30016 5.6365 5.37384 5.50524 5.505C5.50521 5.50504 5.50517 5.50507 5.50514 5.50511M12 11.0102L5.50514 5.50511M12 11.0102L12.3536 10.6567L17.5052 5.50506L17.5052 5.50511L17.5113 5.49886C17.5759 5.432 17.6531 5.37867 17.7385 5.34199C17.8239 5.3053 17.9158 5.28599 18.0087 5.28518C18.1016 5.28438 18.1938 5.30209 18.2798 5.33728C18.3659 5.37248 18.444 5.42446 18.5098 5.49018C18.5755 5.55591 18.6275 5.63406 18.6627 5.72009C18.6979 5.80612 18.7156 5.8983 18.7148 5.99124C18.7139 6.08418 18.6946 6.17604 18.658 6.26144C18.6213 6.34684 18.5679 6.42408 18.5011 6.48866L18.501 6.4886L18.4949 6.49475L13.3433 11.6463L12.9897 11.9999L13.3433 12.3535L18.4914 17.5016C18.6173 17.6333 18.6868 17.809 18.6853 17.9912C18.6837 18.1748 18.6101 18.3503 18.4803 18.4801C18.3505 18.6099 18.1749 18.6835 17.9914 18.6851C17.8091 18.6867 17.6335 18.6171 17.5017 18.4913L12.3536 13.3431L12 12.9896L11.6465 13.3431L6.49836 18.4913C6.36663 18.6171 6.19098 18.6867 6.0087 18.6851C5.82516 18.6835 5.64959 18.6099 5.51981 18.4801C5.39002 18.3503 5.3164 18.1748 5.31481 17.9912C5.31322 17.809 5.38281 17.6333 5.50867 17.5016L10.6568 12.3535L11.0103 11.9999L10.6568 11.6463L5.50524 6.4948M12 11.0102L5.50524 6.4948M5.50514 5.50511C5.37397 5.63637 5.30029 5.81434 5.30029 5.9999C5.30029 6.18549 5.37399 6.36348 5.50519 6.49475M5.50514 5.50511L5.50519 6.49475M5.50519 6.49475C5.50521 6.49477 5.50523 6.49478 5.50524 6.4948M5.50519 6.49475L5.50524 6.4948"
              fill="currentColor"
              stroke="currentColor"
            />
          </svg>
        </button>
      </div>
      <div className="w-full">
        {allTransactions.map((item: any, index) => (
          <div
            key={index}
            className="py-4 border-b border-[#D2D2D2] w-full flex justify-between mb-2"
          >
            <div
              className={`flex justify-center text-2xl items-center w-9 h-9 rounded-full bg-opacity-5 mr-3 ${
                item.type === "credit" ? "bg-customGreen" : "bg-customRed"
              }`}
            >
              {item.type === "credit" ? fundingIcon : spendingIcon}
            </div>
            <div className="mr-auto">
              {" "}
              <h3 className="text-gray-950 font-medium text-sm mb-2">
                {item.type === "credit" ? "Wallet Funding" : item.title}
              </h3>
              <p className=" text-customGray1 text-xs font-medium">
                {formatDate(item.date)}
              </p>
            </div>
            <h3 className="text-base font-medium">&#8358; {item.amount}.0</h3>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-[#fff] rounded-lg p-5 w-full">
      {viewAllTransactions && (
        <Modal
          onClose={() => {
            setViewAllTransactions(false);
          }}
        >
          {showAllTransactions}
        </Modal>
      )}
      <div className="flex justify-between w-full mb-6">
        <h3 className="text-gray-950 font-bold text-base">
          Recent Transactions
        </h3>
        <button
          onClick={() => setViewAllTransactions(true)}
          className="text-sm text-customGray1 hover:text-gray-700"
        >
          View all
        </button>
      </div>
      <div className="w-full">
        {allTransactions?.map((item: any, index) => (
          <div
            key={index}
            className="py-4 border-b border-[#D2D2D2] w-full flex justify-between mb-2"
          >
            <div
              className={`flex justify-center text-2xl items-center w-9 h-9 rounded-full bg-opacity-5 mr-3 ${
                item.type === "credit" ? "bg-customGreen" : "bg-customRed"
              }`}
            >
              {item.type === "credit" ? fundingIcon : spendingIcon}
            </div>
            <div className="mr-auto">
              <h3 className="text-gray-950 font-medium text-sm mb-2">
                {item.type === "credit" ? "Wallet Funding" : item.title}
              </h3>
              <p className=" text-customGray1 text-xs font-medium">
                {formatDate(item.date)}
              </p>
            </div>
            <h3 className="text-base font-medium">&#8358; {item.amount}.0</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;

// const recentTransactions = [
//   {
//     title: "Rent",
//     amount: 120000,
//     date: "2023-09-23T00:00:00Z",
//     type: "debit",
//   },
//   {
//     title: "Rent",
//     amount: 120000,
//     date: "2023-09-23T00:00:00Z",
//     type: "credits",
//   },
//   {
//     title: "Wallet Funding",
//     amount: 2220000,
//     date: "2023-09-23T00:00:00Z",
//     type: "incoming",
//   },
//   {
//     title: "Rent",
//     amount: 120000,
//     date: "2023-09-23T00:00:00Z",
//     type: "outgoing",
//   },
//   {
//     title: "Rent",
//     amount: 120000,
//     date: "2023-09-23T00:00:00Z",
//     type: "outgoing",
//   },
//   {
//     title: "Wallet Funding",
//     amount: 2220000,
//     date: "2023-09-23T00:00:00Z",
//     type: "incoming",
//   },
//   {
//     title: "Rent",
//     amount: 120000,
//     date: "2023-09-23T00:00:00Z",
//     type: "outgoing",
//   },
// ];
