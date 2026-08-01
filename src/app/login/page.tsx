"use client";

import { useState } from "react";

import InputPassword from "@/src/components/Ui/login & register/InputPassword";
import InputPhone from "@/src/components/Ui/login & register/InputPhone";
import { loginApi } from "@/src/app/auth/User/UserApi";

export default function Login() {

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      phone,
      password,
    };

    loginApi(data);

  };


  return (
    <main className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-[#EFE1D1]
      px-5
    ">

      <form
        onSubmit={handleSubmit}
        className="
          w-full
          max-w-md
          bg-white
          rounded-2xl
          shadow-lg
          p-8
          flex
          flex-col
          gap-6
        "
      >

        <h1 className="
          text-3xl
          font-bold
          text-center
          text-[#432E1A]
        ">
          تسجيل الدخول
        </h1>


        <InputPhone
          value={phone}
          setValue={setPhone}
        />


        <InputPassword
          value={password}
          setValue={setPassword}
        />


        <button
          type="submit"
          className="
            h-12
            rounded-xl
            bg-[#432E1A]
            text-[#EFE1D1]
            font-semibold
            hover:bg-[#5a3c22]
            transition
          "
        >
          دخول
        </button>


      </form>

    </main>
  );
}