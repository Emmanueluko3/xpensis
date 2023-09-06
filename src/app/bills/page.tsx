import Bill from "@/components/bills/bills";
import Navbar from "@/components/navbar/navbar";
import Sidebar from "@/components/sidebar/sidebar";

export default function Bills() {
  return (
    <div className="flex lg:pl-8 lg:px-0 bg-[#fff]">
      <div>
        <Sidebar />
      </div>
      <div className="w-full">
        <Navbar />
        <div className="bg-[#F9FAFA] h-full p-5 pt-20 pb-24 lg:pb-5 lg:pt-5 w-full lg:pr-9">
          <Bill />
        </div>
      </div>
    </div>
  );
}
