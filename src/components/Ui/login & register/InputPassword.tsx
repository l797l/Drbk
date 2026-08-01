"use client";

import { useState } from "react";
import Image from "next/image";

type InputPasswordProps = {
  title?: string;
  placeholder?: string;
 value: string;
  setValue: (value: string) => void;
};


export default function InputPassword({
  title = "كلمة المرور",
  placeholder = "12345aa",
}: InputPasswordProps) {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full flex flex-col gap-2">

      {/* Text فوق الحقل */}
      <label className="text-[#432E1A] font-semibold text-right">
        {title}
      </label>


      {/* Input Box */}
      <div className="relative">

        <input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          className="
            w-full
            h-12
            rounded-xl
            border
            border-[#432E1A]
            bg-[#EFE1D1]
            px-4
            pr-12
            text-[#432E1A]
            placeholder:text-[#432E1A]/50
            outline-none
            focus:ring-2
            focus:ring-[#432E1A]
            transition
          "
        />


        {/* زر اظهار الباسورد */}
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="
            absolute
            right-3
            top-1/2
            -translate-y-1/2
          "
        >

          {showPassword ? (

            <Image
              src="/hidden.png"
              alt="Hide Password"
              width={48}
             height={48}
            />

          ) : (

            <Image
              src="/apparent.png"
              alt="Show Password"
              width={48}
              height={48}
            />

          )}

        </button>

      </div>


      {/* Text helping */}
      <p className="text-xs text-[#432E1A]/70 text-right">
        يجب أن تحتوي كلمة المرور على أحرف وأرقام مثل 12345aa
      </p>

    </div>
  );
}