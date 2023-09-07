import Goal from "@/components/goal/goal";
import Navbar from "@/components/navbar/navbar";
import Sidebar from "@/components/sidebar/sidebar";
import UpcomingPayments from "@/components/upcomingPayments/upcomingPayments";

export default function Bills() {
  return (
    <div className="flex lg:pl-8 lg:px-0 bg-white">
      <div>
        <Sidebar />
      </div>
      <div className="w-full">
        <Navbar />
        <div className="bg-[#F9FAFA] h-full p-5 pt-20 pb-24 lg:pb-5 lg:pt-5 w-full lg:pr-9">
          <div className="w-full mb-5 grid grid-flow-row lg:grid-cols-3 gap-3">
            <div className="w-full lg:col-span-2">
              <Goal />
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
