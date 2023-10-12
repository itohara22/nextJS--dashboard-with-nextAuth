import BarChart from "./charts/BarChart";

type Users = {
  Guest: number;
  User: number;
};

type Props = {
  users: Users[];
};

export default function ActivityChart({ users }: Props) {
  return (
    <div className="mx-auto mt-4 rounded-md w-[90%] max-w-[1050px] h-[280px] bg-white drop-shadow-md p-2">
      <h2 className="text-lg font-semibold">Activities</h2>
      <div className=" h-[80%] p-0 grid">
        <BarChart users={users} />
      </div>
    </div>
  );
}
