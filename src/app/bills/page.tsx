import Navbar from "@/components/navbar/navbar";
import Sidebar from "@/components/sidebar/sidebar";

export default function Bills() {
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div className="w-full">
        <Navbar />
        <div className="bg-[#E5E6EB] h-[50vh] p-5 pt-20 lg:pt-5 w-full lg:pr-9">
          This is Bills page
        </div>
      </div>
    </div>
  );
}
