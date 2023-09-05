import Navbar from "@/components/navbar/navbar";
import Sidebar from "@/components/sidebar/sidebar";

export default function Dashboard() {
  return (
    <div className="flex lg:pl-8 lg:px-0 bg-white">
      <div>
        <Sidebar />
      </div>
      <div className="w-full">
        <Navbar />
        <div className="bg-[#E5E6EB] h-full p-5 pt-20 pb-24 lg:pb-5 lg:pt-5 w-full lg:pr-9">
          This is Profile page
        </div>
      </div>
    </div>
  );
}
