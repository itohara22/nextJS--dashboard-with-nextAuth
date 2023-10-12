"use client";

import Image from "next/image";
import { useState } from "react";

import burger from "@/public/burger.svg";
import dashboard from "@/public/dashboard.svg";
import schedule from "@/public/schedule.svg";
import settings from "@/public/setting.svg";
import transaction from "@/public/transaction.svg";
import user from "@/public/user.svg";

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div
      className={`fixed bg-blue-500 inset-y-0 ${
        showNav ? "pl-8 w-64" : "w-0"
      } z-20 md:w-[25vw] md:max-w-[280px] overflow-hidden transition-[width_padding]  duration-75`}
    >
      <nav className="pt-10 md:pl-8 lg:pl-12">
        <a href="#">
          <h1 className="text-4xl font-bold text-white ">Board.</h1>
        </a>
        <ul className="text-[0.9rem] flex flex-col gap-3 h-[85vh] pt-10">
          <li className="mb-4 flex justify-start gap-3">
            <Image src={dashboard} alt="" width={18} height={18} />
            <a href="#" className="text-white hover:text-blue-400">
              Dashboard
            </a>
          </li>
          <li className="mb-4 flex justify-start gap-3">
            <Image src={transaction} width={18} height={18} alt="" />
            <a href="#" className="text-white hover:text-blue-400">
              Transaction
            </a>
          </li>
          <li className="mb-4 flex justify-start gap-3">
            <Image src={schedule} alt="" width={18} height={18} />
            <a href="#" className="text-white hover:text-blue-400">
              Schedule
            </a>
          </li>
          <li className="mb-4 flex justify-start gap-3">
            <Image src={user} alt="" width={18} height={18} />
            <a href="#" className="text-white hover:text-blue-400">
              User
            </a>
          </li>
          <li className="mb-4 flex justify-start gap-3">
            <Image src={settings} alt="" width={18} height={18} />
            <a href="#" className="text-white hover:text-blue-400">
              Settings
            </a>
          </li>
          <li className="mb-4 flex justify-start gap-3 mt-auto">
            <a href="#" className="text-white text-xs hover:text-blue-400">
              Help
            </a>
          </li>
          <li className="mb-4 flex justify-start gap-3">
            <a href="#" className="text-white text-xs hover:text-blue-400">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
      <button
        className="md:scale-0 fixed scale-100 bottom-4 right-4 p-3 bg-blue-500 rounded-full transition-[transform]"
        onClick={() => setShowNav(!showNav)}
      >
        <Image src={burger} alt="toggle nav button" width={30} height={30} />
      </button>
    </div>
  );
};

export default Sidebar;
