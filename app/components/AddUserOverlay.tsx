import Image from "next/image";

import add from "@/public/add.svg";

type Props = {
  setIsUser: (arg: boolean) => void;
};

export default function AddUserOverlay({ setIsUser }: Props) {
  return (
    <div
      onClick={() => setIsUser(true)}
      className="absolute inset-0 bg-white z-10 rounded-lg grid place-items-center cursor-pointer"
    >
      <div>
        <Image
          src={add}
          alt="add user btn"
          height={50}
          width={50}
          className="p-3 bg-gray-200 w-[70px] aspect-square rounded-full"
        />
        <span className="text-sm text-gray-500">Add Profile</span>
      </div>
    </div>
  );
}
