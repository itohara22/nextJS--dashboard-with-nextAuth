"use client";

import phone from "@/public/phone.svg";
import mail from "@/public/mail.svg";
import insta from "@/public/insta.svg";
import youtube from "@/public/youtube.svg";

import { useState } from "react";
import AddUserOverlay from "./AddUserOverlay";
import ProfileForm from "./ProfileForm";
import Image from "next/image";

type FormData = {
  name: string;
  email: string;
  phone: number;
  insta: string | null;
  youtube: string | null;
};

export default function AddUser() {
  const [isUser, setIsUser] = useState(false);
  const [dataEntered, setDataEntered] = useState(false);
  const [userData, setUserData] = useState<FormData>({
    name: "",
    email: "",
    phone: 0,
    insta: null,
    youtube: null
  });

  return (
    <>
      {isUser && (
        <ProfileForm
          userData={userData}
          setUserData={setUserData}
          setDataEntered={setDataEntered}
          setIsUser={setIsUser}
        />
      )}
      <div className=" relative h-[220px] bg-white py-4 px-8 rounded-lg drop-shadow-lg grid grid-rows-2 items-center">
        {dataEntered ? (
          <>
            <h3 className="text-3xl font-semibold">{userData.name}</h3>
            <div className="grid grid-cols-2 items-center text-sm h-full">
              {userData.phone !== 0 && (
                <div className="flex items-center justify-center  gap-1">
                  <Image alt="phone" src={phone} height={18} width={18} />
                  <span>{userData.phone}</span>
                </div>
              )}
              {userData.insta && (
                <div className="flex items-center justify-center gap-1">
                  <Image alt="insta" src={insta} height={18} width={18} />
                  <span>{userData.insta}</span>
                </div>
              )}
              {userData.email && (
                <div className="flex items-center justify-center gap-1">
                  <Image alt="mail" src={mail} height={18} width={18} />
                  <span>{userData.email}</span>
                </div>
              )}
              {userData.youtube && (
                <div className="flex items-center justify-center gap-1">
                  <Image alt="youtube" src={youtube} height={18} width={18} />
                  <span>{userData.youtube}</span>
                </div>
              )}
            </div>
          </>
        ) : (
          <AddUserOverlay setIsUser={setIsUser} />
        )}
      </div>
    </>
  );
}
