"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signIn("credentials", {
      email,
      password,
      callbackUrl: "/dashboard"
    });
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col justify-around gap-4 h-[380px] w-[80vw] sm:w-[40vw] max-w-[420px] mr-0 sm:mr-[10vw] lg:mr-[15vw]"
    >
      <button
        className="bg-gray-200 p-2 rounded-lg text-sm hover:bg-blue-500 hover:text-white font-semibold transition-all"
        type="button"
        onClick={() => signIn("google")}
      >
        SignIn with Google
      </button>
      <div className="flex flex-col">
        <label htmlFor="email" className="text-sm mb-4">
          Email Address
        </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          id="email"
          className="p-2 rounded-md bg-gray-100 focus:bg-gray-200 focus:border-0"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="password" className="text-sm mb-4">
          Password
        </label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          id="password"
          className="p-2 rounded-md bg-gray-100 focus:bg-gray-200 focus:border-0"
        />
      </div>
      <div className="flex flex-col gap-4">
        <a href="#" className="text-xs">
          Forgot password ?
        </a>
        <button className="bg-blue-500 p-2 rounded-md text-white">Login</button>
      </div>
      <span className="text-center text-xs">
        Don&apos;t have an account <a href="#">create an account</a>
      </span>
    </form>
  );
}
