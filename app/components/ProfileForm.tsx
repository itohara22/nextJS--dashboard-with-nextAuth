"use client";

import { useState } from "react";
import FirstForm from "./loginForm/FirstForm";
import SecondForm from "./loginForm/SecondForm";

type FormData = {
  name: string;
  email: string;
  phone: number;
  insta: string | null;
  youtube: string | null;
};

type Props = {
  setUserData: (arg: () => FormData) => void;
  setDataEntered: (arg: boolean) => void;
  userData: FormData;
  setIsUser: (arg: boolean) => void;
};

export default function ProfileForm({
  setUserData,
  setDataEntered,
  userData,
  setIsUser
}: Props) {
  const [step, setStep] = useState(1);

  return (
    <div className="fixed inset-0 z-30 grid place-items-center backdrop-blur-sm">
      <div className="fixed inset-0 z-20 bg-black opacity-40"></div>
      <div className="z-30 bg-white rounded-lg drop-shadow-lg relative">
        <h1 className="text-xl pl-6 pt-6">Add New Profile</h1>
        {step === 1 ? (
          <FirstForm
            setStep={setStep}
            setUserData={setUserData}
            userData={userData}
          />
        ) : (
          <SecondForm
            setStep={setStep}
            setDataEntered={setDataEntered}
            userData={userData}
            setUserData={setUserData}
            setIsUser={setIsUser}
          />
        )}
        <button
          onClick={() => setIsUser(false)}
          className="absolute top-6 right-6 font-bold text-gray-500"
        >
          X
        </button>
      </div>
    </div>
  );
}
