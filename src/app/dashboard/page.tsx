import Card from "@/components/cards/card";
import Navbar from "@/components/navbar/navbar";
import Sidebar from "@/components/sidebar/sidebar";

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
    <div className="flex lg:pl-8 lg:px-0 bg-white">
      <div>
        <Sidebar />
      </div>
      <div className="w-full">
        <Navbar />
        <div className="bg-[#E5E6EB] h-[50vh] p-5 pt-20 lg:pt-5 w-full lg:pr-9">
          <div className="grid grid-flow-row lg:grid-cols-3 gap-3">
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
        </div>
      </div>
    </div>
  );
}
