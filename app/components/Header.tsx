import Image from "next/image";

import bell from "@/public/bell.svg";
import user from "@/public/user-img.png";

export default function Header() {
  return (
    <div className="mb-6 mx-8 flex gap-4 items-center">
      <div className="text-2xl font-bold ">Dashboard</div>
      <div className="font-semibold text-white px-4 py-2 rounded ml-auto">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search..."
          className="p-1 rounded-md focus:outline-none bg-gray-100"
        />
      </div>
      <Image alt="notif. bell" src={bell} width={18} height={20} />
      <Image
        alt="user image"
        src={user}
        width={25}
        height={25}
        className="rounded-full"
      />
    </div>
  );
}
