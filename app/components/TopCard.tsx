import Image from "next/image";
import likes from "@/public/likes.svg";
import transaction from "@/public/transaction.svg";
import revenue from "@/public/revenue.svg";
import user from "@/public/user-2.svg";

export default async function TopCards() {
  return (
    <div className="min-h-[120px] grid grid-cols-[repeat(auto-fill,minmax(200px,250px))] justify-center gap-4 px-4 md:px-8 lg:px-10">
      <div className="h-[120px] rounded-lg drop-shadow-md bg-white py-2 px-4 flex flex-col gap-1">
        <div className="bg-[#7FCD93] p-3 w-fit rounded-full">
          <Image alt="total likes" src={revenue} width={15} height={15} />
        </div>
        <h3 className="text-xs">Total Revenue</h3>
        <div className="flex justify-between items-center">
          <span className="text-4xl font-bold">$2,123,000</span>
          <span className="px-2 py-1 bg-green-100 text-green-600 rounded-md text-xs">
            +1.4%
          </span>
        </div>
      </div>
      <div className="h-[120px] rounded-lg drop-shadow-md bg-white py-2 px-4 flex flex-col gap-1">
        <div className="bg-[#DEBF85] p-3 w-fit rounded-full">
          <Image alt="total likes" src={transaction} width={15} height={15} />
        </div>
        <h3 className="text-xs">Total Transaction</h3>
        <div className="flex justify-between items-center">
          <span className="text-4xl font-bold">1,520</span>
          <span className="px-2 py-1 bg-green-100 text-green-600 rounded-md text-xs">
            +1.4%
          </span>
        </div>
      </div>
      <div className="h-[120px] rounded-lg drop-shadow-md bg-white py-2 px-4 flex flex-col gap-1">
        <div className="bg-[#ECA4A4] p-3 w-fit rounded-full">
          <Image alt="total likes" src={likes} width={15} height={15} />
        </div>
        <h3 className="text-xs">Total likes</h3>
        <div className="flex justify-between items-center">
          <span className="text-4xl font-bold">9,721</span>
          <span className="px-2 py-1 bg-green-100 text-green-600 rounded-md text-xs">
            +1.4%
          </span>
        </div>
      </div>
      <div className="h-[120px] rounded-lg drop-shadow-md bg-white py-2 px-4 flex flex-col gap-1">
        <div className="bg-[#A9B0E5] p-3 w-fit rounded-full">
          <Image alt="total likes" src={user} width={15} height={15} />
        </div>
        <h3 className="text-xs">Total Users</h3>
        <div className="flex justify-between items-center">
          <span className="text-4xl font-bold">9,712</span>
          <span className="px-2 py-1 bg-green-100 text-green-600 rounded-md text-xs">
            +1.4%
          </span>
        </div>
      </div>
    </div>
  );
}
