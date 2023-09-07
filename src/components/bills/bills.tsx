"use client";
import React, { useState } from "react";
import ProgressBar from "../atoms/progressbar";
import Modal from "../molecules/Modals/modal";

const energyIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="22"
    viewBox="0 0 18 22"
    fill="none"
  >
    <path
      d="M3.09 12.2799H6.18V19.4799C6.18 21.1599 7.09 21.4999 8.2 20.2399L15.77 11.6399C16.7 10.5899 16.31 9.7199 14.9 9.7199H11.81V2.5199C11.81 0.839898 10.9 0.499897 9.79 1.7599L2.22 10.3599C1.3 11.4199 1.69 12.2799 3.09 12.2799Z"
      stroke="#0784C7"
      stroke-width="1.5"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const recentTransactions = [
  {
    title: "Rent",
    amount: 120000,
    date: "15th May, 2023",
    status: "Paid",
  },
  {
    title: "Rent",
    amount: 120000,
    date: "15th May, 2023",
    status: "Pending",
  },
  {
    title: "Wallet Funding",
    amount: 2220000,
    date: "15th May, 2023",
    status: "Paid",
  },
  {
    title: "Rent",
    amount: 120000,
    date: "15th May, 2023",
    status: "Pending",
  },
  {
    title: "Rent",
    amount: 120000,
    date: "15th May, 2023",
    status: "Pending",
  },
  {
    title: "Wallet Funding",
    amount: 2220000,
    date: "15th May, 2023",
    status: "Paid",
  },
  {
    title: "Rent",
    amount: 120000,
    date: "15th May, 2023",
    status: "Pending",
  },
];

const Bill: React.FC = () => {
  const [tab, setTab] = useState(0);
  const [addBill, setAddBill] = useState(false);
  const tabs = ["Recurring Bills", "Non-recurring Bills"];

  const recurringBills = (
    <>
      {recentTransactions.map((item, index) => (
        <div
          key={index}
          className="py-4 border-b-[0.1px] border-[#D2D2D2] w-full flex justify-between mb-2"
        >
          <div className="w-full flex justify-center items-center">
            <div
              className={`flex justify-center text-2xl items-center w-9 h-9 rounded-full bg-opacity-5 mr-3 bg-customBlue`}
            >
              {energyIcon}
            </div>
            <div className="mr-auto">
              <h3 className="text-gray-950 font-normal text-sm mb-1">
                {item.title}
              </h3>
              <p className=" text-customGray1 text-xs font-normal">
                {item.date}
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col lg:flex-row justify-between items-end lg:items-center">
            <div className="lg:w-1/2 flex lg:items-center justify-center">
              <span
                className={`${
                  item.status === "Paid"
                    ? "bg-customDarkGreen"
                    : "bg-customDarkRed"
                } bg-opacity-10 px-3 lg:py-1 mb-1 lg:mb-0 rounded-full text-xs`}
              >
                {item.status}
              </span>
            </div>

            <h3 className="lg:text-base text-sm font-semibold lg:font-bold">
              &#8358; {item.amount}
            </h3>
          </div>
        </div>
      ))}
    </>
  );

  const nonRecurringBills = (
    <>
      {recentTransactions.map((item, index) => (
        <div
          key={index}
          className="py-4 border-b-[0.1px] border-[#D2D2D2] w-full flex justify-between mb-2"
        >
          <div className="lg:w-[45%] w-[70%] flex justify-center items-center">
            <div
              className={`flex justify-center text-2xl items-center w-9 h-9 rounded-full bg-opacity-5 mr-3 bg-customBlue`}
            >
              {energyIcon}
            </div>
            <div className="mr-auto">
              <h3 className="text-gray-950 font-normal text-sm">
                {item.title}
              </h3>
              <h3 className="text-sm font-semibold lg:hidden">
                &#8358; {item.amount}
              </h3>
            </div>
          </div>
          <div className="lg:w-[55%] w-[25%] flex flex-col lg:flex-row justify-between items-end lg:items-center">
            <div className="mr-auto w-full lg:w-1/2">
              <p className=" text-customGray1 text-xs font-normal mb-2">
                70/100%
              </p>
              <ProgressBar progress={20} addClassName="h-[6px]" />
            </div>

            <h3 className="text-base font-bold hidden lg:block">
              &#8358; {item.amount}
            </h3>
          </div>
        </div>
      ))}
    </>
  );

  const addBillForm = (
    <div className="p-5 rounded-lg bg-[#fff] lg:w-[40vw]">
      <div className="flex justify-between pb-3 mb-5 border-b">
        <h2 className="text-2xl text-gray-950 font-bold">New Bill</h2>
        <button
          className=" text-customGray hover:text-customBlue"
          onClick={() => setAddBill(false)}
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
      <form>
        <div className="rounded-lg border p-3 mb-3">
          <input
            type="text"
            placeholder="Title"
            className="w-full focus:outline-none"
          />
        </div>
        <div className="rounded-lg border p-3 mb-3">
          <select
            name=""
            id=""
            className="w-full placeholder:bg-[#fff] bg-[#fff] focus:outline-none"
          >
            <option value="Category">Category</option>
          </select>
        </div>
        <div className="rounded-lg border p-3 mb-3">
          <input
            type="text"
            placeholder="Amount"
            className="w-full focus:outline-none"
          />
        </div>

        <div className="rounded-lg p-3 mb-3">
          <p className="text-base text-customGray font-normal">Set Alert</p>
        </div>
        <div className="rounded-lg p-3 mb-3">
          <p className="text-base text-customGray font-normal">
            Make Recurring
          </p>
        </div>
        <button
          onClick={() => setAddBill(false)}
          className="flex justify-center items-center bg-customBlue text-white text-base font-medium py-3 px-4 rounded-lg hover:bg-opacity-80 w-full"
        >
          Create
        </button>
      </form>
    </div>
  );

  const handleCloseModal = () => {
    setAddBill(false);
  };

  return (
    <div className="rounded-lg bg-[#fff] w-full p-5">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center justify-between lg:w-auto w-full">
          {tabs.map((item, index) => (
            <button
              key={index}
              onClick={() => setTab(index)}
              className={`w-1/2 border-b-2 p-2 lg:pr-10 lg:pl-5 font-medium lg:text-[15px] text-sm whitespace-nowrap ${
                tab === index
                  ? "text-customBlue border-customBlue"
                  : "text-customGray border-gray-300"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        <button
          onClick={() => setAddBill(true)}
          className="hidden lg:block bg-customBlue text-white text-base font-medium py-2 px-4 rounded-lg hover:bg-opacity-80"
        >
          + New Bill
        </button>
      </div>
      <p className="mb-5 text-customGray text-sm">
        You can set alert for your expense limit
      </p>
      <div className="w-full mb-6 lg:mb-0">
        {tab === 0 && recurringBills}
        {tab === 1 && nonRecurringBills}
      </div>
      {addBill ? <Modal onClose={handleCloseModal}>{addBillForm}</Modal> : ""}
      <button
        onClick={() => setAddBill(true)}
        className="lg:hidden flex justify-center items-center bg-customBlue text-white text-base font-medium py-3 px-4 rounded-lg hover:bg-opacity-80 w-full"
      >
        + New Bill
      </button>
    </div>
  );
};

export default Bill;
