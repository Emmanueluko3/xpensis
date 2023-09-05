"use client";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const expensesIcon = (
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

const savingsIcon = (
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

const AreaChart: React.FC = () => {
  const [chartData] = useState<{
    series: any[];
    options: ApexOptions;
  }>({
    series: [
      {
        name: "Expenses",
        data: [31, 40, 28, 51, 42, 109, 200],
      },
      {
        name: "Savings",
        color: "#F75C03",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },

      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  });

  return (
    <div className="rounded-lg bg-[#fff] w-full p-5">
      <div className="flex justify-between w-full mb-4">
        <h3 className="text-gray-950 font-bold text-base">Statistics</h3>
        <div className="text-sm text-gray-950 flex flex-row items-center">
          <span className="mr-2 text-customRed">{expensesIcon}</span> 5.0%
        </div>
      </div>
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="area"
        height={350}
      />
    </div>
  );
};

export default AreaChart;
