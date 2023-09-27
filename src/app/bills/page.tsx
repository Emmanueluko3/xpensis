"use client";
import Bill from "@/components/bills/bills";
import Navbar from "@/components/navbar/navbar";
import Sidebar from "@/components/sidebar/sidebar";
import UpcomingPayments from "@/components/upcomingPayments/upcomingPayments";
import { allBills } from "@/lib/outerbase/allCommands";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Bills() {
  const { data: session }: any = useSession();
  const userId = session?.user?.items[0]?.userId;

  const [userBills, setUserBills] = useState([]);
  useEffect(() => {
    async function fetchUserBills() {
      try {
        const data = await allBills(userId?.toString());
        setUserBills(data.response.items);
      } catch (error) {
        console.error("Error in fetchUserBills:", error);
      }
    }
    fetchUserBills();
  }, [userId]);
  return (
    <div className="flex lg:pl-8 lg:px-0 bg-[#fff]">
      <div>
        <Sidebar />
      </div>
      <div className="w-full">
        <Navbar />
        <div className="bg-[#F9FAFA] h-full p-5 pt-20 pb-24 lg:pb-5 lg:pt-5 w-full lg:pr-9">
          <div className="w-full mb-5 grid grid-flow-row lg:grid-cols-3 gap-3">
            <div className="w-full lg:col-span-2">
              <Bill userBills={userBills} />
            </div>
            <div className="lg:col-span-1">
              <UpcomingPayments />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
