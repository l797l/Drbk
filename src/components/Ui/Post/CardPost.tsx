import Image from "next/image";

type Post = {
  urlImagePost: string;
  nameCar: string;
  area: string[];
  status: number;
  university: string;
  governorate: string;
  desciption: string;
  shift: number;
  phoneNumber: string;
  fullName: string;
};

type CardPostProps = {
  post: Post;
};

export default function CardPost({ post }: CardPostProps) {
  return (
    <div className="overflow-hidden rounded-3xl bg-[#432E1A] shadow-xl transition hover:scale-[1.01 ">
      <div className="flex flex-col md:flex-row ">
        {/* Content */}
        <div className="flex flex-1 flex-col justify-between p-6 text-[#EFE1D1] ">
          {/* Header */}
          <div>
            <div className="mb-4 flex items-center justify-between gap-3">
              <h2 className="text-2xl font-bold">{post.nameCar}</h2>

              <span
                className={`rounded-full px-4 py-1 text-sm font-bold ${
                  post.status === 0
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                }`}
              >
                {post.status === 0 ? "متوفر" : "محجوز"}
              </span>
            </div>

            <p className="leading-7 text-[#EFE1D1]/80">{post.desciption}</p>
          </div>

          {/* Information */}
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-[#EFE1D1]/60">الجامعة</p>

              <p className="font-semibold">{post.university}</p>
            </div>

            <div>
              <p className="text-[#EFE1D1]/60">المحافظة</p>

              <p className="font-semibold">{post.governorate}</p>
            </div>

            <div>
              <p className="text-[#EFE1D1]/60">الشفت</p>

              <p className="font-semibold">
                {post.shift === 0 ? "صباحي" : "مسائي"}
              </p>
            </div>

            <div>
              <p className="text-[#EFE1D1]/60">السائق</p>

              <p className="font-semibold">{post.fullName}</p>
            </div>
          </div>

          {/* Areas */}
          <div className="mt-6">
            <p className="mb-3 text-sm text-[#EFE1D1]/60">المناطق</p>

            <div className="flex flex-wrap gap-2">
              {post.area.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-[#5B3F22] px-4 py-1 text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <a
              href={`tel:${post.phoneNumber}`}
              className="rounded-xl bg-[#EFE1D1] px-6 py-3 text-center font-bold text-[#432E1A] transition hover:bg-white"
            >
              📞 اتصال
            </a>

            <p className="text-sm text-[#EFE1D1]/70">{post.phoneNumber}</p>
          </div>
        </div>
        {/* Image */}
        <div className="md:w-[35%]">
          <div className="relative h-64 w-full md:h-full">
            <Image
              src={post.urlImagePost}
              alt={post.nameCar}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
