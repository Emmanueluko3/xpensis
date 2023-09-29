"use client";
import React, { useEffect, useState } from "react";
import { PostData } from "@/lib/outerbase/allCommands";

type SortFunction<T> = (a: T, b: T) => number;

const sortByDate: SortFunction<any> = (a, b) =>
  new Date(b.date).getTime() - new Date(a.date).getTime();

const ScheduledPayment: React.FC = () => {
  const [userBills, setUserBills] = useState<any[]>([]);
  useEffect(() => {
    async function fetchUserBills() {
      try {
        const data = await PostData({}, "/bills");
        setUserBills(data.response.items);
      } catch (error) {
        console.error("Error in fetchUserBills:", error);
      }
    }
    fetchUserBills();
  }, []);
  return (
    <div className="bg-[#fff] w-full rounded-lg p-5">
      <div className="flex justify-between w-full mb-4">
        <h3 className="text-gray-950 font-bold text-base">Recurring Bills</h3>
      </div>

      <div className="overflow-x-auto max-w-[310px] no-scrollbar lg:max-w-full grid grid-flow-col gap-3">
        {userBills
          .filter((item) => item.isRecurring === 1)
          ?.sort(sortByDate)
          ?.map((item, index) => (
            <div
              key={index}
              className=" w-48 flex flex-col p-5 border border-[#D2D2D2] rounded-lg"
            >
              <h3 className="text-gray-950 font-bold text-lg mb-2 ">
                {item.title}
              </h3>
              <p className="text-customGray1 text-xs">
                &#8358; {item.limitAmount.toLocaleString()}
                {item.period}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ScheduledPayment;
