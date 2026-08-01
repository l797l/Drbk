"use client";

import { useState } from "react";
import TextInHeader from "./../Ui/Header/TextInHeader";
import ButtonInHeader from "./../Ui/Header/ButtonInHeader";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#432E1A] text-white px-4 md:px-8 py-4">

      <div className="flex items-center justify-between">

        {/* Logo */}
        <div className="relative">
          <Image
            src="/logo.png"
            alt="Logo"
            width={220}
            height={220}
            className="
              w-32
              h-32
              sm:w-36
              sm:h-36
              md:w-44
              md:h-44
              object-contain
              -my-10
              sm:-my-12
              md:-my-14
              relative
              z-20
            "
          />
        </div>


        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <TextInHeader text="عن الفريق" />
          <TextInHeader text="كيفية الاستخدام" />
          <TextInHeader text="الدعم" />
        </nav>


        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <ButtonInHeader
            text="تسجيل الدخول"
            className="bg-transparent text-[#EFE1D1] border border-[#EFE1D1]"
          />

          <ButtonInHeader text="إنشاء حساب" />
        </div>


        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#EFE1D1] text-4xl"
        >
          ☰
        </button>

      </div>


      {/* Mobile Menu */}
      {open && (
        <div className="
          md:hidden
          mt-5
          flex
          flex-col
          gap-5
          items-center
          border-t
          border-[#EFE1D1]/30
          pt-5
        ">

          <TextInHeader text="عن الفريق" />
          <TextInHeader text="كيفية الاستخدام" />
          <TextInHeader text="الدعم" />

          <ButtonInHeader
            text="تسجيل الدخول"
            className="bg-transparent text-[#EFE1D1]   border border-[#EFE1D1]"
          />

          <ButtonInHeader text="إنشاء حساب" />

        </div>
      )}

    </header>
  );
}       
