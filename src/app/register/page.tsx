"use client";

import { useState } from "react";
import { registerApi } from "@/src/app/auth/User/UserApi";

import InputPhone from "@/src/components/Ui/login & register/InputPhone";
import InputPassword from "@/src/components/Ui/login & register/InputPassword";


export default function Register() {

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState(1);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();


    if(password !== confirmPassword){
      alert("كلمة المرور غير متطابقة");
      return;
    }


    const data = {
      fullName,
      phone,
      password,
      role
    };

    registerApi(data);
  };


  return (

    <main className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-[#EFE1D1]
      px-5
      py-10
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
          gap-5
        "
      >


        <h1 className="
          text-3xl
          font-bold
          text-center
          text-[#432E1A]
        ">
          إنشاء حساب
        </h1>



        {/* Full Name */}
        <div className="flex flex-col gap-2">

          <label className="text-right text-[#432E1A] font-semibold">
            الاسم الكامل
          </label>

          <input
            value={fullName}
            onChange={(e)=>setFullName(e.target.value)}
            placeholder="Ali Mahdi"
            className="
              h-12
              rounded-xl
              bg-[#EFE1D1]
              border
              border-[#432E1A]
              px-4
              outline-none
            "
          />

        </div>




        <InputPhone
          value={phone}
          setValue={setPhone}
        />



        <InputPassword
          value={password}
          setValue={setPassword}
          title="كلمة المرور"
        />



        <InputPassword
          value={confirmPassword}
          setValue={setConfirmPassword}
          title="تأكيد كلمة المرور"
          placeholder="اعد كتابة كلمة المرور"
        />



        {/* Role */}
        <div className="flex flex-col gap-2">

          <label className="text-right text-[#432E1A] font-semibold">
            نوع الحساب
          </label>


         <select
            value={role}
            onChange={(e) => setRole(Number(e.target.value))}
            className="
              h-12
              rounded-xl
              bg-[#EFE1D1]
              border
              border-[#432E1A]
              px-4
              outline-none
            "
          >
            <option value={1}>مستخدم</option>
            <option value={2}>سائق</option>
          </select>

                  </div>



        <button
          type="submit"
          className="
            h-12
            rounded-xl
            bg-[#432E1A]
            text-[#EFE1D1]
            font-bold
            hover:bg-[#5a3c22]
            transition
          "
        >
          إنشاء حساب
        </button>


      </form>


    </main>

  );
}