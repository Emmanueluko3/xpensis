"use client";
import React from "react";
import Finance from "../finance/finance";
import ScheduledPayment from "../scheduledPayment/scheduledPayment";
import dynamic from "next/dynamic";
import Transactions from "../transactions/transactions";

const DynamicComponentWithNoSSR = dynamic(
  () => import("@/components/charts/areaChart"),
  { ssr: false }
);

const Dashboard: React.FC = () => {
  return (
    <>
      <div className="mb-5">
        <Finance />
      </div>

      <div className="w-full mb-5 grid grid-flow-row lg:grid-cols-3 gap-3">
        <div className="w-full lg:col-span-2">
          <div className="mb-5 w-full">
            <ScheduledPayment />
          </div>
          <div className="mb-5 w-full">
            <DynamicComponentWithNoSSR />
          </div>
        </div>
        <div className="lg:col-span-1">
          <Transactions />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
