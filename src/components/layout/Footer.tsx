"use client";

import Image from "next/image";
import Link from "next/link";
import TextInFooter from "./../Ui/Footer/TextInFooter";

export default function Footer() {
  return (
    <footer className="bg-[#432E1A] text-[#EFE1D1] mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* Logo */}
          <div className="flex flex-col items-center lg:items-end text-center lg:text-right">

            <Image
              src="/logo.png"
              alt="Logo"
              width={170}
              height={170}
              className="object-contain"
            />

            <p className="mt-4 text-sm leading-8 max-w-sm text-[#EFE1D1]/80">
              منصة تساعد الطلاب والسائقين على الوصول بسهولة وأمان، مع تجربة
              استخدام حديثة وسريعة تجعل التنقل أكثر راحة.
            </p>

          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">

            <h2 className="text-xl font-bold mb-6">
              روابط سريعة
            </h2>

            <div className="flex flex-col gap-4 text-center">

              <Link href="/">
                <TextInFooter text="الرئيسية" />
              </Link>

              <Link href="/about">
                <TextInFooter text="عن الفريق" />
              </Link>

              <Link href="/how-to-use">
                <TextInFooter text="كيفية الاستخدام" />
              </Link>

              <Link href="/support">
                <TextInFooter text="الدعم" />
              </Link>

            </div>

          </div>

          {/* Contact */}
          <div className="flex flex-col items-center lg:items-end">

            <h2 className="text-xl font-bold mb-6">
              تواصل معنا
            </h2>

            <Link
              href="mailto:support@tamraline.com"
              className="flex items-center gap-3 mb-8 text-[#EFE1D1]/90 hover:text-white transition"
            >
              <i className="fa-solid fa-envelope text-lg"></i>
              <span>support@tamraline.com</span>
            </Link>

            <div className="flex items-center gap-6 text-2xl">

              <Link
                href="https://facebook.com"
                className="hover:text-blue-500 transition duration-300 hover:-translate-y-1"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </Link>

              <Link
                href="https://instagram.com"
                className="hover:text-pink-500 transition duration-300 hover:-translate-y-1"
              >
                <i className="fa-brands fa-instagram"></i>
              </Link>

              <Link
                href="https://x.com"
                className="hover:text-gray-300 transition duration-300 hover:-translate-y-1"
              >
                <i className="fa-brands fa-x-twitter"></i>
              </Link>

              <Link
                href="https://linkedin.com"
                className="hover:text-sky-400 transition duration-300 hover:-translate-y-1"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </Link>

              <Link
                href="https://youtube.com"
                className="hover:text-red-500 transition duration-300 hover:-translate-y-1"
              >
                <i className="fa-brands fa-youtube"></i>
              </Link>

            </div>

          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-[#EFE1D1]/20 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">

          <p className="text-sm text-[#EFE1D1]/70">
            © 2026 <span className="font-semibold">TamraLine</span>. جميع الحقوق محفوظة.
          </p>

          <p className="text-xs text-[#EFE1D1]/50">
            صُنع لتسهيل التنقل بين الطلاب والسائقين.
          </p>

        </div>

      </div>
    </footer>
  );
}