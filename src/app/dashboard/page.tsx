import Navbar from "@/components/navbar/navbar";
import ScheduledPayment from "@/components/scheduledPayment/scheduledPayment";
import Sidebar from "@/components/sidebar/sidebar";
import Transactions from "@/components/transactions/transactions";
import dynamic from "next/dynamic";
import Finance from "@/components/finance/finance";

const DynamicComponentWithNoSSR = dynamic(
  () => import("@/components/charts/areaChart"),
  { ssr: false }
);
export default function Dashboard() {
  return (
    <div className="flex lg:pl-8 lg:px-0 bg-[#fff]">
      <div>
        <Sidebar />
      </div>
      <div className="w-full">
        <Navbar />
        <div className="bg-[#F9FAFA] h-full p-5 pt-20 pb-24 lg:pb-5 lg:pt-5 w-full lg:pr-9">
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
        </div>
      </div>
    </div>
  );
}
