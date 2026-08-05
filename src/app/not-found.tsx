import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="flex flex-col items-center justify-center text-center">
        <Image
          src="/NotFound.png"
          alt="Not Found"
          width={300}
          height={300}
          className="
            w-40
            h-40
            sm:w-52
            sm:h-52
            md:w-64
            md:h-64
            object-contain
          "
        />

        <h1
          className="
            mt-6
            text-4xl
            sm:text-5xl
            md:text-6xl
            font-bold
            text-[#432E1A]
          "
        >
          404
        </h1>

        <p
          className="
            mt-3
            text-base
            sm:text-lg
            text-gray-500
          "
        >
          عذراً، الصفحة التي تبحث عنها غير موجودة
        </p>

        <Link
          href="/"
          className="
            mt-6
            rounded-xl
            bg-[#432E1A]
            px-6
            py-3
            text-[#EFE1D1]
            transition
            hover:opacity-80
          "
        >
          العودة للرئيسية
        </Link>
      </div>
    </div>
  );
}