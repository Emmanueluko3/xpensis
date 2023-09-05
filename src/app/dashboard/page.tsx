import Card from "@/components/cards/card";
import AreaChart from "@/components/charts/areaChart";
import Navbar from "@/components/navbar/navbar";
import ScheduledPayment from "@/components/scheduledPayment/scheduledPayment";
import Sidebar from "@/components/sidebar/sidebar";
import Transactions from "@/components/transactions/transactions";
import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(
  () => import("@/components/charts/areaChart"),
  { ssr: false }
);
export default function Dashboard() {
  const financialCategories = [
    {
      title: "Balance",
      price: 200000,
      duration: "Last Month",
      percentage: 5,
      variant: "#0784C7",
    },
    {
      title: "Expenses",
      price: 200000,
      duration: "Last Month",
      percentage: 10,
      variant: "#3D315B",
    },
    {
      title: "Savings",
      price: 200000,
      duration: "Last Month",
      percentage: 5,
      variant: "#F75C03",
    },
  ];
  return (
    <div className="flex lg:pl-8 lg:px-0 bg-[#fff]">
      <div>
        <Sidebar />
      </div>
      <div className="w-full">
        <Navbar />
        <div className="bg-[#F9FAFA] h-full p-5 pt-20 pb-24 lg:pb-5 lg:pt-5 w-full lg:pr-9">
          <div className="grid grid-flow-row lg:grid-cols-3 gap-3 mb-5">
            {financialCategories.map((item, index) => (
              <Card
                key={index}
                title={item.title}
                price={item.price}
                duration={item.duration}
                percentage={item.percentage}
                variant={item.variant}
              />
            ))}
          </div>

          <div className="w-full mb-5 grid grid-flow-row lg:grid-cols-3 gap-3">
            <div className="w-full lg:col-span-2">
              <div className="mb-5">
                <ScheduledPayment />
              </div>
              <div className="mb-5">
                <DynamicComponentWithNoSSR />
              </div>
            </div>
            <div className="lg:col-span-1">
              <Transactions />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
