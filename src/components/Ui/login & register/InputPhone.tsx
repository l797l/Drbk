"use client";

import { useState } from "react";
import Image from "next/image";

type InputPhone = {
  value: string;
  setValue: (value: string) => void;
};
export default function InputPhone({ value, setValue }: InputPhone) {
  const [phone, setPhone] = useState("07");
  const [error, setError] = useState(false);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    let value = e.target.value;

    //   allow only numbers
    value = value.replace(/\D/g, "");


    //   don't allow to start with 07
    if (!value.startsWith("07")) {
      value = "07";
    }


    // max length 11
    if (value.length > 11) {
      value = value.slice(0, 11);
    }


    setPhone(value);


    // check
    if (value.length === 11 && value.startsWith("07")) {
      setError(false);
    } else {
      setError(true);
    }

  };


  return (
    <div className="w-full flex flex-col gap-2">

      {/* addriss */}
      <label className=" text-[#432E1A] font-semibold text-right">
        رقم الهاتف
      </label>


      {/* Input */}
      <div
        className={`
          flex
          items-center
          bg-[#EFE1D1]
          rounded-xl
          border-2
          h-12
          transition
          ${
            error
            ? "border-red-500"
            : "border-[#432E1A]"
          }
        `}
      >


        {/* flag */}
        <div className="px-3 border-l border-[#432E1A]/20">

          <Image
            src="IQ-Flag.svg"
            alt="Iraq"
            width={28}
            height={20}
            className="object-contain"
          />

        </div>


        <input
          value={phone}
          onChange={handleChange}
          type="tel"
          placeholder="07700000000"
          className="
            flex-1
            bg-transparent
            outline-none
            px-4
            text-[#432E1A]
          "
        />


      </div>


      {/* message error*/}
      {error && (
        <p className="text-red-500 text-sm ">
          يجب أن يبدأ الرقم بـ 07 ويتكون من 11 رقم
        </p>
      )}


    </div>
  );
}