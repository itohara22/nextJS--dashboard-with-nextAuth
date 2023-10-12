import ActivityChart from "@/components/ActivityChart";
import AddUser from "@/components/AddUser";
import Header from "@/components/Header";
import Sidebar from "@/components/SideBar";
import TopCards from "@/components/TopCard";
import DoughnutChart from "@/components/charts/DougnutChart";

export default async function Dashboard() {
  const res = await fetch(
    "https://www.open-in-app-dashboard-a8u3tpk5l-itohara22.vercel.app/api/products",
    {
      cache: "no-store"
    }
  ).then((data) => data.json());

  const users = await fetch(
    "https://www.open-in-app-dashboard-a8u3tpk5l-itohara22.vercel.app/api/users",
    {
      cache: "no-store"
    }
  ).then((data) => data.json());

  return (
    <div className="min-h-screen bg-[#F8FAFF]">
      <Sidebar />
      <div className="md:ml-[min(25vw,280px)]  h-full">
        <Header />
        <TopCards />
        <ActivityChart users={users} />
        <div className="mx-auto mt-4 mb-4 w-[90%] max-w-[1050px] grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
          <div className="bg-white p-2 rounded-lg drop-shadow-lg">
            <h2 className="text-lg font-semibold">Top Products</h2>
            <DoughnutChart res={res} />
          </div>
          <AddUser />
        </div>
      </div>
    </div>
  );
}
